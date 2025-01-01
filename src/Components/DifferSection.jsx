import React from 'react'
import "./DifferSection.css"

const DifferSection = () => {
  return (
    <section className='differ_section'>
        <div className='py-14 px-8 sm:px-16 md:px-10 lg:px-16 w-full'>
            <div className=''>
                <h2 className='text-2xl xs:text-text-40 text-center text-red-600 font-semibold border-b pb-8 mb-6'>WHAT MAKE US DIFFERENT</h2>
                <h3 className='text-xl xs:text-text-28 font-semibold mb-4'>Customer Service</h3>
                <p className='text-sm xs:text-base text-secondary-b mb-4'>When we founded the company we were determined to reintroduce honesty and honor into the commercial construction industry. Later, these core values are more important than ever. Whether we're building a new office complex or replacing a door, we will make every effort to meet or exceed your expectations because we want to be your number one source for construction services for years to come.</p>
                <h3 className='text-xl xs:text-text-28 font-semibold mb-4'>Quality</h3>
                <p className='text-sm xs:text-base text-secondary-b mb-4'>At DMA, we believe that quality is the result of careful planning and execution. By prequalifying and continually evaluating the work of our, employee, vendors and subcontractors, we ensure exceptional quality of our work and services.</p>
                <h3 className='text-xl xs:text-text-28 font-semibold mb-4'>Communication</h3>
                <p className='text-sm xs:text-base text-secondary-b mb-4'>By employing the latest proven office technology, combined with M/s DMA workflow methods and state-of-the-art communication tools, M/s DMA is never out of reach. Our staff of experts can be reached 24-hours a day, 7days a week.</p>
                <h3 className='text-xl xs:text-text-28 font-semibold mb-4'>Timelines</h3>
                <p className='text-sm xs:text-base text-secondary-b'>Realizing time is money; we understand the importance of having our projects completed on time. By investing in state-of the-art communication and scheduling tools, we continually monitor and track the status of our projects to ensure even the tightest deadlines are met.</p>
            </div>
        </div>
    </section>
  )
}

export default DifferSection
