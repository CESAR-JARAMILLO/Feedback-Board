import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const AddFeedbackBtn = () => {
  const router = useRouter()

  return (
    <Button onClick={() => router.push("feedback/new")} w="134px" h="40px" bg="#AD1FEA" color="#F2F4FE" fontSize="13px" fontWeight="bold" >+ Add Feedback</Button>
  )
}

export default AddFeedbackBtn