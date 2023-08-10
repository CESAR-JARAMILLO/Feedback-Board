import React, { useEffect, useState } from 'react'
import Comment from './Comment'
import { Flex, Text } from '@chakra-ui/react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

const Comments = () => {
  const [comments, setComments] = useState<any[] | null>(null)
  const supabase = useSupabaseClient()

  useEffect(() => {
    const getComments = async () => {
      try {
        const { data, error } = await supabase
          .from('comments')
          .select()
  
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
  }, []);

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