import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GlobalBreadcrumbs from '../components/GlobalBreadcrumbs'
import School from './School'
import { Link } from 'react-router-dom'
const Utility = () => {
  return (
<div className="page-container">
        <Navbar/>
        <GlobalBreadcrumbs/>
        <div className="content">
        <div>this is utility</div>
        <Link to={'/utility/school'}>School</Link>
        </div>
        <Footer/>
    </div>
  )
}

export default Utility
