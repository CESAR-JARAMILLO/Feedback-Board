import FeedbackHeader from '@/components/feedback/FeedbackHeader'
import { Box, Button, Flex, Image, Input, Select, Text, Textarea } from '@chakra-ui/react'
import React from 'react'

const NewFeedbackPage = () => {
  return (
    <Box h="100vh" p="24px" bg="#F2F4FE">
      <FeedbackHeader />
      <Flex direction="column" bg="#FFF" borderRadius={10} p="24px" position="relative">
        <Image position="absolute" top="-20px" h="40px" w="40px" src="/images/shared/icon-new-feedback.svg" />
        <Text my="24px" fontSize="18px" fontWeight="bold" color="#3A4374">Create New Feedback</Text>

        <Flex fontSize="13px" direction="column">
          <Text color="#3A4374" fontWeight="bold">Feedback Title</Text>
          <Text mt="4px" mb="16px" color="#647196">Add a short, descriptive headline</Text>
          <Input  
            color="#3A4374" 
            h="48px" 
            variant='filled' 
            placeholder='Add a dark theme option'
            sx={{ 
              "::placeholder": {
                fontSize: "13px",
                color: "#3A4374"
              }
            }} 
          />
        </Flex>
        
        <Flex mt="24px" fontSize="13px" direction="column">
          <Text color="#3A4374" fontWeight="bold">Category</Text>
          <Text mt="4px" mb="16px" color="#647196">Choose a category for your feedback</Text>
          <Select 
            placeholder='Feature'
            color="#3A4374" 
            h="48px" 
            variant='filled' 
            sx={{ 
              "::placeholder": {
                fontSize: "13px",
                color: "#3A4374"
              }
            }} 
          >
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
        </Flex>
        
        <Flex mt="24px" fontSize="13px" direction="column">
          <Text color="#3A4374" fontWeight="bold">Feedback Detail</Text>
          <Text mt="4px" mb="16px" color="#647196">Include any specific comments on what should be improved, added, etc.</Text>
          <Textarea 
            color="#3A4374" 
            h="48px" 
            variant='filled'
          />
        </Flex>

        <Flex direction="column" mt="40px" gap="16px">
          <Button bg="#AD1FEA" color="#F2F4FE" borderRadius={10} >Save Changes</Button>
          <Button bg="#3A4374" color="#F2F4FE" borderRadius={10} >Cancel</Button>
        </Flex>
      </Flex>
    </Box>
  )
}

export default NewFeedbackPage