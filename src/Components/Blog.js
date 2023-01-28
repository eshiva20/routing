import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';

const Blog = () => {
  const params=useParams()
  return (
    <div>
      <Navbar/>
      <h1>Blog Page {params.name} {params.id}</h1>
    </div>
  )
}

export default Blog
