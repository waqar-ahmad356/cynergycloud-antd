import React from 'react'

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Testimonials from './components/Testimonials/Testimonials'
import Slider from './components/Swiper/CounterSlider'
import CountinuousSlider from './components/Swiper/CounterSlider'
import Contact from './components/Contact/Contact'
import Signup from './components/Signup/Signup'


const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Testimonials/>
    <Signup/>
    <Contact/>
    
    <Footer/>
    
 
    </>
  )
}

export default App
