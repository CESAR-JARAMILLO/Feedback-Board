import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

interface CommentsProps {
  comment: any;
}

const Comment = ({ comment }: CommentsProps) => {

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
        <Text fontWeight="semibold" color="#4661E6" as="button">Reply</Text>
      </Flex>
      <Text mt="24px" color="#647196">
        {comment.comment}
      </Text>
    </Box>
  )
}

export default Comment