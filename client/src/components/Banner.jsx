import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import banner_1 from "../images/banner_1.webp"
import banner_2 from "../images/banner_2.webp"
import banner_3 from "../images/banner_3.webp"
import banner_4 from "../images/banner_4.webp"
import banner_5 from "../images/banner_5.jpg"
import banner_6 from "../images/banner_6.jpg"

const images = [banner_1,banner_2,banner_3,banner_4,banner_5,banner_6];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md")); // Check if screen is md or larger

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextImage();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isPaused]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center" position="relative">

      {/* Image Container */}
      <Box position="relative" width="100%" height="70vh">
        <Box
          component="img"
          src={images[currentIndex]}
          alt="carousel"
          sx={{ width: "100%", height: "100%", borderRadius: 2, objectFit: "cover" }}
        />

        {/* Fixed Image Name Box */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "8vh",
            bgcolor: "rgba(0, 0, 0, 0.6)",
            color: "white",
            px: 2,
            py: 1,
            borderRadius: "0 0 8px 8px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: 25, textAlign: "center" }}>Image Name</Typography>
          <Typography sx={{ fontSize: 15, textAlign: "center" }}>Location</Typography>
        </Box>
      </Box>

      {/* Pause Button (Only on md screens and larger) */}
      {isMd && (
      <Box>

        <Button onClick={prevImage} sx={{ position: "absolute",bottom:2 , left: 10, color: "white", p: 2.5, zIndex: 2 }}>
        <ArrowBackIosNewIcon sx={{ fontSize: 40, fontWeight: "bold", strokeWidth: 20 }} />
        </Button>

        <Button
          onClick={() => setIsPaused(!isPaused)}
          sx={{
            position: "absolute",
            bottom: 2,
            left: 90,
            bgcolor: "rgba(0, 0, 0, 0)",
            color: "white",
            p: 2,
            borderRadius: "50%",
            zIndex: 2,
          }}
        >
          {isPaused ? <PlayArrowIcon sx={{ fontSize: 40 }} /> : <PauseIcon sx={{ fontSize: 40 }} />}
        </Button>

        <Button onClick={nextImage} sx={{ position: "absolute",bottom:2, left: 170, color: "white", p: 2.5, zIndex: 2 }}>
        <ArrowForwardIosIcon sx={{ fontSize: 40, fontWeight: "bold", strokeWidth: 20 }} />
        </Button>

      </Box>
      )}

      {!isMd &&(
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
  );
};

export default Banner;
