import React from 'react'
import Header from '../../Components/Layouts/Header'
import Footer from '../../Components/Layouts/Footer'
import Layout from '../../Components/Layouts/Layout'
import MessageSection from '../../Components/MessageSection'
import MissonSection from '../../Components/MissonSection'
import ClientSection from '../../Components/ClientSection'
import WorkSection from '../../Components/WorkSection'
import DifferSection from '../../Components/DifferSection'

const index = () => {
  return (
    <>
        <Layout>
        <MessageSection/>
        <MissonSection/>
        <ClientSection/>
        <WorkSection/>
        <DifferSection/>
        </Layout>
    </>
  )
}

export default index
