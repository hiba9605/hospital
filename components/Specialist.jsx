import React from 'react'
import { FiChevronsRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import dental from '../src/assets/dental.png'
import eye from '../src/assets/eye.png'
import gyno from '../src/assets/gyno.png'
import neuro from '../src/assets/neuro.jpg'
import cardio from '../src/assets/cardio.png'


const Specialist = () => {
  return (
    <Layout className=' space-y-6'>
        <div className=' flex items-center justify-between'>
        <h1 style={{marginLeft:'20px'}} className='text-2xl text-neutral-700 font-semibold'>
            Our Specialists
        </h1>
        <Link style={{display:'flex',marginTop:'-40px',marginLeft:'1300px'}} to="/services" className='text-base text-blue-600 hover:text-blue-50 font-normal flex  items-center gap-x-2 ease-in-out duration-300'>
        View All
        <FiChevronsRight className='text-lg'/>
        </Link>
        </div>

          

        <div style={{display:'flex',justifyContent:'space-evenly',paddingTop:'40px'}}>
        <Card style={{ width: '18rem',backgroundColor:'grey' }}>
      <Card.Img style={{height:'180px',width:'180px',borderRadius:'90px',backgroundColor:'#CDC1FF',marginLeft:'50px',marginTop:'10px',padding:'20px',marginTop:'50px'}} variant="top" src="./src/assets/dental.png" />
      <Card.Body>
        <Card.Title style={{marginLeft:'50px',fontWeight:'bolder',fontSize:'30px',paddingTop:'20px'}}>Dental Care</Card.Title>
        <Card.Text style={{marginLeft:'110px',}}>
        15+
        </Card.Text>
        <Button style={{marginLeft:'70px'}} variant="primary">Read More</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' ,backgroundColor:'grey'}}>
      <Card.Img style={{height:'180px',width:'180px',borderRadius:'90px',backgroundColor:'#CDC1FF',marginLeft:'50px',marginTop:'10px',padding:'20px',marginTop:'50px'}} variant="top" src="./src/assets/eye.png" />
      <Card.Body>
        <Card.Title  style={{marginLeft:'50px',fontWeight:'bolder',fontSize:'30px',paddingTop:'20px'}}>Eye Care</Card.Title>
        <Card.Text style={{marginLeft:'110px',}}>
        18+
        </Card.Text>
        <Button style={{marginLeft:'70px'}} variant="primary">Read More</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem',backgroundColor:'grey' }}>
      <Card.Img style={{height:'180px',width:'180px',borderRadius:'90px',backgroundColor:'#CDC1FF',marginLeft:'50px',marginTop:'10px',padding:'20px',marginTop:'50px'}} variant="top" src="./src/assets/cardio.png" />
      <Card.Body>
        <Card.Title  style={{marginLeft:'50px',fontWeight:'bolder',fontSize:'30px',paddingTop:'20px'}}>Cardiology</Card.Title>
        <Card.Text style={{marginLeft:'110px',}}>
          33+
        </Card.Text>
        <Button  style={{marginLeft:'70px'}}  variant="primary">Read More</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem',backgroundColor:'grey' }}>
      <Card.Img style={{height:'180px',width:'180px',borderRadius:'90px',backgroundColor:'#CDC1FF',marginLeft:'50px',marginTop:'10px',padding:'20px',marginTop:'50px'}} variant="top" src="./src/assets/neuro.jpg" />
      <Card.Body>
        <Card.Title  style={{marginLeft:'50px',fontWeight:'bolder',fontSize:'30px',paddingTop:'20px'}}>Neurology </Card.Title>
        <Card.Text style={{marginLeft:'110px',}}>
         10+
        </Card.Text>
        <Button  style={{marginLeft:'70px'}}  variant="primary">Read More</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem',backgroundColor:'grey' }}>
      <Card.Img style={{height:'180px',width:'180px',borderRadius:'90px',backgroundColor:'#CDC1FF',marginLeft:'50px',marginTop:'10px',padding:'20px',marginTop:'50px'}} variant="top" src="./src/assets/gyno.png" />
      <Card.Body>
        <Card.Title  style={{marginLeft:'50px',fontWeight:'bolder',fontSize:'30px',paddingTop:'20px'}}>Gynecology</Card.Title>
        <Card.Text style={{marginLeft:'110px',}}>
       25+
        </Card.Text>
        <Button  style={{marginLeft:'70px'}} variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    
        </div>


    </Layout>
  )
}

export default Specialist