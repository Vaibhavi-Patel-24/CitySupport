import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import GlobalBreadcrumbs from '../components/GlobalBreadcrumbs'


const LocalBusiness = () => {
  return (
    <div className="page-container">
                <Navbar/>
                <GlobalBreadcrumbs/>
                <div className="content">
                LocalBusiness
                </div>
                <Footer/>
    </div>
  )
}

export default LocalBusiness
