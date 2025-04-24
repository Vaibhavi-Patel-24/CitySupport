import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { API } from "../services/api.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BusinessCarousel() {
  const [bannerHeight, setBannerHeight] = useState("80vh");
  const [slides, setSlides] = useState([]);

  /* — fetch once — */
  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const res  = await API.getPamflate();
        // sort by order field (fallback to createdAt)
        const data = res.data.data.sort(
          (a, b) => (a.order ?? 0) - (b.order ?? 0)
        );
        setSlides(data);
      } catch (err) {
        console.error("Banner fetch failed", err);
      }
    };
    fetchSlides();
  }, []);

  /* — resize handler — */
  useEffect(() => {
    const handleResize = () =>
      setBannerHeight(window.innerWidth <= 600 ? "50vh" : "80vh");
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  /* — render — */
  return (
    <div style={{ height: bannerHeight, overflow: "hidden" }}>
      <Slider {...settings}>
        {slides.map(({ _id, imageURL, altText }) => (
          <div key={_id}>
            <img
              src={imageURL}
              alt={altText}
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
