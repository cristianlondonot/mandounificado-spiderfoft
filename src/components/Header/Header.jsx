import React from 'react'
import Navbar from '../Navbar/Navbar'
import AlertTop from '../AlerTop/AlertTop'
import './Header.sass'

const Header = () => {
  return (
    <header>
      <AlertTop />
      <Navbar />
    </header>
  )
}

export default Header