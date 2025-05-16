import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  IconButton,
  CircularProgress,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { API } from "../services/api";

const PopularPlaces = () => {
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPopularPlaces = async () => {
      try {
        setLoading(true);
        const response = await API.getPopularPlaces();
        
        // Transform data to match component expectations
        const transformedPlaces = response.data?.data?.map(place => ({
          ...place,
          name: place.title, // Map title to name
          image: place.image.startsWith('http') ? place.image : 
                 `${process.env.REACT_APP_API_URL}/${place.image}`
        })) || [];
        
        setPlaces(transformedPlaces);
      } catch (error) {
        console.error("Error fetching popular places:", error);
        setError("Failed to load popular places");
      } finally {
        setLoading(false);
      }
    };

    fetchPopularPlaces();
  }, []);

  const handleCardClick = (place) => {
    setSelectedPlace(place);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPlace(null);
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ marginX: { xs: "auto", md: "120px" }, maxWidth: "1200px" }}>
      <Box sx={{ p: 4 }}>
        <Typography
          variant="h6"
          sx={{ color: "#3f51b5", fontWeight: "bold", textAlign: "left", mb: 2 }}
        >
          ~ Popular Places
        </Typography>

        {/* YouTube Video */}
        <Box sx={{ mb: 4, display: "flex", justifyContent: "center" }}>
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/k3OolA45orE"
            title="Popular Places Video"
            frameBorder="0"
            allowFullScreen
            style={{ borderRadius: "10px", maxWidth: "1000px" }}
          />
        </Box>

        {/* Place Cards */}
        <Grid container spacing={3}>
          {places.length > 0 ? (
            places.map((place) => (
              <Grid item xs={12} sm={6} md={4} key={place._id}>
                <Card
                  onClick={() => handleCardClick(place)}
                  sx={{
                    height: "100%",
                    cursor: "pointer",
                    transition: "0.3s",
                    "&:hover": { boxShadow: 4 },
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: 200,
                      overflow: "hidden",
                      borderTopLeftRadius: 4,
                      borderTopRightRadius: 4,
                    }}
                  >
                    <img
                      src={place.image}
                      alt={place.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      onError={(e) => {
                        e.target.src = '/placeholder-image.jpg';
                      }}
                    />
                  </Box>

                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {place.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 2,
                        overflow: "hidden",
                      }}
                    >
                      {place.location || "No description available"}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography sx={{ p: 3 }}>No popular places found</Typography>
          )}
        </Grid>

        {/* Details Dialog */}
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
          <DialogTitle
            sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
          >
            {selectedPlace?.name}
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            {selectedPlace?.image && (
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <img
                  src={selectedPlace.image}
                  alt={selectedPlace.name}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "250px",
                    objectFit: "contain",
                    borderRadius: "8px",
                  }}
                  onError={(e) => {
                    e.target.src = '/placeholder-image.jpg';
                  }}
                />
              </Box>
            )}
            <DialogContentText>
              {selectedPlace?.location || "No additional information available"}
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </Box>
    </Box>
  );
};

export default PopularPlaces;