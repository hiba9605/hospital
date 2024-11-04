import React from 'react'
import Layout from './Layout'
import { Link } from 'react-router-dom'
import { SiGooglemaps } from 'react-icons/si'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { FaEnvelope } from 'react-icons/fa6'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer style={{backgroundColor:'#CDC1FF',marginTop:'40px',padding:'20px',height:'400px',display:'flex'}} className='w-full py-7 bg-neutral-200/50'>
        <Layout className="w-full space-y-10">
            <div className='grid md:grid-cols-5 grid-cols-2 gap-10'>


                <div style={{marginLeft:'40px'}} className='col-span-2 space-y-4'>
                    {/* logo section */}
                    <Link style={{fontSize:'30px',textDecoration:'none',fontWeight:'semibold',paddingTop:'20px'}}>
        Doctor
        </Link>
        <div className='space-y-6'>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, <br />necessitatibus nesciunt pariatur asperiores veniam minus fuga <br /> repudiandae incidunt libero delectus?
            </p>
            <div className='space-y-3'>
                <div style={{display:'flex'}} className='flex items-center gap-x-3'>
                    <SiGooglemaps className='text-base' />
                    <p style={{marginLeft:'10px'}} >123 Street, New York, USA</p>

                </div>
                <div style={{display:'flex'}} className='flex items-center gap-x-3'>
                    <TfiHeadphoneAlt className='text-base'  />
                    <p style={{marginLeft:'10px'}}>123 456 789</p>

                </div>
                <div style={{display:'flex'}} className='flex items-center gap-x-3'>
                    <FaEnvelope className='text-base' />
                    <p style={{marginLeft:'10px'}}>info@doctor.com</p>

                    

                </div>
            </div>
        </div>
                </div>
                <div style={{marginLeft:'600px',marginTop:'-250px'}} className='col-span-1 space-y-4'>
                    <h3>
                        Company
                    </h3>
                    <ul style={{padding:'20px',listStyle:'none',marginLeft:'-20px'}} className='space-y-3'>
                        <li >
                            <Link style={{textDecoration:'none',color:'black'}} to="/">
                            Home
                            </Link>   <br />   <br />
                        </li>
                        <li>
                            <Link style={{textDecoration:'none',color:'black'}} to="/">
                            Experience
                            </Link>   <br />  <br />
                        </li>
                        <li>
                            <Link style={{textDecoration:'none',color:'black'}} to="/">
                            About
                            </Link>
                        </li>
                    </ul>
                </div>
                <div style={{marginLeft:'900px',marginTop:'-220px'}} className='col-span-1 space-y-4'>
                <h3>
                        Services
                    </h3>
                    <ul style={{padding:'20px',listStyle:'none',marginLeft:'-20px'}} className='space-y-3'>
                        <li >
                            <Link style={{textDecoration:'none',color:'black'}} to="/">
                            Home
                            </Link>   <br />   <br />
                        </li>
                        <li>
                            <Link style={{textDecoration:'none',color:'black'}} to="/">
                            Experience
                            </Link>   <br />  <br />
                        </li>
                        <li>
                            <Link style={{textDecoration:'none',color:'black'}} to="/">
                            About
                            </Link>  <br /> <br />
                        </li>
                        <li>
                            <Link style={{textDecoration:'none',color:'black'}} to="/">
                            Experience
                            </Link>   <br />  <br />
                        </li>
                        <li>
                            <Link style={{textDecoration:'none',color:'black'}} to="/">
                            About
                            </Link>
                        </li>
                        
                    </ul>
                </div>
                <div style={{marginLeft:'1100px',marginTop:'-310px'}} className='md:col-span-1 col-span-2 space-y-4'>
                <h3>
                        Connect With Us
                    </h3>
                    <div >
                        <Link style={{fontSize:'40px'}}>
                        <FaInstagram/>
                        </Link>
                        <Link style={{fontSize:'40px',marginLeft:'20px'}}>
                        <FaYoutube/>
                        </Link>
                        <Link style={{fontSize:'40px',marginLeft:'20px'}}>
                        <FaFacebook/>
                        </Link>
                    </div>
                </div>


            </div>

            <div className='w-full h-[1px] bg-neutral-300'></div>
        

            <div style={{marginTop:'230px'}} className='w-full flex items-center justify-between'>
                <p>
                    Copyright &copy; 2024.All rights reserved.
                </p>
            </div>
            

        </Layout>

    </footer>
  )
}

export default Footer