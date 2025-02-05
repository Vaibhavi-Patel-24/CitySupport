import React from "react";

import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import HomeMarquee from "../components/HomeMarquee";

export default function Home(){
    return(
       <div>
             <Navbar/>
             <HomeMarquee/>
             <Banner/>
       </div>
    )
}