import React from 'react'
import { FaSun } from "react-icons/fa";
import './LittleCard.css'

function LittleCard() {
  return (
    <div className='body'>
      <div className='header'>
        <FaSun className='icon' />
        <p>01</p>
      </div>
      <div>
        <h2>Diving and Snorkeling</h2>
        <h3>The travel package includes <br />lending services for diving and snorkeling equipment</h3>
      </div>
    </div>
  )
}

export default LittleCard