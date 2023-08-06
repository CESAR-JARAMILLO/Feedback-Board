import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Comment = () => {
  return (
    <Box w="100%" fontSize="13px" p="24px">
      <Flex justifyContent="space-between">
        <Flex gap="16px">
          <Avatar name='Elijah Moss' src='/images/user-images/image-elijah.jpg' />
          <Box my="auto">
            <Text fontWeight="bold">Elijah Moss</Text>
            <Text color="#647196" >@hexagon.bestagon</Text>
          </Box>
        </Flex>
        <Text fontWeight="semibold" color="#4661E6" as="button">Reply</Text>
      </Flex>
      <Text mt="24px" color="#647196">
        Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my devices dark mode turns on without the bright background it currently has.
      </Text>
    </Box>
  )
}

export default Comment