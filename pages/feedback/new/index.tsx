import FeedbackHeader from '@/components/feedback/FeedbackHeader'
import { Box, Button, Flex, Image, Input, Select, Text, Textarea, useMediaQuery } from '@chakra-ui/react'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const categoryList = [
  "UI",
  "UX",
  "Enhancement",
  "Bug",
  "Feature",
]

const NewFeedbackPage = () => {
  const [title, setTitle] = useState('')
  const [categories, setCategories] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [detail, setDetail] = useState('')
  const supabase = useSupabaseClient()
  const router = useRouter()
  const user = useUser()

  useEffect(() => {
    setCategories(categoryList)
  }, [])

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value)
  }

  const handledetailChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDetail(e.target.value)
  }

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  
    // Add loading state
    try {
      const { data, error } = await supabase
        .from('suggestions')
        .upsert({
          user_id: user?.id,
          title: title,
          category: selectedCategory,
          detail: detail,
          status: "Planned"
        });
  
      if (error) {
        console.error("An error occurred:", error);
        console.log(selectedCategory)
        return;
      }
  
      // Handle Success
      console.log('success')
    } catch (error) {
      console.error("Unexpected error:", error);
    } finally {
      // Restet loading state
      router.push('/')
    }
  };

  return (
    <Box h="100vh" p="24px" bg="#F2F4FE" px={{ xl: "350px", lg: "200px", md: "114px" }}>
      <FeedbackHeader display="none" />
      <Flex direction="column" bg="#FFF" borderRadius={10} p="24px" position="relative">
        <Image alt='new feedback icon' position="absolute" top="-20px" h="40px" w="40px" src="/images/shared/icon-new-feedback.svg" />
        <Text my="24px" fontSize="18px" fontWeight="bold" color="#3A4374">Create New Feedback</Text>

        <Flex fontSize="13px" direction="column">
          <Text color="#3A4374" fontWeight="bold">Feedback Title</Text>
          <Text mt="4px" mb="16px" color="#647196">Add a short, descriptive headline</Text>
          <Input
            onChange={handleTitleChange}
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
            onChange={handleCategoryChange}
            placeholder={categories[1]}
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
            {categories.map((category: string, index: number) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </Select>
        </Flex>
        
        <Flex mt="24px" fontSize="13px" direction="column">
          <Text color="#3A4374" fontWeight="bold">Feedback Detail</Text>
          <Text mt="4px" mb="16px" color="#647196">Include any specific comments on what should be improved, added, etc.</Text>
          <Textarea
            onChange={handledetailChange}
            color="#3A4374" 
            h="48px" 
            variant='filled'
          />
        </Flex>

        <Flex direction="column" mt="40px" gap="16px">
          <Button onClick={handleSubmit} bg="#AD1FEA" color="#F2F4FE" borderRadius={10} >Save Changes</Button>
          <Button bg="#3A4374" color="#F2F4FE" borderRadius={10} >Cancel</Button>
        </Flex>
      </Flex>
    </Box>
  )
}

export default NewFeedbackPage