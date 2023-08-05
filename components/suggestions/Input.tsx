import { Button } from '@chakra-ui/react'
import React from 'react'


interface InputProps {
  name: string;
  selected: boolean;
  onClick: () => void;
}

const Input = ({name, onClick, selected}: InputProps) => {
  return (
    <Button
      onClick={onClick} 
      fontWeight="semibold" 
      borderRadius="10px" 
      bg={selected ? "#4661E6" : "#F2F4FF" }
      color={selected ? "#FFF" : "#4661E6" }
    >
      {name}
    </Button>
  )
}

export default Input