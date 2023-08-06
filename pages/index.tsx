import Dropdown from '@/components/mobile/Dropdown'
import Header from '@/components/mobile/Header'
import FilterHeader from '@/components/suggestions/FilterHeader'
import React, { useState } from 'react'

const Home = () => {
  const [hamburgerClicked, setHamburgerClicked] = useState(false)

  const handleHamburgerClick = (event: React.MouseEvent<HTMLImageElement>) => {
    event.preventDefault()
    setHamburgerClicked(!hamburgerClicked);
  }
  return (
    <>
      <Header 
        onClick={handleHamburgerClick} 
        hamburgerClicked={hamburgerClicked}
      />
      {hamburgerClicked && (<Dropdown />)}
      <FilterHeader />
      Home
    </>
  )
}

export default Home