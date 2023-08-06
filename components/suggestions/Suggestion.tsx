import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Suggestion = () => {
  return (
    <Flex fontSize="13px" p="24px" direction="column" bg="#FFF">
      <Box mb="8px">
        <Text mb="9px" fontWeight="bold">Add tags for solutions</Text>
        <Text color="#647196">Easier to search for solutions based on a specific stack.</Text>
      </Box>
      <Button
        w="50%"
        // onClick={onClick} 
        fontSize="13px"
        fontWeight="semibold" 
        borderRadius="10px" 
        bg="#F2F4FF"
        color="#4661E6"
        mb="16px"
      >
        Enhancement
      </Button>
      <Flex justify="space-between">
        <Button
          w="25%"
          fontSize="13px"
          fontWeight="semibold" 
          borderRadius="10px" 
          bg="#F2F4FF"
          color="#3A4374"
        >
          <Image mr={2} src="/images/shared/icon-arrow-up.svg"/>
          112
        </Button>
        <Flex alignItems="center" gap={2}>
          <Image w="18px" h="16px" src="/images/shared/icon-comments.svg"/>
          <Text fontWeight="bold">2</Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Suggestion