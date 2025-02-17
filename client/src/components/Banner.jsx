import React, { useState} from "react";
import { useEffect } from "react";
import { Box, Button} from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import banner_1 from "../images/banner_1.webp"
import banner_2 from "../images/banner_2.webp"
import banner_3 from "../images/banner_3.webp"
import banner_4 from "../images/banner_4.webp"
import banner_5 from "../images/banner_5.jpg"
import banner_6 from "../images/banner_6.jpg"

const images = [banner_1,banner_2,banner_3,banner_4,banner_5,banner_6];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showArrows, setShowArrows] = useState(false);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
    <Box display="flex" alignItems="center" justifyContent="center" position="relative" sx={{ marginTop: "2px" }} onMouseEnter={() => setShowArrows(true)}
    onMouseLeave={() => setShowArrows(false)}>

      {/* Image Container */}
      <Box position="relative" width="100%" height="70vh" >
        <Box
          component="img"
          src={images[currentIndex]}
          alt="carousel"
          sx={{ width: "100%", height: "100%", borderRadius: 0.5, objectFit: "cover" }}
        />
      </Box>

      {showArrows && ( 
      <Box>
        <Button onClick={prevImage} sx={{ position: "absolute", left: 10, color: "white", p: 2.5, zIndex: 2 }}>
        <ArrowBackIosNewIcon sx={{ fontSize: 40, fontWeight: "bold", strokeWidth: 20 }} />
        </Button>
        <Button onClick={nextImage} sx={{ position: "absolute", right: 10, color: "white", p: 2.5, zIndex: 2 }}>
        <ArrowForwardIosIcon sx={{ fontSize: 40, fontWeight: "bold", strokeWidth: 20 }} />
        </Button>
      </Box>
      )}
    </Box>
    </>
  );
};

export default Banner;
