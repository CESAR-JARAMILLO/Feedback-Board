import { Button } from '@chakra-ui/react'
import React from 'react'


interface InputProps {
  name: string;
}

const Input = ({name}: InputProps) => {
  return (
    <Button 
      fontWeight="semibold" 
      borderRadius="10px" 
      bg="#F2F4FF" 
      color="#4661E6" 
    >
      {name}
    </Button>
  )
}

export default Input