import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'


import Footer from './components/Footer'
import Hero from './components/Hero'
import Department from './Pages/Department'
import  Pagination  from './Pages/Pagination'
import Login from './Pages/Login'
// import  Registerstd from './Pages/Registerstd'
import Register from './Pages/Register'

function App() {


  return (
    <div className="app-wrapper">
     <Navbar/>
     {/* <Department/> */}
     {/* <Hero/> */}
      {/* <Pagination/> */}
     <Register/>
      {/* <Login/> */}
      
     <Footer/>
    </div>
  )
}

export default App
