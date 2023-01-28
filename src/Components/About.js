import React from 'react'
import Navbar from './Navbar';
import { Link, Outlet } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <Navbar/>
      <h1>About Page</h1>
      
      <Link to='/about/profile'>About Profile</Link><br/>
      <Link to='/about/education'>About Education</Link><br/>
      <Link to='/about/experience'>About Experience</Link>
      <Outlet/>
    </div>
  )
}

export default About
