import React from 'react'
import { FiChevronsRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
const BlogCard = ({img,title,desc}) => {
  return (
    <div >
        <img style={{width:'400px',marginTop:'10px'}} src={img} alt="blog img" />
        <div>
            <div>
                <Link to="/blogs">
                {title}
                </Link>
                <p>{desc}</p>
            </div>
            {/* <button  style={{marginTop:'-200px',position:'absolute',marginLeft:'-100px',padding:'10px',borderRadius:'20px',marginTop:'10px',marginLeft:'100px',color:'white'}}  className="md:w-1/2 w-full px-6 md:py-5 py-3 text-lg text-neutral-50 font-medium rounded-xl bg-neutral-50/20 border-2 border-neutral-50/60 hover:bg-transparent hover:bg-neitral-50 hover:border-neutral-50 flex items-center justify-between ease-in-out duration-300 bg-info">
            Read More
            </button> */}
        </div>
    </div>
  )
}

export default BlogCard