import React from 'react'
import { Link } from 'react-router-dom'
import Layout from './Layout'
import { FiChevronsRight } from 'react-icons/fi'
import BlogCard from './BlogCard'

const Blogs = () => {
    
    const blogData = [
        {
            id: 1,
            img: "https://cdn.pixabay.com/photo/2017/07/23/10/44/dentist-2530990_640.jpg",
            title: "This is the title of the article",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus id, quos quae voluptatum saepe sequi? Ad officiis ullam totam veniam.",
        },
        {
            id: 2,
            img: "https://cdn.pixabay.com/photo/2017/10/04/09/56/laboratory-2815641_640.jpg",
            title: "This is the title of the article",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus id, quos quae voluptatum saepe sequi? Ad officiis ullam totam veniam.",
        },
        {
            id: 3,
            img: "https://cdn.pixabay.com/photo/2021/11/20/03/35/doctor-6810776_640.png",
            title: "This is the title of the article",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus id, quos quae voluptatum saepe sequi? Ad officiis ullam totam veniam.",
        },
    ]



  return (
    <Layout className=' space-y-6'>
    <div className=' flex items-center justify-between'>
    <h1 style={{marginLeft:'20px'}} className='text-2xl text-neutral-700 font-semibold'>
        Our Blogs
    </h1>
    <Link style={{display:'flex',marginTop:'-40px',marginLeft:'1300px'}} to="/blogs" className='text-base text-blue-600 hover:text-blue-50 font-normal flex  items-center gap-x-2 ease-in-out duration-300'>
    View All
    <FiChevronsRight className='text-lg'/>
    </Link>
    </div>


    <div style={{display:'flex',height:'340px',marginLeft:'80px',justifyContent:'space-around',marginTop:'30px'}} className='grid md:grid-cols-4 grid-cols-1 gap-12'>
      {blogData.map((blog)=>(
        <BlogCard key={blog.id} {...blog} />
      ))}

    </div>
      



</Layout>

  )
}

export default Blogs