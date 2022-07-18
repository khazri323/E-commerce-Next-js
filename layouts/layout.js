import React from 'react'
import Head from 'next/head'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'


const layout = ({children}) => {
  return (
    <div>

      <Head>
        <title>Ecommerce</title>
        <meta name="description" content="Site E-commerce" />
        <link rel="icon" href="/logo_ecommerce.png" />
      </Head>

  
       
        <NavBar/>
           {children}
        <Footer/>
      
    </div>
  )
}

export default layout
