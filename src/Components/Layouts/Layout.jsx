import React from 'react'
import Header from './Header'
import Footer from './Footer'
// import Layout from "./"

const Layout = ({children}) => {
  return (
    <>
        <Header/>
            <div>{children}</div>
        <Footer/>
    </>
  )
}

export default Layout
