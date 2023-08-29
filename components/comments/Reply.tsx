import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import React from 'react'

interface ReplyProps {
    reply: any;
    leftMargin?: string;
}

const Reply = ({ reply, leftMargin } : ReplyProps) => {
    console.log(reply)
  return (
    <Box fontSize="13px" mt="32px" pl="40px">
      <Flex justifyContent="space-between">
        <Flex gap="16px">
          <Avatar name='Elijah Moss' src='/images/user-images/image-elijah.jpg' />
          <Box my="auto">
            <Text fontWeight="bold">{reply.name}</Text>
            <Text color="#647196" >{reply.tag_name}</Text>
          </Box>
        </Flex>
{/*         <Text onClick={() => {}} fontWeight="semibold" color="#4661E6" as="button">Reply</Text> */}
      </Flex>
      <Text mt="24px" ml={leftMargin}color="#647196">
        {reply.reply}
      </Text>
      <Flex>
      {/* <ReplyComment commentId={comment.id} /> */}
    </Flex>
    </Box>
  )
}

export default Reply
