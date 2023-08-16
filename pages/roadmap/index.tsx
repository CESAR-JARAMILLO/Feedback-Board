import AddFeedbackBtn from '@/components/buttons/AddFeedbackBtn'
import RoadmapSuggestion from '@/components/roadmap/RoadmapSuggestion'
import EmptySuggestions from '@/components/suggestions/EmptySuggestions'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Box, Button, Divider, Flex, Image, Text } from '@chakra-ui/react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const RoadmapPage = () => {
  const [numberPlanned, setNumberPlanned] = useState(0)
  const [numberInProgress, setNumberInProgress] = useState(0)
  const [numberLive, setNumberLive] = useState(0)
  const [suggestions, setSuggestions] = useState<any[] | null>(null)
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
        setSuggestions(data);
  
        // Count the number of each status
        const statusCounts = data.reduce((counts, suggestion) => {
          counts[suggestion.status] = (counts[suggestion.status] || 0) + 1;
          return counts;
        }, {} as Record<string, number>);
  
        setNumberPlanned(statusCounts['Planned'] || 0);
        setNumberInProgress(statusCounts['In-Progress'] || 0);
        setNumberLive(statusCounts['Live'] || 0);
  
      } catch (error) {
        console.error("Unexpected error:", error);
      } finally {
        // Reset loading state
      }
    };
  
    getSuggestions();
  }, []);
  
  return (
    <Box minH="100vh" bg="#F2F4FE">
      <Flex py="26px" px="24px" bg="#373F68" color="#FFF" fontSize="13px" justifyContent="space-between" alignItems="center">
        <Flex direction="column">
          <Flex as="button" onClick={() => router.push("/")} gap={2} alignItems="center">
            <ChevronLeftIcon boxSize={5} />
            <Text fontWeight="bold">Go Back</Text>
          </Flex>
          <Text mt="4px" fontSize="18px" fontWeight="bold">Roadmap</Text>
        </Flex>
        <AddFeedbackBtn />
      </Flex>

      <Flex fontSize="13px" fontWeight="bold" borderBottom="1px solid #8C92B3" h="60px" w="100%">
        <Flex flexGrow={1} alignItems="center" justifyContent="center">
          <Text color="#979797">Planned ({numberPlanned})</Text>
        </Flex>
        <Flex pos="relative" direction="column" flexGrow={1} alignItems="center" justifyContent="center">
          <Text color="#3A4374">In-Progress ({numberInProgress})</Text>
          <Divider pos="absolute" bottom="-1px" border="4px solid #AD1FEA" />
        </Flex>
        <Flex flexGrow={1} alignItems="center" justifyContent="center">
          <Text color="#979797">Live ({numberLive})</Text>
        </Flex>
      </Flex>

      <Box my="24px" ml="24px">
        <Box></Box>
        <Text mb="4px" color="#3A4374" fontSize="18px" fontWeight="bold">In-Progress (3)</Text>
        <Text color="#647196" fontSize="13px">Features currently being developed</Text>
      </Box>

      {suggestions && suggestions.length > 0 ? (
        suggestions.map((suggestion, index) => (
          <Box key={index}>
            <RoadmapSuggestion suggestion={suggestion} />
          </Box>
        ))
      ): (
        <EmptySuggestions />
      )}

    </Box>
  )
}

export default RoadmapPage