import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import React, { useEffect, useState } from 'react'

interface SuggestionProps{
  suggestion: any;
}

const Suggestion = ({ suggestion }: SuggestionProps) => {
  const supabase =useSupabaseClient()
  const [comments, setComments] = useState<any[]>()
  const [upvotes, setUpvotes] = useState<any[]>()

  useEffect(() => {
    const getComments = async () => {
      try {
        const { data, error } = await supabase
          .from('comments')
          .select()
          .eq('suggestion_id', suggestion.id)
    
        if (error) {
          console.error("An error occurred:", error);
          return;
        }
    
        // Handle Success
        setComments(data)
      } catch (error) {
        console.error("Unexpected error:", error);
      } finally {
        // Restet loading state
      }
    }
    
    const getUpvotes = async () => {
      try {
        const { data, error } = await supabase
          .from('upvotes')
          .select()
          .eq('suggestion_id', suggestion.id)
    
        if (error) {
          console.error("An error occurred:", error);
          return;
        }
    
        // Handle Success
        setUpvotes(data)
      } catch (error) {
        console.error("Unexpected error:", error);
      } finally {
        // Restet loading state
      }
    }

    getComments()
    getUpvotes()
  }, [])

  return (
    <Flex mb="16px" fontSize="13px" p="24px" direction="column" bg="#FFF" borderRadius={10}>
            <Box mb="8px">
              <Text mb="9px" fontWeight="bold">{suggestion.title}</Text>
              <Text color="#647196">{suggestion.detail}</Text>
            </Box>
            <Button
              maxW="fit-content"
              fontSize="13px"
              fontWeight="semibold" 
              borderRadius="10px" 
              bg="#F2F4FF"
              color="#4661E6"
              mb="16px"
            >
              {suggestion.category}
            </Button>
            <Flex justify="space-between">
              <Button
                w="25%"
                fontSize="13px"
                fontWeight="semibold" 
                borderRadius="10px" 
                bg="#F2F4FF"
                color="#3A4374"
              >
                <Image mr={2} src="/images/shared/icon-arrow-up.svg"/>
                {upvotes?.length}
              </Button>
              <Flex alignItems="center" gap={2}>
                <Image w="18px" h="16px" src="/images/shared/icon-comments.svg"/>
                <Text fontWeight="bold">{comments?.length}</Text>
              </Flex>
            </Flex>
          </Flex>
  )
}

export default Suggestion