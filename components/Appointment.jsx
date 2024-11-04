import React from 'react'
import Layout from './Layout'
import appo from '../src/assets/appo.webp'
import { Button } from 'react-bootstrap'

const Appointment = () => {
  return (
    <div className='w-full space-y-6'>
        <Layout>
            <div className="w-full flex items-center gap-10 justify-between md:flex-nowrap flex-wrap">
                <div className='md:w-1/3 w-full rounded-xl overflow-hidden relative'>
                <img style={{marginLeft:'40px',width:'400px',height:'600px'}} src='../src/assets/appo.webp' className='w-full md:aspect-[3/4] aspect-[2/3] object-cover object-center'/>
                <div id='appo' style={{marginTop:'-460px',position:'relative',width:'400px',marginLeft:'50px'}} className='w-full h-full absolute top-0 left-0 flex items-center justify-center flex-col'>
                    <div className='space-y-2'>
                        <h1 style={{color:'black',fontWeight:'bold'}}>
                            Working Hours
                        </h1>
                        <p style={{color:'black'}}>This hospital is only operating on the following days in the following hours:</p>
                    </div>
                    <div className='space-y-5'>
                        <p style={{color:'white',padding:'20px'}}>
                            Sunday - Monday: <span>8:00 AM - 8:00 PM</span>  <br /> <br />
                            Tuesday - Wednesday: <span>7:00 AM - 8:00 PM</span>  <br /> <br />
                            Thursday - Friday: <span>8:00 AM - 8:00 PM</span> <br /> <br />
                            Saturday, Public Holiday: <span>Closed</span>  <br /> <br />
                            Emergency: <span>24/7 Emergency</span>

                        </p>

                        <p style={{marginTop:'-20px',color:'white'}}>For Emergency you have to contact us or book an appointment.</p>

                    </div>
                </div>
                </div>
                <div style={{marginLeft:'500px',marginTop:'-450px'}} className='md:w-2/3 w-full space-y-6 bg-neutral-100/40 rounded-xl md:p-8 p-4'>
                <h1>
                    Book An Appointment
                </h1>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-7'>
                    <div className='space-y-1.5'>
                        <label>Full Name</label>  <br /> 
                        <input style={{width:'300px',padding:'10px',borderRadius:'10px',marginTop:'10px',backgroundColor:'#e3dede'}} type="text" placeholder='e.g. John Doe'/>

                    </div>
                    <div className='space-y-1.5'>
                        <label>Email Address</label>  <br /> 
                        <input style={{width:'300px',padding:'10px',borderRadius:'10px',marginTop:'10px',backgroundColor:'#e3dede'}} type="email" placeholder='e.g. info@gmail.com'/>

                    </div>
                    <div className='space-y-1.5'>
                        <label>Phone Number</label>  <br /> 
                        <input style={{width:'300px',padding:'10px',borderRadius:'10px',marginTop:'10px',backgroundColor:'#e3dede'}} type="text" placeholder='e.g. +977-9876543278'/>

                    </div>
                    <div style={{marginLeft:'500px',marginTop:'-240px'}} className=''>
                    <div  className='space-y-1.5'>
                        <label>Choose Subject</label>  <br /> 
                        {/* <input style={{width:'300px',padding:'10px',borderRadius:'10px',marginTop:'10px',backgroundColor:'#e3dede'}} type="text" placeholder='e.g. John Doe'/> */}
                        <select style={{width:'300px',padding:'10px',borderRadius:'10px',marginTop:'10px',backgroundColor:'#e3dede'}} name="department" id="">
                            <option value="consultant">Consultant</option>
                            <option value="makeenquiry">Make Enquiry</option>
                            <option value="healthcheckup">Health Checkup</option>
                            <option value="visitdoctor">Visit Doctor</option>



                        </select>

                    </div>
                    <div className='space-y-1.5'>
                        <label>Select Date</label>  <br /> 
                        <input style={{width:'300px',padding:'10px',borderRadius:'10px',marginTop:'10px',backgroundColor:'#e3dede'}} type="date" />

                    </div>
                    <div className='space-y-1.5'>
                        <label>Select Time</label>  <br /> 
                        <input style={{width:'300px',padding:'10px',borderRadius:'10px',marginTop:'10px',backgroundColor:'#e3dede'}} type="time" />

                    </div>

                    </div>
                   
                </div>
                <Button style={{color:'white',fontSize:'20px',marginTop:'50px'}} variant="info">Make An Appointment</Button>


                
                </div>
            </div>

        </Layout>
    </div>
  )
}

export default Appointment