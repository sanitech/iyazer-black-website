import React from 'react'
import logo from '../Assets/images/logo2.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const toggleNav = () => {
    const nav = document.querySelector('.links')
    nav.classList.toggle('open-links')
  }
  return (
    <nav>
      <div class="logo-banner">
        <Link to={'/'} className='flex'>
          <img src={logo} alt="" />
          <span class="logo-text oswald">IYAZER</span>
        </Link>
        <hr />
        <div class="burger-btn">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
      </div>

      <ul class="links poppins-medium">
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/movie'}>Movie</Link></li>
        <li><a href={'#service'}>Service</a></li>
        <li><Link to={'/contact'}>Contact Us</Link></li>
      </ul>

      <div class="start-btn">
        <Link to={"/register"}>let's go <i class="bi bi-arrow-up-right"></i></Link>
      </div>

      <div class=" burger-btn burger" onClick={toggleNav}>
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </nav>
  )
}

export default Navbar
