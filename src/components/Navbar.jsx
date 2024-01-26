import React from 'react'
import './Navbar.css'
import 'boxicons'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
        <div className="header">
          <span href="#"  className='logo'>Project Pioneer</span>
          <input type="checkbox" id='check'/>
          <label htmlFor="check" className='icons'>
          <box-icon name='menu' id="menu-icon"></box-icon>
          <box-icon type='solid' name='x-circle' id="close-icon"></box-icon>
          </label>
          <div className='navbar'>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          </div>
        </div>
    </>

  )
}
