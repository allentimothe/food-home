import React from 'react'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
import Clock from '../../components/Clock/Clock'

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Hero heading='DASHBOARD' text='Hi Employee'/>
      <Clock />
      <Footer />
    </div>
  )
}

export default Dashboard