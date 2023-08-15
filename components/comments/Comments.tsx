import React, { useContext, useEffect, useState } from 'react'
import Comment from './Comment'
import { Flex, Text } from '@chakra-ui/react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import SelectedSuggestionContext  from '@/components/context/SelectedSuggestionContext'

const Comments = () => {
  const [comments, setComments] = useState<any[] | null>(null)
  const supabase = useSupabaseClient()
  const { selectedSuggestionId, setSelectedSuggestionId } = useContext(SelectedSuggestionContext);

  useEffect(() => {
    const getComments = async () => {
      try {
        const { data, error } = await supabase
          .from('comments')
          .select()
          .eq('suggestion_id', selectedSuggestionId)
  
        if (error) {
          console.error("An error occurred:", error);
          return;
        }
        
        setComments(data)
  
      } catch (error) {
        console.error("Unexpected error:", error);
      } finally {
        // Reset loading state
      }
    };
  
    getComments();
  }, [comments]);

  return (
    <Flex direction="column" bg="#FFF" mt="24px" borderRadius={10}>
      <Text ml="24px" mt="24px" color="#3A4374" fontSize="18px" fontWeight="bold" >{comments?.length} Comments</Text>
      <>
        {comments?.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
      </>
    </Flex>
  )
}

export default Comments