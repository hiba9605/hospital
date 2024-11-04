import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';




const Navbar = () => {
  
  return (
    <nav className='w-full h-[8ch] bg-neutral-50 flex items-center md:flex-row lg:px-32 md:px-16 sm:px-8 px-4 border-b border-neutral-200'>
        <Link style={{fontSize:'40px',textDecoration:'none',fontWeight:'bold',paddingTop:'20px'}}>
        Doctor
        </Link>
        <ul style={{display:'flex',marginLeft:'150px',listStyle:'none',marginTop:'-30px'}}>
            <li style={{fontWeight:'bold'}}>Home</li>
            <li style={{marginLeft:'30px',fontWeight:'bold'}}>Services</li>
            <li style={{marginLeft:'30px',fontWeight:'bold'}}>About</li>
            <li style={{marginLeft:'30px',fontWeight:'bold'}}>Doctors</li>
            <li style={{marginLeft:'30px',fontWeight:'bold'}}>Blogs</li>
        </ul>

        {/* <button style={{display:'flex',marginLeft:'1300px',backgroundColor:'#00b0ff',color:'white',padding:'10px'}} className='btn '>
            Appointment
        </button> */}

<Button style={{marginLeft:'1300px',color:'white',fontSize:'20px',marginTop:'-60px'}} variant="info">Appointment</Button>

        
   
      
    </nav>
  )
}

export default Navbar