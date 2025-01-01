import React from 'react'
import "./MissionSection.css"

const MissonSection = () => {
  return (
    <section className='mission_section'>
        <div className='py-14 px-8 sm:px-16 md:px-10 lg:px-16 w-full'>
            <div className='text-tertiary md:pe-10'>
                <h2 className='text-2xl xs:text-text-40 font-semibold mb-6 text-center'>OUR MISSION</h2>
                <ul className='mission_list'>
                    <li className='text-sm xs:text-base relative ps-6 pb-2'>To provide quality & creative work through recruitment, training and system support</li>
                    <li className='text-sm xs:text-base relative ps-6 pb-2'>To foster a corporate culture where our employees have a safe, respectful and rewarding work environment.</li>
                    <li className='text-sm xs:text-base relative ps-6'>To seek business opportunities that optimize our multi-disciplinary capabilities.</li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default MissonSection
