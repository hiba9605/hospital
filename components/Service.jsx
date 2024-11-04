import React from 'react'
import Layout from './Layout';
import { Link } from 'react-router-dom';
import { FiChevronsRight } from 'react-icons/fi';
import Card from 'react-bootstrap/Card';

const Service = () => {

  

  return (
    <Layout className=' space-y-6'>
        <div className=' flex items-center justify-between'>
        <h1 style={{marginLeft:'20px'}} className='text-2xl text-neutral-700 font-semibold'>
            Our Services
        </h1>
        <Link style={{display:'flex',marginTop:'-40px',marginLeft:'1300px'}} to="/services" className='text-base text-blue-600 hover:text-blue-50 font-normal flex  items-center gap-x-2 ease-in-out duration-300'>
        View All
        <FiChevronsRight className='text-lg'/>
        </Link>
        </div>

          

        <div style={{display:'flex',justifyContent:'space-evenly',paddingTop:'40px'}}>
        <Card style={{ width: '18rem' }}>
      <Card.Img style={{borderRadius:'100px',padding:'10px'}} variant="top" src="https://cdn.pixabay.com/photo/2013/03/09/04/43/medicine-91754_640.jpg" />
      <Card.Body>
        <Card.Title style={{color:'#00b0ff'}}>Preventive Care</Card.Title>
        <Card.Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero quod error reprehenderit iste laboriosam vel repudiandae eaque voluptas impedit numquam.
        </Card.Text>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }}>
      <Card.Img style={{height:'210px',borderRadius:'100px',padding:'10px'}} variant="top" src="https://cdn.pixabay.com/photo/2024/07/14/11/52/ai-generated-8894225_640.jpg" />
      <Card.Body>
        <Card.Title style={{color:'#00b0ff'}}>Diagnostic Testing</Card.Title>
        <Card.Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero quod error reprehenderit iste laboriosam vel repudiandae eaque voluptas impedit numquam.
        </Card.Text>
      </Card.Body>
    </Card>



    <Card style={{ width: '18rem' }}>
      <Card.Img style={{height:'210px',borderRadius:'100px',padding:'10px'}} variant="top" src="https://cdn.pixabay.com/photo/2015/07/30/14/36/hypertension-867855_640.jpg" />
      <Card.Body>
        <Card.Title style={{color:'#00b0ff'}}>Home Treatment</Card.Title>
        <Card.Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero quod error reprehenderit iste laboriosam vel repudiandae eaque voluptas impedit numquam.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img style={{height:'210px',borderRadius:'100px',padding:'10px'}} variant="top" src="https://cdn.pixabay.com/photo/2023/10/07/03/38/ai-generated-8299432_640.jpg" />
      <Card.Body>
        <Card.Title style={{color:'#00b0ff'}}>Health Checkup</Card.Title>
        <Card.Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero quod error reprehenderit iste laboriosam vel repudiandae eaque voluptas impedit numquam.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img style={{height:'210px',borderRadius:'100px',padding:'10px'}} variant="top" src="https://cdn.pixabay.com/photo/2017/11/06/15/49/baby-2923997_640.jpg" />
      <Card.Body>
        <Card.Title style={{color:'#00b0ff'}}>Child Care</Card.Title>
        <Card.Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero quod error reprehenderit iste laboriosam vel repudiandae eaque voluptas impedit numquam.
        </Card.Text>
      </Card.Body>
    </Card>
        </div>


    </Layout>
  )
}

export default Service