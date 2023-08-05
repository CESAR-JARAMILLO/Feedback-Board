import { Flex, Image, Text } from '@chakra-ui/react'
import { useState } from 'react'

const Header = () => {
  const [hamburgerClicked, setHamburgerClicked] = useState(false)

  const handleHamburgerClick = (event: React.MouseEvent<HTMLImageElement>) => {
    event.preventDefault()
    setHamburgerClicked(!hamburgerClicked);
  }

  return (
    <Flex 
      backgroundImage="url(/images/mobile/background-header.png)" 
      bgRepeat="no-repeat" 
      bgSize="cover" 
      py="16px" 
      px="24px" 
      justifyContent="space-between"
    >
      <Flex direction="column">
        <Text fontSize="15px" color="white" fontWeight="bold">Front End Mentor</Text>
        <Text fontSize="13px" fontWeight="medium" color="white">Feedback Board</Text>
      </Flex>
        <Image _hover={{cursor: "pointer"}} onClick={handleHamburgerClick}  h="17px" mr="2px" my="auto" src={hamburgerClicked ? '/images/mobile/icon-close.svg' : '/images/mobile/icon-hamburger.svg'}/>
    </Flex>
  )
}

export default Header