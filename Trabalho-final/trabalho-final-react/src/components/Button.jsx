import React from 'react'
import './Button.css'

function Button(props) {
  return (
    <button className='btn-orange'>
        {props.texto}</button>
  )
}

export default Button