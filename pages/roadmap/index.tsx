import AddFeedbackBtn from '@/components/buttons/AddFeedbackBtn'
import RoadmapSuggestion from '@/components/roadmap/RoadmapSuggestion'
import EmptySuggestions from '@/components/suggestions/EmptySuggestions'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Box, Button, Divider, Flex, Image, Text, useMediaQuery } from '@chakra-ui/react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const RoadmapPage = () => {
  const [numberPlanned, setNumberPlanned] = useState(0)
  const [numberInProgress, setNumberInProgress] = useState(0)
  const [numberLive, setNumberLive] = useState(0)
  const [selectedStatus, setSelectedStatus] = useState<'Planned' | 'In-Progress' | 'Live'>('Planned');
  const [suggestions, setSuggestions] = useState<any[] | null>(null)
  const supabase = useSupabaseClient()
  const router = useRouter()
  const [isLargerThanMD] = useMediaQuery("(min-width: 768px)");

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

  const handleStatusSelection = (status: 'Planned' | 'In-Progress' | 'Live') => {
    setSelectedStatus(status);
  };
  
  
  return (
    <Box minH="100vh"  px={isLargerThanMD ? "40px" : "none"}  bg="#F2F4FE" overflowX="hidden">
    <Flex py="26px" mt={isLargerThanMD ? "56px" : "none"} borderRadius={isLargerThanMD ? 16 : 0} px="24px" bg="#373F68" color="#FFF" fontSize="13px" justifyContent="space-between" alignItems="center">
      <Flex direction="column">
        <Flex as="button" onClick={() => router.push("/")} gap={2} alignItems="center">
          <ChevronLeftIcon boxSize={5} />
          <Text fontWeight="bold">Go Back</Text>
        </Flex>
        <Text mt="4px" fontSize="18px" fontWeight="bold">Roadmap</Text>
      </Flex>
      <AddFeedbackBtn />
    </Flex>

    {isLargerThanMD ? (
      <Flex gap="10px" direction="row" my={isLargerThanMD ? "32px" : "24px"} justifyContent="space-between">
        <Flex direction="column" w="33%" >
          <Text mb="4px" color="#3A4374" fontSize="18px" fontWeight="bold">Planned ({numberPlanned})</Text>
          {suggestions && suggestions.filter(s => s.status === 'Planned').map((suggestion, index) => (
            <RoadmapSuggestion key={index} suggestion={suggestion} minH="320px" />
          ))}
        </Flex>

        <Flex direction="column" w="33%" >
          <Text mb="4px" color="#3A4374" fontSize="18px" fontWeight="bold">In-Progress ({numberInProgress})</Text>
          {suggestions && suggestions.filter(s => s.status === 'In-Progress').map((suggestion, index) => (
            <RoadmapSuggestion key={index} suggestion={suggestion} minH="320px"  />
          ))}
        </Flex>

        <Flex direction="column" w="33%" >
          <Text mb="4px" color="#3A4374" fontSize="18px" fontWeight="bold">Live ({numberLive})</Text>
          {suggestions && suggestions.filter(s => s.status === 'Live').map((suggestion, index) => (
            <RoadmapSuggestion key={index} suggestion={suggestion} minH="320px"  />
          ))}
        </Flex>
      </Flex>
    ) : (
        <>
          <Flex fontSize="13px" fontWeight="bold" borderBottom="1px solid #8C92B3" h="60px" w="100%">
            <Flex pos="relative" flexGrow={1} alignItems="center" justifyContent="center" onClick={() => handleStatusSelection('Planned')}>
              <Text color={selectedStatus === 'Planned' ? "#3A4374" : "#979797"}>Planned ({numberPlanned})</Text>
              {selectedStatus === 'Planned' && <Divider pos="absolute" bottom="-1px" border="4px solid #F49F85" />}
            </Flex>
            <Flex pos="relative" direction="column" flexGrow={1} alignItems="center" justifyContent="center" onClick={() => handleStatusSelection('In-Progress')}>
              <Text color={selectedStatus === 'In-Progress' ? "#3A4374" : "#979797"}>In-Progress ({numberInProgress})</Text>
              {selectedStatus === 'In-Progress' && <Divider pos="absolute" bottom="-1px" border="4px solid #AD1FEA" />}
            </Flex>
            <Flex pos="relative" flexGrow={1} alignItems="center" justifyContent="center" onClick={() => handleStatusSelection('Live')}>
              <Text color={selectedStatus === 'Live' ? "#3A4374" : "#979797"}>Live ({numberLive})</Text>
              {selectedStatus === 'Live' && <Divider pos="absolute" bottom="-1px" border="4px solid #62BCFA" />}
            </Flex>
          </Flex>
  
          <Box my="24px" ml="24px">
            <Box></Box>
            <Text mb="4px" color="#3A4374" fontSize="18px" fontWeight="bold">
              {selectedStatus} ({selectedStatus === 'Planned' ? numberPlanned : selectedStatus === 'In-Progress' ? numberInProgress : numberLive})
            </Text>
            <Text color="#647196" fontSize="13px">
              {selectedStatus === 'Planned' ? 'Features planned for development' :
              selectedStatus === 'In-Progress' ? 'Features currently being developed' :
              'Features that are live'}
            </Text>
          </Box>
  
          {suggestions && suggestions.length > 0 && (
            suggestions
              .filter(suggestion => suggestion.status === selectedStatus)
              .map((suggestion, index) => (
                <Box key={index}>
                  <RoadmapSuggestion minH="none"  suggestion={suggestion} />
                </Box>
              ))
          )}
        </>
      )}
    </Box>
  )  
}

export default RoadmapPage