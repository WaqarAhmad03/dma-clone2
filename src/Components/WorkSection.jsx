import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { Link } from 'react-router-dom';
import "./WorkSection.css"

const WorkSection = () => {
  return (
    <section className='work_section'>
        <div className='py-14 px-8 sm:px-16 md:px-10 lg:px-16 w-full'>
            <div className=' text-center text-primary-b'>
                <h2 className='text-2xl xs:text-text-40 inline-block bg-tertiary px-1 py-2 font-thin mb-3'>Our Work</h2><br/>
                <p className='inline-block bg-tertiary'>Take a chunk of our work by visiting our social handles.</p>
                <div className='flex gap-4 justify-center mt-6'>
                    <Link to="/" className='hover:text-white transition-all'><FacebookRoundedIcon fontSize='large'/></Link> 
                    <Link to="/" className='hover:text-white transition-all'><YouTubeIcon fontSize='large'/></Link> 
                    <Link to="/" className='hover:text-white transition-all'><InstagramIcon fontSize='large'/></Link> 
                </div>
            </div>
        </div>
    </section>
  )
}

export default WorkSection
