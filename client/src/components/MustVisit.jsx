import React from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";

const places = [
  { 
    id: 1, 
    name: "Rani Ki Vaav", 
    description: "Rani Ki Vaav is an intricately designed stepwell located in Patan, Gujarat, India. It was built in the 11th century as a memorial for King Bhimdev I. The stepwell is renowned for its elaborate architecture and carvings.", 
    image: "https://cdn.s3waas.gov.in/s3f340f1b1f65b6df5b5e3f94d95b11daf/uploads/bfi_thumb/2018041932-olwdlixnxaqlbnj190nmidfwi7mt6yjpjprpevfvyi.jpg" 
  },
  { 
    id: 2, 
    name: "Kirti Toran", 
    description: "The Kirti Toran is a historic pair of 12th-century columns supporting an arch in Patan, Gujarat. These columns stand about 40 feet tall and are made of red and yellow sandstone.", 
    image: "https://www.gujarattourism.com/content/dam/gujrattourism/images/heritage-sites/kirti-toran/gallery/Kirti%20Toran3.jpg" 
  },
  { 
    id: 3, 
    name: "Statue of Unity", 
    description: "The Statue of Unity, standing 182 meters tall, is the world’s tallest statue. It is located near Kevadia, Gujarat, and was dedicated to Sardar Vallabhbhai Patel.", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_iEARf-Fxz9VsoxKKB6pYUGIJevtoZMMwlQ&s" 
  },
  { 
    id: 4, 
    name: "Adalaj Vaav", 
    description: "Adalaj Vaav, also known as Rudabai Stepwell, is a stunning stepwell located near Gandhinagar, Gujarat. It was built in 1498 by Queen Rudabai in memory of her husband, Rana Veer Singh.", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Adalaj_ki_Vav_Gujarat_240A1370_72.jpg/800px-Adalaj_ki_Vav_Gujarat_240A1370_72.jpg" 
  }
];

const MustVisit = () => {
  return (
    <Box 
      sx={{ 
        marginX: { xs: "auto", md: "120px" }, 
        maxWidth: "1200px"
      }}
    >
      <Box sx={{ p: 4 }}>
        <Typography variant="h6" sx={{ color: "#FF6600", fontWeight: "bold", textAlign: "left", mb: 2 }}>
          ~ Must Visit
        </Typography>

        <Grid container spacing={3}>
          {places.map((place) => (
            <Grid item xs={12} sm={6} key={place.id}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" }, // Stack image and text on small screens
                  alignItems: "center",
                  padding: 1,
                  boxShadow: 2,
                  cursor: "pointer",
                  transition: "0.3s ease",
                  "&:hover": { boxShadow: 4 },
                }}
              >
                {/* Updated Image Box */}
                <Box sx={{ 
                  width: { xs: "100%", sm: 100 }, 
                  height: { xs: 180, sm: 100 }, 
                  flexShrink: 0, 
                  overflow: "hidden", 
                  borderRadius: 2 
                }}>
                  <img 
                    src={place.image} 
                    alt={place.name} 
                    style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                  />
                </Box>

                {/* Text Content */}
                <CardContent sx={{ flex: 1, textAlign: { xs: "center", sm: "left" } }}>
                  <Typography variant="h6" fontWeight="bold">
                    {place.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ 
                    display: "-webkit-box", 
                    WebkitBoxOrient: "vertical", 
                    WebkitLineClamp: 3, 
                    overflow: "hidden" 
                  }}>
                    {place.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default MustVisit;
