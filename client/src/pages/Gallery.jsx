import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GlobalBreadcrumbs from '../components/GlobalBreadcrumbs'
const Gallery = () => {
  return (
    <div className="page-container">
        <Navbar/>
        <GlobalBreadcrumbs/>
        <div className="content">
        <div>this is gallery</div>
        </div>
        <Footer/>
    </div>
  )
}

export default Gallery
