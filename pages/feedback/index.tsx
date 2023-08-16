import Comments from '@/components/comments/Comments'
import FeedbackHeader from '@/components/feedback/FeedbackHeader'
import { Box, Button, Flex, Image, Text, useMediaQuery } from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import SelectedSuggestionContext  from '@/components/context/SelectedSuggestionContext'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import AddComment from '@/components/comments/AddComment'

interface Suggestion {
  id: string;
  title: string;
  detail: string;
  category: string;
}

const Feedback = () => {
  const [suggestion, setSuggestion] = useState<Suggestion | null>(null);
  const [upvotes, setUpvotes] = useState<any[]>()
  const [comments, setComments] = useState<any[]>()
  const { selectedSuggestionId, setSelectedSuggestionId } = useContext(SelectedSuggestionContext);
  const supabase =useSupabaseClient()
  const user = useUser()
  const [isLargerThanMD] = useMediaQuery("(min-width: 768px)");
  

  useEffect(() => {
    const getSuggestion = async () => {
      try {
        const { data, error } = await supabase
          .from('suggestions')
          .select()
          .eq('id', selectedSuggestionId)
    
        if (error) {
          console.error("An error occurred:", error);
          return;
        }
    
        // Handle Success
        if (data && data.length > 0) {
          setSuggestion(data[0]); // Set the state to the first item in the array
        }

      } catch (error) {
        console.error("Unexpected error:", error);
      } finally {
        // Restet loading state
        // router.push('/')
      }
    }

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
          .eq('suggestion_id', selectedSuggestionId)
    
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
    getSuggestion()
  }, [upvotes, comments])

  const addUpvote = async () => {
    try {
      const { data, error } = await supabase
        .from('upvotes')
        .insert({
          user_id: user?.id,
          suggestion_id: selectedSuggestionId
        })
  
      if (error) {
        console.error("An error occurred:", error);
        return;
      }
  
      // Handle Success
    } catch (error) {
      console.error("Unexpected error:", error);
    } finally {
      // Restet loading state
    }
  }
  
  const deleteUpvote = async () => {
    try {
      const { data, error } = await supabase
        .from('upvotes')
        .delete()
        .eq('user_id', user?.id)
        .eq('suggestion_id', selectedSuggestionId)
  
      if (error) {
        console.error("An error occurred:", error);
        return;
      }
  
      // Handle Success
    } catch (error) {
      console.error("Unexpected error:", error);
    } finally {
      // Restet loading state
    }
  }

  const handleUpvoteClick = () => {
    const hasCommented = upvotes?.some(upvotes => upvotes.user_id === user?.id);
    if (!hasCommented) {
      addUpvote()
    } else {
      deleteUpvote()
    }
  }


  return (
    <Box p="24px" minH="100vh" bg="#F2F4FE">
      <FeedbackHeader />

      <Flex gap={isLargerThanMD ? 10 : "none"} fontSize="13px" p={!isLargerThanMD ? "24px": "none"} px={isLargerThanMD ? "32px" : "none"} py={isLargerThanMD ? "28px" : "none"} direction={isLargerThanMD ? "row" : "column"} bg="#FFF" borderRadius={10}>
      {isLargerThanMD && (
        <Flex
          justifyContent="center"
          alignItems="center"
          direction="column"
          w="40px"
          h="54px"
          fontSize="13px"
          fontWeight="semibold" 
          borderRadius="10px" 
          bg="#F2F4FF"
          color="#3A4374"
          >
        <Image h="8px" src="/images/shared/icon-arrow-up.svg"/>
        {upvotes?.length}
        </Flex> 
      )}
      <Box w={isLargerThanMD ? "625px" : "none"}>
        <Text fontSize={isLargerThanMD ? "18px" : "none"} mb="9px" fontWeight="bold">{suggestion?.title}</Text>
        <Text fontSize={isLargerThanMD ? "16px" : "none"} mb="12px" color="#647196">{suggestion?.detail}</Text>
        <Button
          maxW="fit-content"
          fontSize="13px"
          fontWeight="semibold" 
          borderRadius="10px" 
          bg="#F2F4FF"
          color="#4661E6" 
        >
          {suggestion?.category}
        </Button>
      </Box>          
            
            {!isLargerThanMD && (
              <Flex mt="16px"  justify="space-between">
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
            )}
            {isLargerThanMD && (
              <Flex alignItems="center" gap={2}>
              <Image w="18px" h="16px" src="/images/shared/icon-comments.svg"/>
              <Text fontWeight="bold">{comments?.length}</Text>
            </Flex>
            )}
          </Flex>

      <Comments />
      <AddComment />
    </Box>
  )
}

export default Feedback