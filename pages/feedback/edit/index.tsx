import FeedbackHeader from '@/components/feedback/FeedbackHeader'
import { Box, Button, Flex, Image, Input, Select, Text, Textarea, useMediaQuery } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import SelectedSuggestionContext  from '@/components/context/SelectedSuggestionContext'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import Router, { useRouter } from 'next/router'

interface Suggestion {
  id: string;
  title: string;
  detail: string;
  category: string;
}

const EditPage = () => {
  const [newTitle, setNewTitle] = useState<string>('');
  const [newCategory, setNewCategory] = useState<string>('');
  const [newDetail, setNewDetail] = useState<string>('');
  const [newStatus, setNewStatus] = useState<string>('');
  const { selectedSuggestionId, setSelectedSuggestionId } = useContext(SelectedSuggestionContext);
  const [suggestion, setSuggestion] = useState<Suggestion | null>(null);
  const supabase = useSupabaseClient()
  const router = useRouter()

  useEffect(() => {
    const getSuggestion = async () => {
      try {
        const { data, error } = await supabase
          .from('suggestions')
          .select()
          .eq('id', selectedSuggestionId);
  
        if (error) {
          console.error("An error occurred:", error);
          return;
        }
  
        // Handle Success
        if (data && data.length > 0) {
          setSuggestion(data[0]);
          // Initialize the new state variables here
          setNewTitle(data[0].title);
          setNewCategory(data[0].category);
          setNewDetail(data[0].detail);
        }
  
      } catch (error) {
        console.error("Unexpected error:", error);
      } finally {
        // Reset loading state
      }
    };
  
    getSuggestion();
  }, [selectedSuggestionId, supabase]);
  

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => setNewTitle(e.target.value);
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => setNewCategory(e.target.value);
  const handleDetailChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setNewDetail(e.target.value);
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => setNewStatus(e.target.value);

  const handleSubmit = async () => {
    try {
      const { data, error } = await supabase
        .from('suggestions')
        .update({
          title: newTitle,
          category: newCategory,
          detail: newDetail,
          status: newStatus,
        })
        .eq('id', selectedSuggestionId)
  
      if (error) {
        console.error("An error occurred:", error);
        return;
      } 
      // Handle Success

    } catch (error) {
      console.error("Unexpected error:", error);
    } finally {
      router.push('/')
    }
  }


  return (
    <Box p="24px" bg="#F2F4FE" px={{ xl: "350px", lg: "200px", md: "114px" }}>
      <FeedbackHeader />
      <Flex direction="column" bg="#FFF" borderRadius={10} p="24px" position="relative">
        <Image alt="edit icon" position="absolute" top="-20px" h="40px" w="40px" src="/images/shared/icon-edit-feedback.svg" />
        <Text my="24px" fontSize="18px" fontWeight="bold" color="#3A4374">Editing {suggestion?.title}</Text>

        <Flex fontSize="13px" direction="column">
          <Text color="#3A4374" fontWeight="bold">Feedback Title</Text>
          <Text mt="4px" mb="16px" color="#647196">Add a short, descriptive headline</Text>
          <Input  
            color="#3A4374" 
            h="48px" 
            variant='filled' 
            value={newTitle}
            onChange={handleTitleChange}
          />
        </Flex>
        
        <Flex mt="24px" fontSize="13px" direction="column">
          <Text color="#3A4374" fontWeight="bold">Category</Text>
          <Text mt="4px" mb="16px" color="#647196">Choose a category for your feedback</Text>
          <Select 
            value={newCategory}
            color="#3A4374"
            h="48px"
            variant='filled'
            onChange={handleCategoryChange} //
          >
            <option value='UI'>UI</option>
            <option value='UX'>UX</option>
            <option value='Enhancement'>Enhancement</option>
            <option value='Bug'>Bug</option>
            <option value='Feature'>Feature</option>
          </Select>
        </Flex>
        
        <Flex mt="24px" fontSize="13px" direction="column">
          <Text color="#3A4374" fontWeight="bold">Update Status</Text>
          <Text mt="4px" mb="16px" color="#647196">Change feature state</Text>
          <Select 
            value={newStatus}
            color="#3A4374" 
            h="48px" 
            variant='filled'
            onChange={handleStatusChange}
          >
            <option value='Planned'>Planned</option>
            <option value='In-Progress'>In-Progress</option>
            <option value='Live'>Live</option>
          </Select>
        </Flex>
        
        <Flex mt="24px" fontSize="13px" direction="column">
          <Text color="#3A4374" fontWeight="bold">Feedback Detail</Text>
          <Text mt="4px" mb="16px" color="#647196">Include any specific comments on what should be improved, added, etc.</Text>
          <Textarea 
            value={newDetail}
            color="#3A4374"
            h="48px"
            variant='filled'
            onChange={handleDetailChange}
          />
        </Flex>

        <Flex direction="column" mt="40px" gap="16px">
          <Button onClick={handleSubmit} bg="#AD1FEA" color="#F2F4FE" borderRadius={10} >Save Changes</Button>
          <Button onClick={() => router.push('/')} bg="#3A4374" color="#F2F4FE" borderRadius={10} >Cancel</Button>
          <Button bg="#D73737" color="#F2F4FE" borderRadius={10} >Delete</Button>
        </Flex>
      </Flex>
    </Box>
  )
}

export default EditPage