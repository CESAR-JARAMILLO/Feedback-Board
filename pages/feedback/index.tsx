import Comments from '@/components/comments/Comments'
import FeedbackHeader from '@/components/feedback/FeedbackHeader'
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import SelectedSuggestionContext  from '@/components/context/SelectedSuggestionContext'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

interface Suggestion {
  id: string;
  title: string;
  detail: string;
  category: string;
}

const Feedback = () => {
  const [suggestion, setSuggestion] = useState<Suggestion | null>(null);
  const { selectedSuggestionId, setSelectedSuggestionId } = useContext(SelectedSuggestionContext);
  const supabase =useSupabaseClient()
  
  console.log(selectedSuggestionId)

  useEffect(() => {
    const getSuggestion = async () => {
      try {
        const { data, error } = await supabase
          .from('feedback')
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

    getSuggestion()
  }, [])

  return (
    <Box p="24px" h="100vh" bg="#F2F4FE">
      <FeedbackHeader />

      <Flex mb="16px" fontSize="13px" p="24px" direction="column" bg="#FFF" borderRadius={10}>
            <Box mb="8px">
              <Text mb="9px" fontWeight="bold">{suggestion?.title}</Text>
              <Text color="#647196">{suggestion?.detail}</Text>
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
              {suggestion?.category}
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
                112
              </Button>
              <Flex alignItems="center" gap={2}>
                <Image w="18px" h="16px" src="/images/shared/icon-comments.svg"/>
                <Text fontWeight="bold">2</Text>
              </Flex>
            </Flex>
          </Flex>
          
      <Comments />
    </Box>
  )
}

export default Feedback