import Dropdown from '@/components/mobile/Dropdown'
import Header from '@/components/mobile/Header'
import EmptySuggestions from '@/components/suggestions/EmptySuggestions'
import FilterHeader from '@/components/suggestions/FilterHeader'
import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'

const Home = () => {
  const [hamburgerClicked, setHamburgerClicked] = useState(false)

  const handleHamburgerClick = (event: React.MouseEvent<HTMLImageElement>) => {
    event.preventDefault()
    setHamburgerClicked(!hamburgerClicked);
  }
  return (
    <Box h="100vh" bg="#F2F4FE" pos="relative">
      <Header 
        onClick={handleHamburgerClick} 
        hamburgerClicked={hamburgerClicked}
      />
      {hamburgerClicked && (<Box pos="absolute" top="74px" zIndex={10} width="full"><Dropdown /></Box>)}
      <FilterHeader />
      <EmptySuggestions />
    </Box>
  )
}

export default Home