import React from 'react'
import './Header.css'
import Button from '../components/Button'


function Header() {
  return (
    <header className='header'>Header
    <h1>logo</h1>
        <nav>
            <a href="#">Home</a>
            <a href="#">Sobre</a>
            <a href="#">Contato</a>
        </nav>
        <Button texto="Clique Aqui" />
    </header>
    
  )
}

export default Header