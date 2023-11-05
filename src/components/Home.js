import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(props) {
  return (
    <div>
        <div>
            <h1>
              <Link to="/Login">Login</Link>
            </h1>
            <br/>

            <h1>
              <Link to="/Signup">Signup</Link>
            </h1>
            <br/>
        </div>
        <br/>
        <br/>
        
        <h2>{props.name?`Welcome - ${props.name}`:`Please Login`}</h2>

    </div>
  )
}
