import { Flex } from '@chakra-ui/react'
import Input from './Input'

const inputs = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature']

const Inputs = () => {
  return (
    <Flex borderRadius={16} p="24px" h="30%" wrap="wrap" gap={2} overflow="hidden" alignItems="center" justifyContent="flex-start" bg="#FFF">
      {inputs.map((input: any, index) => (
          <Input key={index} name={input} />
      ))}
    </Flex>
  )
}

export default Inputs