import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

const places = [
  {
    id: 1,
    name: "Sidi Saiyyed Mosque",
    image: "https://img.atlasobscura.com/OVTOoyacO3oMfNBabCtVKDxOe7cCsWqy5IE4eL3vraU/rs:fill:780:520:1/g:ce/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL3BsYWNl/X2ltYWdlcy9lYzc3/ZTAyNi1mOWVkLTQ2/ZmEtOGM1NC1hYjRj/MTRiZGEyZWM1OTUy/NzdmMmQzNmFhMmJj/MjVfTW9zcXVlX29m/X1NpZGlfU2F5ZWRf/SmFhbGkuanBn.jpg",
  },
  {
    id: 2,
    name: "Rudra Mahalaya",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs3itipLoDJ422UK_E6a2PC5suhjlqsrev3A&s",
  },
  {
    id: 3,
    name: "Sun Temple",
    image: "https://www.gujarattourism.com/content/dam/gujrattourism/images/heritage-sites/sun-temple/gallery/Sun%20Temple19.jpg",
  },
];

const PopularPlaces = () => {
  return (
    <Box sx={{ p: 4 }}>
      {}
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
        Popular Places
      </Typography>

      <Grid container spacing={4}>
        {}
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              justifyContent: "space-between", 
            }}
          >
            {places.map((place) => (
              <Card
                key={place.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 2,
                  p: 2,
                  borderRadius: 2,
                  boxShadow: 3,
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                  flex: 1, // Ensures cards fill the available space
                }}
              >
                <Box
                  component="img"
                  src={place.image}
                  alt={place.name}
                  sx={{
                    width: 80,
                    height: 80,
                    objectFit: "cover",
                    borderRadius: 1,
                    mr: 2,
                  }}
                />
                <CardContent sx={{ p: 0 }}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    {place.name}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Grid>

        { }
        <Grid item xs={12} sm={8}>
          <Box
            sx={{
              width: "100%",
              height: "370px", 
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: 3,
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/k3OolA45orE"
              title="Popular Place Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ aspectRatio: "16/9" }}
            ></iframe>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PopularPlaces;