import React from 'react'
import Comment from './Comment'
import { Flex, Text } from '@chakra-ui/react'

const Comments = () => {
  return (
    <Flex direction="column" bg="#FFF" mt="24px" borderRadius={10}>
      <Text ml="24px" mt="24px" color="#3A4374" fontSize="18px" fontWeight="bold" >4 Comments</Text>
      <Comment />
      <Comment />
    </Flex>
  )
}

export default Comments