import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import FilterCard from '../suggestions/FilterCard'
import RoadmapCard from '../suggestions/RoadmapCard'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

const Board = () => {
  const supabase = useSupabaseClient();

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <Flex direction={{base: "row", lg: "column"}} gap={3} justifyContent="space-between" h={{md: "min-content"}} mb="40px">
      <Box
        borderRadius={16}
        p="24px"
        h={{lg: "138px"}}
        w="240px"
        backgroundImage="url('/images/tablet/background-header.png')"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
      >
      </Box>
      <FilterCard />
      <RoadmapCard />
      <Flex
      borderRadius={16}
      py="24px"
      alignItems="center"
      justifyContent="flex-start"
      bg="#FFF"
      cursor="pointer"
      onClick={handleLogout}
      textAlign={'center'}
    >
      <Text fontWeight={600} w={'100%'} color={'#4661e6'}>
        Log out
      </Text>
    </Flex>
    </Flex>
  )
}

export default Board