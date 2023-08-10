import FeedbackHeader from '@/components/feedback/FeedbackHeader'
import { Box, Button, Flex, Image, Input, Select, Text, Textarea } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import SelectedSuggestionContext  from '@/components/context/SelectedSuggestionContext'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

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

  useEffect(() => {
    const getSuggestion = async () => {
      try {
        const { data, error } = await supabase
          .from('suggestions')
          .select()
          .eq('id', selectedSuggestionId)
    
        if (error) {
          console.error("An error occurred:", error);
          return;
        }
    
        // Handle Success
        if (data && data.length > 0) {
          setSuggestion(data[0]);
        }

      } catch (error) {
        console.error("Unexpected error:", error);
      } finally {
        // Restet loading state
      }
    }

    if (suggestion) {
      setNewTitle(suggestion.title);
      setNewCategory(suggestion.category);
      setNewDetail(suggestion.detail);
    }

    getSuggestion()
  }, [suggestion])

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => setNewTitle(e.target.value);
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => setNewCategory(e.target.value);
  const handleDetailChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setNewDetail(e.target.value);
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => setNewDetail(e.target.value);


  return (
    <Box p="24px" bg="#F2F4FE">
      <FeedbackHeader />
      <Flex direction="column" bg="#FFF" borderRadius={10} p="24px" position="relative">
        <Image position="absolute" top="-20px" h="40px" w="40px" src="/images/shared/icon-edit-feedback.svg" />
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
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
        </Flex>
        
        <Flex mt="24px" fontSize="13px" direction="column">
          <Text color="#3A4374" fontWeight="bold">Update Status</Text>
          <Text mt="4px" mb="16px" color="#647196">Change feature state</Text>
          <Select 
            value='Planned'
            color="#3A4374" 
            h="48px" 
            variant='filled'
            onChange={handleStatusChange}
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
            value={newDetail}
            color="#3A4374"
            h="48px"
            variant='filled'
            onChange={handleDetailChange}
          />
        </Flex>

        <Flex direction="column" mt="40px" gap="16px">
          <Button bg="#AD1FEA" color="#F2F4FE" borderRadius={10} >Save Changes</Button>
          <Button bg="#3A4374" color="#F2F4FE" borderRadius={10} >Cancel</Button>
          <Button bg="#D73737" color="#F2F4FE" borderRadius={10} >Delete</Button>
        </Flex>
      </Flex>
    </Box>
  )
}

export default EditPage