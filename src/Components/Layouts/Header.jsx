import React, { useState } from 'react'
import Layout from './Layout'
import { Link } from 'react-router-dom'
import headLogo from "../../assets/images/logo1.webp"
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleDown = () =>{
    
  }


  return (
    <>
      <nav className='navbar py-3 shadow sticky top-0 z-10 bg-white px-8 sm:px-16 md:px-10 lg:px-24 w-full'>
        <div className='flex justify-between lg:justify-normal items-center gap-20'>
          <div>
            <Link to="/"><img src={headLogo} className='w-10' alt="" /></Link>
          </div>
          <div className='hidden lg:flex gap-8 text-sm font-semibold'>
            <div><Link to="/" className='relative pb-0.5 before:absolute before:w-0 before:h-full before:border-b before:border-black hover:before:w-full hover:before:transition-all before:transition-all'>HOME</Link></div>
            <div><Link to="/" className='relative pb-0.5 before:absolute before:w-0 before:h-full before:border-b before:border-black hover:before:w-full hover:before:transition-all before:transition-all'>PROJECTS</Link></div>
            <div><Link to="/" className='relative pb-0.5 before:absolute before:w-0 before:h-full before:border-b before:border-black hover:before:w-full hover:before:transition-all before:transition-all'>SERVICES</Link></div>
            <div><Link to="/" className='relative pb-0.5 before:absolute before:w-0 before:h-full before:border-b before:border-black hover:before:w-full hover:before:transition-all before:transition-all'>TEAMS</Link></div>
            <div><Link to="/" className='relative pb-0.5 before:absolute before:w-0 before:h-full before:border-b before:border-black hover:before:w-full hover:before:transition-all before:transition-all'>OUR CLIENTELE</Link></div>
            <div><Link to="/" className='relative pb-0.5 before:absolute before:w-0 before:h-full before:border-b before:border-black hover:before:w-full hover:before:transition-all before:transition-all'>CONTACT US</Link></div>
            <div><Link to="/" className='relative pb-0.5 before:absolute before:w-0 before:h-full before:border-b before:border-black hover:before:w-full hover:before:transition-all before:transition-all'>DMA PROFILE</Link></div>
          </div>
          <div className='block lg:hidden'>
            <MenuOpenIcon fontSize='medium'/>
          </div>
        </div>
      </nav>
      <div className='bg-black'>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
      </div>
    </>
  )
}

export default Header
