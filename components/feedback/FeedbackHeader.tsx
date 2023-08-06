import { Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const FeedbackHeader = () => {
  return (
    <Flex m="24px" fontSize="13px" justifyContent="space-between">
      <Flex gap={2} alignItems="center">
        <Image h={3} src="/images/shared/icon-arrow-left.svg" />
        <Text fontWeight="bold">Go Back</Text>
      </Flex>
      <Button w="119px" h="40px" bg="#4661E6" color="#F2F4FE" fontSize="13px" fontWeight="bold" borderRadius={10} >Edit Feedback</Button>
    </Flex>
  )
}

export default FeedbackHeader