import Comments from '@/components/comments/Comments'
import FeedbackHeader from '@/components/feedback/FeedbackHeader'
import Suggestion from '@/components/suggestions/Suggestion'
import { Box } from '@chakra-ui/react'
import React from 'react'

const Feedback = () => {
  return (
    <Box p="24px" h="100vh" bg="#F2F4FE">
      <FeedbackHeader />
      <Suggestion />
      <Comments />
    </Box>
  )
}

export default Feedback