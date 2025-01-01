import React from 'react'
import "./Footer.css"
import { useState } from 'react'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link } from 'react-router-dom';
import footerLogo from "../../assets/images/logo2.webp"
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

const Footer = () => {

  const [animate , setAnimate] = useState("OFFICE")
  const [animate2 , setAnimate2] = useState("LINKS")

  return (
    <section className='footer'>
      <div className='pb-6 px-8 sm:px-16 md:px-10 lg:px-16 w-full'>
        <div className='border-b border-gray-500 mb-4 pt-6'>
          <div className='flex flex-row flex-wrap grid-cols-1 sm:grid-cols-[2fr_2fr_1fr] md:grid-cols-3'>
            <div className='flex justify-center basis-full sm:basis-1/2 md:basis-1/3 py-4 border-b border-gray-500 md:border-0'>
              <div className='text-tertiary text-center md:text-start '>
                <h6 className='text-animate text-base mb-3' style={{"--text-animated":`"${animate}"`}}>OFFICE</h6>
                <p className=' text-xs mb-3'>P # 78, Imperial Garden Commercial Area <br/> Paragon City, Lahore</p>
                <div className='flex gap-1 items-center mb-2 justify-center md:justify-start'>
                  <EmailIcon fontSize='small'/>
                  <p className='text-xs'>designmanassociates@gmail.com</p>
                </div>
                <div className='flex gap-1 items-center justify-center md:justify-start'>
                  <PhoneIcon fontSize='small'/>
                  <p className='text-xs'>+1 (516)-3098017</p>
                </div>
              </div>
            </div>
            
            <div className='flex justify-center basis-full sm:basis-1/2 md:basis-1/3 py-4 border-b border-gray-500 md:border-0'>
              <div className='text-tertiary text-center md:text-start '>
                <h6 className='text-animate text-base mb-3' style={{"--text-animated":`"${animate2}"`}}>LINKS</h6>
                <ul className='text-xs'>
                  <li className='mb-1'><Link to="/">HOME</Link></li>
                  <li className='mb-1'><Link to="/">PROJECTS</Link></li>
                  <li className='mb-1'><Link to="/">ABOUT</Link></li>
                  <li className='mb-1'><Link to="/">TEAM</Link></li>
                </ul>
              </div>
            </div>

            <div className='flex flex-col items-center text-center basis-full md:basis-1/3 py-4'>
              <img src={footerLogo} className='w-12 mb-3' alt="" />
              <p className='text-xs text-black font-semibold'>Architects | Civil, Structural & MEP Consultants |<br/> Contractors</p>
              <div className='flex gap-4 justify-center mt-3'>
                  <Link to="/" className='hover:text-white transition-all'><FacebookRoundedIcon fontSize='large'/></Link> 
                  <Link to="/" className='hover:text-white transition-all'><YouTubeIcon fontSize='large'/></Link> 
                  <Link to="/" className='hover:text-white transition-all'><InstagramIcon fontSize='large'/></Link> 
              </div>
            </div>

          </div>
        </div>
        <div className=''>
          <p className='text-xs text-center text-tertiary'>Design Man Associates (Pvt) Ltd. © 2024 All Rights Reserved</p>
        </div>
      </div>
    </section>
  )
}

export default Footer
