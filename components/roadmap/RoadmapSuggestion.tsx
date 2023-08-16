import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import React, { useEffect, useState } from 'react'

interface RoadmapSuggestionProps{
  suggestion: any;
}

const RoadmapSuggestion = ({ suggestion }: RoadmapSuggestionProps) => {
  const [upvotes, setUpvotes] = useState<any[]>()
  const [comments, setComments] = useState<any[]>()
  const supabase =useSupabaseClient()

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

  let statusColor;
  switch (suggestion.status) {
    case 'Planned':
      statusColor = '#F49F85';
      break;
    case 'In-Progress':
      statusColor = '#AD1FEA';
      break;
    case 'Live':
      statusColor = '#62BCFA';
      break;
    default:
      statusColor = '#AD1FEA'; // Default color
  }


  return (
    <Box mb="16px" mx="24px">
      <Box
        height="8px"
        bg={statusColor}
        borderTopLeftRadius={10}
        borderTopRightRadius={10}
      />
      <Flex 
        fontSize="13px"
        p="24px"
        direction="column"
        bg="#FFF"
        borderBottomLeftRadius={10}
        borderBottomRightRadius={10}
      >
        <Flex mb="16px">
          <Box 
            my="auto" 
            h="8px" 
            w="8px" 
            bg={statusColor}
            borderRadius="50%" 
            mr="16px" 
          />
          <Text color="#647196">{suggestion.status}</Text>
        </Flex>
        <Box mb="8px">
          <Text mb="9px" fontWeight="bold">{suggestion.title}</Text>
          <Text color="#647196">{suggestion.detail}</Text>
        </Box>
        <Button
          w="50%"
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
    </Box>
  )
}

export default RoadmapSuggestion