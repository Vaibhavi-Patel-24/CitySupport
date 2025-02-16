import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner_1 from "../images/banner_1.webp";
import banner_2 from "../images/banner_2.webp";
import banner_3 from "../images/banner_3.webp";
import banner_4 from "../images/banner_4.webp";
import banner_5 from "../images/banner_5.jpg";
import banner_6 from "../images/banner_6.jpg";

export default function BusinessCarousel() {
  const [bannerHeight, setBannerHeight] = useState("80vh");

  useEffect(() => {
    const handleResize = () => {
      setBannerHeight(window.innerWidth <= 600 ? "50vh" : "80vh");
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const images = [banner_1, banner_2, banner_3, banner_4, banner_5, banner_6];

  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div style={{ height: bannerHeight, overflow: "hidden" }}>
      <Slider {...settings}>
        {images.map((imgSrc, index) => (
          <div key={index}>
            <img
              src={imgSrc}
              alt={`Slide ${index}`}
              style={{
                width: "100%",
                height: bannerHeight, 
                objectFit: "cover",
                borderRadius: "4px",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
