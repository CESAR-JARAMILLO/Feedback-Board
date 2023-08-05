import { Flex } from '@chakra-ui/react'
import React from 'react'
import FilterCard from '../suggestions/FilterCard'
import RoadmapCard from '../suggestions/RoadmapCard'

const Dropdown = () => {
  return (
    <Flex bg="#979797" h="95vh" width="100vw">
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
      </Flex>
    </Flex>
  )
}

export default Dropdown