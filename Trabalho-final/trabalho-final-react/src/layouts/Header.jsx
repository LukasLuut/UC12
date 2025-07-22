import React from 'react'
import './Header.css'
import Button from '../components/Button'
import Button2 from '../components/Button2'


function Header() {
  return (
    <header className='header'>

      <nav>
        <a id='Home' href="#">Home</a>
        <a href="#">Pages </a>
        <a href="#">Package</a>
        <a href="#">Destination</a>
      </nav>
        <img src="https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/nomad-logo.png" alt="logo-Nomad" />
      <div className='btns'>
        <Button2 texto="Blog" />
        <Button texto="Contact" />

      </div>
    </header>

  )
}

export default Header