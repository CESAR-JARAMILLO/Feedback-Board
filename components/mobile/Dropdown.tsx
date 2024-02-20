import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import FilterCard from '../suggestions/FilterCard'
import RoadmapCard from '../suggestions/RoadmapCard'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

const Dropdown = () => {
  const supabase = useSupabaseClient();

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <Flex bg="rgba(0, 0, 0, 0.5)" h="95vh" width="100vw">
      <Flex 
        p="24px" 
        ml="auto" 
        bg='#F7F8FD' 
        w="80vw"
        direction="column"
        gap={6}
      >
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
    </Flex>
  )
}

export default Dropdown