import React from 'react'
import { FaPhone } from 'react-icons/fa'
import { IoChatbubbles } from 'react-icons/io5'

const DoctorCard = ({img,name,position}) => {
  return (
    <div style={{display:'flex'}} className=' rounded-xl overflow-hidden cursor-pointer'>
        <div style={{display:'flex'}} className=' aspect-square relative'>
            <img style={{width:'300px'}} src={img} alt="doctor img" className='w-full aspect-square object-cover object-top rounded' />
            <div className="w-full h-full flex items-end flex-col absolute top-0 right-0 bg-gradient-to-r from-transparent to-neural-900/50 rounded-xl">
            <button style={{position:'absolute',marginLeft:'-30px',marginTop:'40px',border:'none',borderRadius:'10px'}}>
                <FaPhone className='w-4 h-4'/>
            </button>
            <button style={{position:'absolute',marginLeft:'-30px',marginTop:'80px',border:'none',borderRadius:'10px'}}>
                <IoChatbubbles className='w-4 h-4'/>
            </button>
            </div>
        </div>
        <div style={{display:'flex',position:'absolute',marginTop:'350px'}} className='space-y-l px-2 py-3 text-center'>
            <h1 className='text-xl text-neutral-700 font-semibold'>
                {name}  
            </h1>
            <p style={{marginTop:'60px',marginLeft:'-180px'}}>
                {position}
            </p>
        </div>

    </div>
  )
}

export default DoctorCard