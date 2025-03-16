import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
   <header className='header'>
     <a href="" className="logo"> logo</a>

     <nav className="navbar ">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Pricing</a>
        <a href="/">Services</a>
        <a href="/">Contact</a>
     </nav>
   </header>
  )
}

export default Navbar