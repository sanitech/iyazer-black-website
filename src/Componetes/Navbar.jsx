import React from 'react'
import logo from '../Assets/images/logo2.jpg'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
      <div class="logo-banner">
        <img src={logo} alt="" />
        <span class="logo-text oswald">IYAZER</span>
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
        <li><Link to={'#service'}>Service</Link></li>
        <li><Link to={'/contact'}>Contact Us</Link></li>
      </ul>

      <div class="start-btn">
        <a href="">let's go <i class="bi bi-arrow-up-right"></i></a>
      </div>

      <div class="burger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </nav>
  )
}

export default Navbar
