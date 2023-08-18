import Board from '@/components/board/Board'
import Dropdown from '@/components/mobile/Dropdown'
import Header from '@/components/mobile/Header'
import EmptySuggestions from '@/components/suggestions/EmptySuggestions'
import FilterHeader from '@/components/suggestions/FilterHeader'
import Suggestions from '@/components/suggestions/Suggestions'
import { Box, Flex, useMediaQuery } from '@chakra-ui/react'
import React, { useState } from 'react'

const Home = () => {
  const [hamburgerClicked, setHamburgerClicked] = useState(false)
  const [isLargerThanMD] = useMediaQuery("(min-width: 768px)");
  const [isLargerThanLG] = useMediaQuery("(min-width: 1000px)");

  const handleHamburgerClick = (event: React.MouseEvent<HTMLImageElement>) => {
    event.preventDefault()
    setHamburgerClicked(!hamburgerClicked);
  }
  return (
    <Flex direction={{base:"column", lg: "row"}} px={{md: "40px"}} pt={{md: "56px"}} bg="#F2F4FE" pos="relative">
      {isLargerThanLG && (
        <Box mr="30px">          
          <Board />
        </Box>
      )}
      {isLargerThanMD && !isLargerThanLG && (
        <Board />
      )} 
      {!isLargerThanLG && !isLargerThanMD && (  
        <Header 
          onClick={handleHamburgerClick} 
          hamburgerClicked={hamburgerClicked}
        />
      )}
      {hamburgerClicked && (<Box pos="absolute" top="74px" zIndex={10} width="full"><Dropdown /></Box>)}
      <Box>
        <FilterHeader />
        <Suggestions />
      </Box>
    </Flex>
  )
}

export default Home