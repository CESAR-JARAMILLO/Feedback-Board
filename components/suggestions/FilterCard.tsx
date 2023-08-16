import { Flex, useMediaQuery } from '@chakra-ui/react'
import Input from './FilterButton'
import { useState } from 'react'

const inputs = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature']

const FilterCard = () => {
  const [selectedInput, setSelectedInput] = useState<string | null>(null)
  const [isLargerThanMD] = useMediaQuery("(min-width: 768px)");

  const handleClick = (inputName: string) => () => {
    setSelectedInput(inputName)
  }

  return (
    <Flex borderRadius={16} p="24px" w={isLargerThanMD ? "240px" : "none" } wrap="wrap" gap={2} overflow="hidden" alignItems="center" justifyContent="flex-start" bg="#FFF">
      {inputs.map((input: string, index: number) => (
          <Input selected={input === selectedInput} onClick={handleClick(input)} key={index} name={input} />
      ))}
    </Flex>
  )
}

export default FilterCard