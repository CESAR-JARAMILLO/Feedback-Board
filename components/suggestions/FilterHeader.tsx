import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import AddFeedbackBtn from '../buttons/AddFeedbackBtn'

const FilterHeader = () => {
  return (
    <Flex py="8px" px="24px" bg="#373F68" justifyContent="space-between">
      <Flex gap={1} alignItems="center">
        <Text color="#F2F4FE" fontSize="13px" >Sort by :</Text>
        <Text color="#F2F4FE" fontSize="13px" fontWeight="bold" >Most Upvotes</Text>
        <ChevronDownIcon boxSize={5} color="#F2F4FE" />
      </Flex>
      <AddFeedbackBtn />
    </Flex>
  )
}

export default FilterHeader