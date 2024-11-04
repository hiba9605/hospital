import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
import Layout from './Layout';
import { FiChevronsRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <div className='w-full h-[calc(100vh-8ch)] flex flex-col'>
        <div className="flex-1">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
            <div className='w-full relative h-[calc(100vh-8ch)]'>
                <div className='w-full h-full'>
                   <img style={{width:'100%'}} src="https://cdn.pixabay.com/photo/2017/03/14/03/20/woman-2141808_1280.jpg" alt="" className='w-full h-full object-top object-cover' />

                </div>
                <div className="absolute top-0 left-0 w-full h-full flex items-start justify-center flex-col bg-gradient-to-tr from-neutral-900/60 to-neutral-900/30 z-30">

                <Layout>
                    <div  style={{height:'300px',width:'400px',backgroundColor:'#00b0ff',backdrop:'blur',marginTop:'-900px',position:'relative',marginLeft:'200px',borderRadius:'20px'}} className='backdrop-blur bg-blue-300/40 '>
                    <div className="space-y-4">
                      <h1 style={{color:'white',padding:'20px'}} className='md:text-4xl text-3xl text-blue-50 font-bold leading-[1.3]'>
                        We Take Care of Your Healthy Health
                      </h1>
                      <p style={{padding:'20px',marginTop:'-40px',color:'white'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque velit, deleniti temporibus animi, praesentium voluptatibus !</p>
                    </div>

                   <button style={{marginLeft:'50px',marginTop:'-10px',textAlign:'center',paddingLeft:'20px',color:'black',borderRadius:'30px',paddingRight:'20px'}}  className="w-fit px-8 py-3 text-base text-neutral-700 font-medium rounded-xl bg-neutral-500 hover:bg-transparent hover-text-neutral-50 hover:border-neutral-50 flex items-center gap-x-2 ease-in-out duration-300">
                    Our Services
                    <FiChevronsRight className='text-xl pt-0.5'/>
                    {/* <FiChevronsRight className='text-xl pt-0.5'/> */}
                   </button>

                    </div>
                </Layout>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-full relative h-[calc(100vh-8ch)]'>
                <div className='w-full h-full'>
                   <img style={{width:'100%'}} src=" https://cdn.pixabay.com/photo/2016/11/08/05/29/surgery-1807541_1280.jpg" alt="" className='w-full h-full object-top object-cover' />

                </div>
                <div className="absolute top-0 left-0 w-full h-full flex items-start justify-center flex-col bg-gradient-to-tr from-neutral-900/60 to-neutral-900/30 z-30">

                <Layout>
                    <div style={{height:'300px',width:'400px',backgroundColor:'#00b0ff',backdrop:'blur',marginTop:'-900px',position:'relative',marginLeft:'200px',borderRadius:'20px'}} className='backdrop-blur bg-blue-300/40 '>
                    <div className="space-y-4">
                      <h1 style={{color:'white',padding:'20px'}} className='md:text-4xl text-3xl text-blue-50 font-bold leading-[1.3]'>
                        We Take Care of Your Healthy Health
                      </h1>
                      <p style={{padding:'20px',marginTop:'-40px',color:'white'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque velit, deleniti temporibus animi, praesentium voluptatibus !</p>
                    </div>

                   <button style={{marginLeft:'50px',marginTop:'-10px',textAlign:'center',paddingLeft:'30px',color:'black',borderRadius:'30px'}}  className="w-fit px-8 py-3 text-base text-neutral-700 font-medium rounded-xl bg-neutral-500 hover:bg-transparent hover-text-neutral-50 hover:border-neutral-50 flex items-center gap-x-2 ease-in-out duration-300">
                    Our Services
                    <FiChevronsRight className='text-xl pt-0.5'/>
                    {/* <FiChevronsRight className='text-xl pt-0.5'/> */}
                   </button>

                    </div>
                </Layout>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-full relative h-[calc(100vh-8ch)]'>
                <div className='w-full h-full'>
                   <img style={{width:'100%'}} src="https://cdn.pixabay.com/photo/2016/01/19/15/05/computer-1149148_1280.jpg" alt="" className='w-full h-full object-top object-cover' />

                </div>
                <div className="absolute top-0 left-0 w-full h-full flex items-start justify-center flex-col bg-gradient-to-tr from-neutral-900/60 to-neutral-900/30 z-30">

                <Layout>
                    <div style={{height:'300px',width:'400px',backgroundColor:'#00b0ff',backdrop:'blur',marginTop:'-900px',position:'relative',marginLeft:'200px',borderRadius:'20px'}} className='backdrop-blur bg-blue-300/40 '>
                    <div className="space-y-4">
                      <h1 style={{color:'white',padding:'20px'}} className='md:text-4xl text-3xl text-blue-50 font-bold leading-[1.3]'>
                        We Take Care of Your Healthy Health
                      </h1>
                      <p style={{padding:'20px',marginTop:'-40px',color:'white'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque velit, deleniti temporibus animi, praesentium voluptatibus !</p>
                    </div>

                   <button style={{marginLeft:'50px',marginTop:'-10px',textAlign:'center',paddingLeft:'30px',color:'black',borderRadius:'30px'}}  className="w-fit px-8 py-3 text-base text-neutral-700 font-medium rounded-xl bg-neutral-500 hover:bg-transparent hover-text-neutral-50 hover:border-neutral-50 flex items-center gap-x-2 ease-in-out duration-300">
                    Our Services
                    <FiChevronsRight className='text-xl pt-0.5'/>
                    {/* <FiChevronsRight className='text-xl pt-0.5'/> */}
                   </button>

                    </div>
                </Layout>
                </div>
            </div>
        </SwiperSlide>
        
      </Swiper>
        </div>
    </div>
  )
}

export default Hero