import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Flex, Image, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import AddFeedbackBtn from '../buttons/AddFeedbackBtn'

const FilterHeader = () => {
  const [isLargerThanMD] = useMediaQuery("(min-width: 768px)");

  return (
    <Flex  borderRadius={{md: 12}} py={{base: "8px", md: "24px"}} px="24px" bg="#373F68" justifyContent="space-between">
      <Flex gap={8}>
        {isLargerThanMD && (  
          <Flex gap={3} alignItems="center">
            <Image alt='suggestion icon' src='/images/suggestions/icon-suggestions.svg' />
            <Text color="#F2F4FE" fontWeight="bold" fontSize="18px" >2 Suggestions</Text>
          </Flex>
        )}
        <Flex gap={1} alignItems="center">
          <Text color="#F2F4FE" fontSize={isLargerThanMD ? "14px" : "13px" } >Sort by :</Text>
          <Text color="#F2F4FE" fontSize={isLargerThanMD ? "14px" : "13px" } fontWeight="bold" >Most Upvotes</Text>
          <ChevronDownIcon boxSize={5} color="#F2F4FE" />
        </Flex>
      </Flex>
      <AddFeedbackBtn />
    </Flex>
  )
}

export default FilterHeader