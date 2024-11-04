import React from 'react'
import { FiChevronsRight } from 'react-icons/fi'
import { HiChevronDoubleRight } from 'react-icons/hi'

const About = () => {
  return (
    <div className='w-full flex items-center gap-16 justify-between flex-wrap'>
        <div className='md:w-5/12 w-full space-y-9'>
        <div className="space-y-5">
            <div style={{padding:'90px',marginLeft:'50px'}} className="space-y-2">
                <h2 style={{color:'#00b0ff',}} className="text-2xl text-blue-500 font-semibold">
                    About
                </h2>
                <h1 className="md:text-5xl text-4xl text-neutral-800 font-bold leading-[1.3]">
                    We Are The Best Health <br /> Care In Town

                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Labore eos eius tempore itaque rem dolorem doloribus,<br /> beatae animi. Fugiat doloribus mollitia perferendis nihil <br /> consequatur vel quod dolores iusto quo architecto!
                </p>
                <button style={{backgroundColor:'#00b0ff',color:'white',borderRadius:'15px',padding:'10px',marginTop:'20px'}} className="w-fit px-8 py-3 text-base text-neutral-50 font-medium rounded-xl text-blue-500 hover:bg-blue-600 flex items-center justify-center gap-x-2 ease-in-out duration-300">
            Read More
            <FiChevronsRight className='text-xl pt-0.5'/>
        </button>

            </div>
        </div>
       
        </div>
        <div style={{position:'relative'}} >
        <img style={{height:'400px',width:'500px',marginLeft:'800px',marginTop:'-500px'}} src="https://cdn.pixabay.com/photo/2022/06/14/12/48/medicine-7261808_1280.jpg" alt="" className='w-full h-full object-cover object-center' />
        <div className="absolute to-0 left-0 w-full h-full flex items-center justify-center flex col bg-gradient-to-tr frpm-neutral-900/80 to-transparent  z-30">
        <div className="w-[90%] md:space-y-6 space-y-4 ">
            <button style={{marginLeft:'820px',marginTop:'-400px',position:'absolute',padding:'20px',borderRadius:'20px'}} className="md:w-1/2 w-full px-6 md:py-5 py-3 text-lg text-neutral-50 font-medium rounded-xl bg-neutral-50/20 border-2 border-neutral-50/60 hover:bg-transparent hover:bg-neitral-50 hover:border-neutral-50 flex items-center justify-between ease-in-out duration-300">
            Appointment
            <HiChevronDoubleRight style={{marginLeft:'70px'}} className='text-xl pt-0.5'/>
            </button>

            <button style={{marginLeft:'820px',marginTop:'-300px',position:'absolute',padding:'20px',borderRadius:'20px'}} className="md:w-1/2 w-full px-6 md:py-5 py-3 text-lg text-neutral-50 font-medium rounded-xl bg-neutral-50/20 border-2 border-neutral-50/60 hover:bg-transparent hover:bg-neitral-50 hover:border-neutral-50 flex items-center justify-between ease-in-out duration-300">
            Find Doctors
            <HiChevronDoubleRight style={{marginLeft:'70px'}} className='text-xl pt-0.5'/>
            </button>

            <button style={{marginLeft:'820px',marginTop:'-200px',position:'absolute',padding:'20px',borderRadius:'20px'}} className="md:w-1/2 w-full px-6 md:py-5 py-3 text-lg text-neutral-50 font-medium rounded-xl bg-neutral-50/20 border-2 border-neutral-50/60 hover:bg-transparent hover:bg-neitral-50 hover:border-neutral-50 flex items-center justify-between ease-in-out duration-300">
            Emergency Contact
            <HiChevronDoubleRight style={{marginLeft:'20px'}} className='text-xl pt-0.5'/>
            </button>
        </div>
        </div>
        
        </div>

    </div>
  )
}

export default About