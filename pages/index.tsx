import Dropdown from '@/components/mobile/Dropdown'
import Header from '@/components/mobile/Header'
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
      Home
    </>
  )
}

export default Home