import React from 'react'
import './Input.css'
export default function Input(props) {
  return (
    <div className='contain'>
        {props.label && <label>{props.label}</label>}
        <input type='text' {...props}></input> 
    </div>
  )
}
