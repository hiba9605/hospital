import React from 'react'
import banner from '../src/assets/banner.jpg'
import Layout from './Layout'

const Banner = () => {
  return (
    <div className='w-full md:aspect-[5/2] aspect-auto relative'>
        <img style={{width:'100%',height:'550px',paddingTop:'40px'}} src="./src/assets/banner.jpg" alt="" className="w-full h-full object-cover object-center" />
        <div className='w-full h-full absolute top-0 left-0 bg-gradient-to-b from-neutral-900/70 via-neutral-900/20 to-neutral-900/20'>
        <Layout className='w-full h-full md:pt-16 pt-2'>
            <div className="w-full h-full flex items-center justify-start flex-col text-center md:space-y-12 space-y-5">
                <div className='space-y-4'>
                    <h1 style={{color:'white',position:'absolute',marginTop:'-530px',marginLeft:'400px',fontSize:'60px'}} className="md:text-6xl text-2xl text-neutral-50 font-bold leading-[1.3] capitalize">
                        Having a Health Problem? <br className='md:block hidden'/>
                        Dont't Make delay on your life!
                    </h1>
                    <p style={{position:'absolute',marginTop:'-370px',marginLeft:'460px',color:'white'}} className='md:text-lg text-sm text-neutral-400 font-normal'>
                        Your Health is your greatest asset.Don't let delays stand in the way of a vibrant life. <br /> seek help today and take the first step towards a healthier tomorrow.
                    </p>
                </div>

                <button style={{marginTop:'-300px',position:'absolute',marginLeft:'-100px',padding:'20px',borderRadius:'20px'}}  className="md:w-1/2 w-full px-6 md:py-5 py-3 text-lg text-neutral-50 font-medium rounded-xl bg-neutral-50/20 border-2 border-neutral-50/60 hover:bg-transparent hover:bg-neitral-50 hover:border-neutral-50 flex items-center justify-between ease-in-out duration-300">
            Book a Appointment
            </button>
            </div>

        </Layout>

        </div>

    </div>
  )
}

export default Banner