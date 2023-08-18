import { Box, Button, Flex, Image, Text, useMediaQuery } from '@chakra-ui/react'
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import React, { useEffect, useState } from 'react'

interface RoadmapSuggestionProps{
  suggestion: any;
  minH: string;
}

const RoadmapSuggestion = ({ suggestion, minH }: RoadmapSuggestionProps) => {
  const [upvotes, setUpvotes] = useState<any[]>()
  const [comments, setComments] = useState<any[]>()
  const supabase =useSupabaseClient()
  const [isLargerThanMD] = useMediaQuery("(min-width: 768px)");

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
  }, [suggestion.id, supabase])

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
    <Box mb={isLargerThanMD ? "10px" : "16px"} mx={isLargerThanMD ? "none" : "24px"}>
      <Box
        height="8px"
        bg={statusColor}
        borderTopLeftRadius={10}
        borderTopRightRadius={10}
      />
      <Flex 
        pos="relative"
        minH={minH}
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
        <Box w={isLargerThanMD ? "80%" : "none"} mt="12px" pos={isLargerThanMD ? "absolute" : "relative"} bottom="10px">
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
              <Image alt='icon arrow up' mr={2} src="/images/shared/icon-arrow-up.svg"/>
              {upvotes?.length}
            </Button>
            <Flex alignItems="center" gap={2}>
              <Image alt='comments icon' w="18px" h="16px" src="/images/shared/icon-comments.svg"/>
              <Text fontWeight="bold">{comments?.length}</Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export default RoadmapSuggestion