import React from 'react'
import Hero from './Hero'
import About from './About'
import Service from './Service'
import Specialist from './Specialist'
import Banner from './Banner'
import Doctor from './Doctor'
import Appointment from './Appointment'
import Blogs from './Blogs'
import Footer from './Footer'




const Home = () => {
  return (
    <div className='w-full h-auto space-y-20 pb-12'>
    <Hero/>
    <About/>
    <Service/>
    <Specialist/>
    <Banner/>
    <Doctor/>
    <Appointment/>
    <Blogs/>
    <Footer/>

    </div>
  )
}

export default Home