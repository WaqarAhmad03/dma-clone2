import React from 'react'
import CEO from "../assets/images/CEO.webp"

const MessageSection = () => {
  return (
    <section>
        <div className='py-10 px-8 sm:px-16 md:px-10 lg:px-16'>
            <div className='grid md:grid-cols-[3fr_2fr]'>
                <div className='text-primary-b md:pe-10'>
                    <h2 className='text-2xl xs:text-5xl text-secondary-b font-semibold mb-6'>CEO's Message</h2>
                    <h4 className='text-lg xs:text-xl font-bold mb-2'>Welcome to Design Man Associates!</h4>
                    <p className='mb-3 text-sm xs:text-base leading-tight'>At Design Man Associates, we believe that every project tells a story – a story of innovation, collaboration, and excellence in construction and design. As the CEO, I am proud to lead a team of dedicated professionals who are committed to turning your vision into reality.</p>
                    <p className='mb-3 text-sm xs:text-base leading-tight'>From concept to completion, we prioritize quality craftsmanship, attention to detail, and client satisfaction. Whether it’s a commercial development, residential renovation, or architectural design project, our experienced team leverages industry-leading practices and cutting-edge technology to deliver exceptional results.</p>
                    <p className='mb-3 text-sm xs:text-base leading-tight'>We understand that each project is unique, and we approach every endeavor with creativity, integrity, and a relentless pursuit of excellence. Our passion for design and construction drives us to push boundaries, exceed expectations, and consistently deliver superior outcomes.</p>
                    <p className='mb-3 text-sm xs:text-base leading-tight'>As we continue to grow and evolve, our commitment to innovation, sustainability, and client-focused solutions remains unwavering. We take pride in our reputation for excellence and our track record of delivering projects on time and within budget.</p>
                    <p className='mb-3 text-sm xs:text-base leading-tight'>Thank you for considering Design Man Associates for your construction and design needs. We look forward to the opportunity to partner with you and bring your vision to life.</p>
                    <p className='text-xl mb-3'>Sincerely,</p>
                    <p className='text-lg xs:text-xl font-bold mb-3'>Fahad Ijaz</p>
                    <p className='text-lg xs:text-xl '>CEO, Design Man Associates</p>
                </div>
                <div className=''>
                    <img src={CEO} alt="ceo" className='rounded-md sm:w-3/4 md:w-full sticky top-0'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MessageSection
