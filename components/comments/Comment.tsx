import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import ReplyComment from './AddReply';
import { useState } from 'react';

interface CommentsProps {
  comment: any;
}

interface Reply {
  reply: string;
  // include other properties of a reply as needed
}


const Comment = ({ comment }: CommentsProps) => {
  const [replyDisplay, setReplyDisplay] = useState('none');

  const handleReply = () => {
    setReplyDisplay(replyDisplay === 'none' ? 'block' : 'none');
  };

  return (
    <Box w="100%" fontSize="13px" p="24px">
      <Flex justifyContent="space-between">
        <Flex gap="16px">
          <Avatar name='Elijah Moss' src='/images/user-images/image-elijah.jpg' />
          <Box my="auto">
            <Text fontWeight="bold">{comment.name}</Text>
            <Text color="#647196" >{comment.tag}</Text>
          </Box>
        </Flex>
        <Text onClick={handleReply} fontWeight="semibold" color="#4661E6" as="button">Reply</Text>
      </Flex>
      <Text mt="24px" color="#647196">
        {comment.comment}
      </Text>
      {comment.replies?.map((reply: Reply, index: number) => (
        <Text key={index} color="#647196">
          {reply.reply}
        </Text>
      ))}
      <Flex display={replyDisplay}>
      <ReplyComment commentId={comment.id} />
    </Flex>
    </Box>
  )
}

export default Comment