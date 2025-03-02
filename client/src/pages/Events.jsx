import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GlobalBreadcrumbs from '../components/GlobalBreadcrumbs'

const Events = () => {
  return (
    <div className="page-container">
        <Navbar/>
        <GlobalBreadcrumbs/>
        <div className="content">
        <div>this is Events</div>
        </div>
        <Footer/>
    </div>
  )
}

export default Events
