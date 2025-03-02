import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactMain from '../components/ContactMain'
import FAQSection from '../components/FAQs'
const Help = () => {
  return (
    <div className="page-container">
        <Navbar/>
        <div className="content">
        <ContactMain/>
        <FAQSection/>
        </div>
        <Footer/>
    </div>
  )
}

export default Help
