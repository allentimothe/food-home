import React from 'react'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
import TaskForm from '../../components/TaskForm/TaskForm'

const Punch = () => {
  return (
    <div>
      <Navbar />
      <Hero heading='Tasks' text='Submit Brief Descriptions In Appropriate Sections'/>
      <TaskForm />
      <Footer />
    </div>
  )
}

export default Punch