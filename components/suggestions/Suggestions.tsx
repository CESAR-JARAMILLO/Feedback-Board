import{ useEffect, useState, useContext } from 'react'
import Suggestion from './Suggestion'
import { Box, Flex, useMediaQuery } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import EmptySuggestions from './EmptySuggestions'
import SelectedSuggestionContext  from '@/components/context/SelectedSuggestionContext'
import SelectedFilterContext from '@/components/context/SelectedFilterContext';

const Suggestions = () => {
  const { selectedSuggestionId, setSelectedSuggestionId } = useContext(SelectedSuggestionContext);
  const { selectedFilter } = useContext(SelectedFilterContext);
  const [suggestions, setSuggestions] = useState<any[] | null>(null)
  const [isLargerThanMD] = useMediaQuery("(min-width: 768px)");
  const supabase = useSupabaseClient()
  const router = useRouter()

  useEffect(() => {
    const getSuggestions = async () => {
      try {
        const { data, error } = await supabase
          .from('suggestions')
          .select();
    
        if (error) {
          console.error("An error occurred:", error);
          return;
        }
    
        // Handle Success
        setSuggestions(data)
      } catch (error) {
        console.error("Unexpected error:", error);
      } finally {
        // Restet loading state
      }
    }

    getSuggestions()
  }, [supabase])

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