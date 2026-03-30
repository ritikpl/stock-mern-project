import React from 'react'
import {Routes, Route} from "react-router-dom"
import HomePage from './landingpage/Home/HomePage'
import OpenAccount from './landingpage/OpenAccount'
import Navbar from './landingpage/Navbar'
import Footer from './landingpage/Footer'
import AboutPage from './landingpage/About/AboutPage'
import ProductPage from './landingpage/Product/ProductPage'
import PrincingPage from './landingpage/pricing/PrincingPage'
import SupportPage from './landingpage/support/SupportPage'
import Signup from './landingpage/Signup/Signup'
import Login from './landingpage/Signup/Login'
import NotFound from './landingpage/NotFound'



const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element = {<HomePage/> }/>
      <Route path='/signup' element = {<Signup/>} />
      <Route path='/login' element = {<Login/>}/>
      <Route path='/about' element = {<AboutPage/>} />
      <Route path='/product' element = {<ProductPage/>} />
      <Route path='/pricing' element = {<PrincingPage/>} />
      <Route path='/support' element = {<SupportPage/>} />
      <Route path='*' element = {<NotFound/>} />


      

      
    </Routes>
  
    <Footer/>
    </>
  )
}

export default App