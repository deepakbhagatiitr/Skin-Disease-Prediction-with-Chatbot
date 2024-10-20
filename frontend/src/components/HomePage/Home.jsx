import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import TrustPart from './TrustPart'
import HowItWorks from './HowItWorks'
import Footer from '../Footer/Footer'
import AboutUs from '../AboutUs/AboutUs'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <HowItWorks />
        <TrustPart />
        <Footer />
        
    </div>
  )
}

export default Home