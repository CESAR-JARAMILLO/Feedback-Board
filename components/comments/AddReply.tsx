import { Button, Flex, Textarea } from '@chakra-ui/react'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import React, { useContext, useState } from 'react'
import SelectedSuggestionContext from '../context/SelectedSuggestionContext'
import { useCurrentUserProfile } from '../context/CurrentUserProfileContext'

interface AddReplyProps {
  commentId: string;
}

const AddReply = ({ commentId } : AddReplyProps) => {
  const [reply, setReply] = useState('')
  const supabase = useSupabaseClient()
  const user = useUser()
  const { selectedSuggestionId } = useContext(SelectedSuggestionContext);
  const { userProfile } = useCurrentUserProfile();

  const handleSubmit = async () => {
    try {
      const { data, error } = await supabase
        .from('replies')
        .insert({
          suggestion_id: selectedSuggestionId,
          user_id: user?.id,
          comment_id: commentId,
          tag_name: userProfile?.tag,
          reply: reply,
          full_name: userProfile?.full_name,
          avatar_url: userProfile?.avatar_url,
        })
  
      if (error) {
        console.error("An error occurred:", error);
        return;
      } 
      // Handle Success
      setReply('')
    } catch (error) {
      console.error("Unexpected error:", error);
    } finally {
      // router.push('/')
    }
  }

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReply(e.target.value);
  };

  return (
    <Flex fontSize="13px" gap={6} mt="24px">
      <Textarea
        value={reply}
        onChange={handleCommentChange}
        placeholder='Type your comment here'
        color="#3A4374" 
        h="48px" 
        variant='filled'
      />
      <Button onClick={handleSubmit} w="140px" h="44px" bg="#AD1FEA" color="#F2F4FE" fontSize="14px" borderRadius={10} >Post Comment</Button>
    </Flex>
  )
}

export default AddReply