import React from "react";

import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import HomeMarquee from "../components/HomeMarquee";
import EventsSection from "../components/Events";
import MustVisit from "../components/MustVisit";


export default function Home(){
    return(
       <div>
             <Navbar/>
             <HomeMarquee/>
             <Banner/>
             <EventsSection/>
             <MustVisit/>
             
       </div>
    )
}