import React from 'react'
import Footer from '../../components/Footer/Footer'
import PunchInput from '../../components/PunchInput/PunchInput'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'

const Punch = () => {
  return (
    <div>
      <Navbar />
      <Hero heading='Punch' text='Clock in/out - Lunch in/out'/>
      <PunchInput />
      <Footer />
    </div>
  )
}

export default Punch