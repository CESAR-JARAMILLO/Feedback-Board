import React from 'react'
import Suggestion from './Suggestion'
import { Flex } from '@chakra-ui/react'

const Suggestions = () => {
  return (
    <Flex mx="24px" mt="32px" borderRadius={10}>
      <Suggestion />
    </Flex>
  )
}

export default Suggestions