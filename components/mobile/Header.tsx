import { Container, Flex, Image, Text } from '@chakra-ui/react'

const Header = () => {
  return (
    <Flex 
      backgroundImage="url(/images/mobile/background-header.png)" 
      bgRepeat="no-repeat" 
      bgSize="cover" 
      py="16px" 
      px="24px" 
      justifyContent="space-between"
    >
      <Container>
        <Text fontSize="15px" color="white" fontWeight="bold">Front End Mentor</Text>
        <Text fontSize="13px" fontWeight="medium" color="white">Feedback Board</Text>
      </Container>
      <Image h="17px" mr="2px" my="auto" src='/images/mobile/icon-hamburger.svg'/>
    </Flex>
  )
}

export default Header