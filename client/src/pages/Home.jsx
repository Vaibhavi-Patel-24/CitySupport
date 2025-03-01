import React from "react";
import Banner from "../components/Banner";
import HomeMarquee from "../components/HomeMarquee";
import EventsSection from "../components/Events";
import MustVisit from "../components/MustVisit";
import BusinessCarousel from "../components/BusinessCarouisel";
import HomeLocalBusinessCorner from "../components/HomeLocalBusinessCorner";
import PopularPlaces from "../components/PopularPlaces";
import DistrictGlance from '../components/DistrictGlance';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'



export default function Home(){
    return(
        <div className="page-container">
            <Navbar/>
            <div className="content">
             <HomeMarquee/>
             <Banner/>
             <MustVisit/>
             <EventsSection/>
             <BusinessCarousel/>
             <HomeLocalBusinessCorner/>
             <PopularPlaces/>
             <DistrictGlance />
             </div>
            <Footer/>
       </div>
    )
}