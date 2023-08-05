import { Flex } from '@chakra-ui/react'
import React from 'react'
import Inputs from '../suggestions/InputsCard'

const Dropdown = () => {
  return (
    <Flex bg="#979797" h="95vh" width="100vw">
      <Flex 
        p="24px" 
        ml="auto" 
        bg='#F7F8FD' 
        w="80vw"
      >
        <Inputs />
      </Flex>
    </Flex>
  )
}

export default Dropdown