import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { API } from "../services/api";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showArrows, setShowArrows] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchBanners();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  const fetchBanners = async () => {
    try {
      const response = await API.getBanner();
      const data = response.data?.data || []; // adjust this based on your API shape
      const banners = data.map((item) => ({
        imageURL: item.imageURL,
        altText: item.altText || "banner",
        id: item._id,
      }));
      setImages(banners);
    } catch (error) {
      console.error("Failed to fetch banners:", error);
    }
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  if (images.length === 0) return null;

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      sx={{ marginTop: "2px" }}
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
    >
      {/* Image Container */}
      <Box position="relative" width="100%" height="70vh">
        <Box
          component="img"
          src={images[currentIndex].imageURL}
          alt={images[currentIndex].altText}
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: 0.5,
            objectFit: "cover",
          }}
        />
      </Box>

      {showArrows && (
        <Box>
          <Button
            onClick={prevImage}
            sx={{
              position: "absolute",
              left: 10,
              color: "white",
              p: 2.5,
              zIndex: 2,
            }}
          >
            <ArrowBackIosNewIcon sx={{ fontSize: 40 }} />
          </Button>
          <Button
            onClick={nextImage}
            sx={{
              position: "absolute",
              right: 10,
              color: "white",
              p: 2.5,
              zIndex: 2,
            }}
          >
            <ArrowForwardIosIcon sx={{ fontSize: 40 }} />
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Banner;
