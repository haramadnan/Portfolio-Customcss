import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react'
import '../app/styles/navbar.css';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] =useState(false);
  const toggleMenu =() => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='navbar-container'>
        <div className='navbar-flex'>
        <div className= 'navbar-text'>Haram Adnan </div> 

        {/* Large Screen Navbar Links */}
        <ul className={`'navbar-links '${isMenuOpen ? 'open' : ''}`}>
      <li className='navbar-linkk'><a href='#hero'>Home</a></li>
      <li className='navbar-link'><a href='#about'>About</a></li>
      <li className='navbar-link'><a href='#projects'>Projects</a></li>
      <li className='navbar-link'><a href='#skills'></a>Skills</li>
      <li className='navbar-link' ><a href='#contact'>Contact</a>
      </li>
     </ul>
     {/* HamBurger Menu Icon */}
     <div className='navbar-menu-icon' onClick={toggleMenu}>
      {isMenuOpen ?  'open ' : ''}
      <GiHamburgerMenu className='md:hidden' size={35} />
     </div>
     </div>
     
     {isMenuOpen && (
      <ul className={`'navbar-menu '${isMenuOpen ? 'open' : ""}`}>
<li className='navbar-link'>
<a href='#hero' onClick={toggleMenu} >Home</a>
</li>
<li className='navbar-link'>
<a href='#about' onClick={toggleMenu} >About</a>
</li>
<li className='navbar-link'>
<a href='#projects' onClick={toggleMenu} >Projects</a>
</li>
<li className='navbar-link'>
<a href='#skills' onClick={toggleMenu} >Skills</a>
</li>
<li className='navbar-link'>
<a href='#contact' onClick={toggleMenu} >Contact</a>
</li>
        </ul>

     )}
    </div>
    
    );
  };
    

  

export default Navbar;
