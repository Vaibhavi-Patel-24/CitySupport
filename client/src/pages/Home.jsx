import React from "react";

import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import HomeMarquee from "../components/HomeMarquee";
import EventsSection from "../components/Events";
import MustVisit from "../components/MustVisit";
import Footer from "../components/Footer";


export default function Home(){
    return(
       <div>
             <HomeMarquee/>
             <Banner/>
             <EventsSection/>
             <MustVisit/>             
       </div>
    )
}