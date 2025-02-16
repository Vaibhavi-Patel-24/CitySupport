import React from "react";

import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import HomeMarquee from "../components/HomeMarquee";
import EventsSection from "../components/Events";
import MustVisit from "../components/MustVisit";
<<<<<<< Updated upstream
import Footer from "../components/Footer";
=======
import BusinessCarousel from "../components/BusinessCarouisel";
>>>>>>> Stashed changes


export default function Home(){
    return(
       <div>
             <HomeMarquee/>
             <Banner/>
<<<<<<< Updated upstream
             <EventsSection/>
             <MustVisit/>             
=======
             <MustVisit/>
             <EventsSection/>
             <BusinessCarousel/>
>>>>>>> Stashed changes
       </div>
    )
}