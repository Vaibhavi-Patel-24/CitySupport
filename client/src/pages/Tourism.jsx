import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GlobalBreadcrumbs from '../components/GlobalBreadcrumbs'

const Tourism = () => {
  return (
<div className="page-container">
            <Navbar/>
            <GlobalBreadcrumbs/>
            <div className="content">
        <div>this is social</div>
        </div>
        <Footer/>
    </div>
  )
}

export default Tourism
