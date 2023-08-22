import{ useEffect, useState, useContext } from 'react'
import Suggestion from './Suggestion'
import { Box, Flex, useMediaQuery } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import EmptySuggestions from './EmptySuggestions'
import SelectedSuggestionContext  from '@/components/context/SelectedSuggestionContext'
import SelectedFilterContext from '@/components/context/SelectedFilterContext';
import SuggestionsSortContext from '../context/SuggestionsSortContext'

const Suggestions = () => {
  const { selectedSuggestionId, setSelectedSuggestionId } = useContext(SelectedSuggestionContext);
  const { selectedSort } = useContext(SuggestionsSortContext);
  const { selectedFilter } = useContext(SelectedFilterContext);
  const [suggestions, setSuggestions] = useState<any[] | null>(null)
  const [isLargerThanMD] = useMediaQuery("(min-width: 768px)");
  const supabase = useSupabaseClient()
  const router = useRouter()

  useEffect(() => {
    const getSuggestions = async () => {
      try {
        const { data, error } = await supabase.from('suggestions').select();

        if (error) {
          console.error("An error occurred:", error);
          return;
        }

        // Fetch comments and upvotes for all suggestions
        const enrichedSuggestions = await Promise.all(
          data.map(async (suggestion) => {
            const { data: comments } = await supabase
              .from('comments')
              .select()
              .eq('suggestion_id', suggestion.id);
            const { data: upvotes } = await supabase
              .from('upvotes')
              .select()
              .eq('suggestion_id', suggestion.id);

            return {
              ...suggestion,
              comments: comments || [],
              upvotes: upvotes || [],
            };
          })
        );

        // Sorting logic based on selectedSort
        let sortedSuggestions;
        switch (selectedSort) {
          case 'Most Upvotes':
            sortedSuggestions = enrichedSuggestions.sort((a, b) => b.upvotes.length - a.upvotes.length);
            break;
          case 'Least Upvotes':
            sortedSuggestions = enrichedSuggestions.sort((a, b) => a.upvotes.length - b.upvotes.length);
            break;
          case 'Most Comments':
            sortedSuggestions = enrichedSuggestions.sort((a, b) => b.comments.length - a.comments.length);
            break;
          case 'Least Comments':
            sortedSuggestions = enrichedSuggestions.sort((a, b) => a.comments.length - b.comments.length);
            break;
          default:
            sortedSuggestions = enrichedSuggestions;
        }

        setSuggestions(sortedSuggestions);
      } catch (error) {
        console.error("Unexpected error:", error);
      }
    };

    getSuggestions();
  }, [supabase, selectedSort]);

  const handleClick = (id: string) => () => {
    setSelectedSuggestionId(id);
    router.push('/feedback')
  };

  const filteredSuggestions = suggestions?.filter((suggestion) => {
    return selectedFilter === 'All' || suggestion.category === selectedFilter;
  });
  
  return (
    <Flex minH="90vh" gap="16px" direction="column" mx={isLargerThanMD ? 'none' : '24px'} mt="32px">
      {filteredSuggestions && filteredSuggestions.length > 0 ? (
        filteredSuggestions.map((suggestion, index) => (
          <Box onClick={handleClick(suggestion.id)} key={index}>
            <Suggestion suggestion={suggestion} />
          </Box>
        ))
      ) : (
        <EmptySuggestions />
      )}
    </Flex>
  );
}

export default Suggestions