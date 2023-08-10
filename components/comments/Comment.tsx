import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const Comment = () => {
  const [name, setName] = useState('')
  const [tag, setTag] = useState('')
  const [comment, setComment] = useState('')
  const [avatarUrl, setAvatarUrl] = useState('')

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => setTag(e.target.value);
  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setComment(e.target.value);
  const handleAvatarUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => setAvatarUrl(e.target.value);

  return (
    <Box w="100%" fontSize="13px" p="24px">
      <Flex justifyContent="space-between">
        <Flex gap="16px">
          <Avatar name='Elijah Moss' src='/images/user-images/image-elijah.jpg' />
          <Box my="auto">
            <Text fontWeight="bold">Elijah Moss</Text>
            <Text color="#647196" >@hexagon.bestagon</Text>
          </Box>
        </Flex>
        <Text fontWeight="semibold" color="#4661E6" as="button">Reply</Text>
      </Flex>
      <Text mt="24px" color="#647196">
        Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my devices dark mode turns on without the bright background it currently has.
      </Text>
    </Box>
  )
}

export default Comment