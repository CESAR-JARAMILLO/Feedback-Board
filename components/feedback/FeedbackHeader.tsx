import { Button, Flex, Image, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'

const FeedbackHeader = () => {
  const router = useRouter()
  return (
    <Flex mb="24px" fontSize="13px" justifyContent="space-between">
      <Flex as="button" onClick={() => router.push("/")} gap={2} alignItems="center">
        <Image h={3} src="/images/shared/icon-arrow-left.svg" />
        <Text fontWeight="bold">Go Back</Text>
      </Flex>
      <Button w="119px" h="40px" bg="#4661E6" color="#F2F4FE" fontSize="13px" fontWeight="bold" borderRadius={10} >Edit Feedback</Button>
    </Flex>
  )
}

export default FeedbackHeader