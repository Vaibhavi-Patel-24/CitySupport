import React from 'react'
    import Navbar from '../components/Navbar'
    import Footer from '../components/Footer'
    import DistrictGlance from '../components/DistrictGlance'
    import GlobalBreadcrumbs from '../components/GlobalBreadcrumbs'

function Map() {
  return (
    <div className="page-container">
        <Navbar/>
        <GlobalBreadcrumbs/>
        <div className="content">
        <div>this is map</div>
        <DistrictGlance/>
        </div>
        <Footer/>
    </div>
  )
}

export default Map