import { Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const EmptySuggestions = () => {
  return (
    <Flex justify="center" alignItems="center" mx="24px" mt="32px"bg="#FFF" borderRadius={10} >
      <Flex direction="column" justify="center" alignItems="center" gap={4} px="25px" py="76px" textAlign="center">
        <Image h="108px" w="102px" src="/images/suggestions/illustration-empty.svg" />
        <Text fontSize="18px" fontWeight="bold" >There  is no feedback yet.</Text>
        <Text fontSize="13px" color="#647196" >Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</Text>
        <Button w="134px" h="40px" bg="#AD1FEA" color="#F2F4FE" fontSize="13px" fontWeight="bold" >+ Add Feedback</Button>
      </Flex>
    </Flex>
  )
}

export default EmptySuggestions