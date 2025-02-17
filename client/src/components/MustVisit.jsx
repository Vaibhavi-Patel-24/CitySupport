import React, { useState } from "react";
import { Box, Grid, Typography, Card, CardContent, Collapse } from "@mui/material";

const places = [
  { 
    id: 1, 
    name: "Rani Ki Vaav", 
    description: "Rani Ki Vaav is an intricately designed stepwell located in Patan, Gujarat, India. It was built in the 11th century as a memorial for King Bhimdev I. The stepwell is renowned for its elaborate architecture and carvings. It was constructed along the banks of the Saraswati River. Rani Ki Vaav was added to the UNESCO World Heritage list in 2014. It reflects the advanced engineering techniques of the Solanki dynasty.", 
    image: "https://cdn.s3waas.gov.in/s3f340f1b1f65b6df5b5e3f94d95b11daf/uploads/bfi_thumb/2018041932-olwdlixnxaqlbnj190nmidfwi7mt6yjpjprpevfvyi.jpg" 
  },
  { 
    id: 2, 
    name: "Kirti Toran", 
    description: "The Kirti Toran is a historic pair of 12th-century columns supporting an arch in Patan, Gujarat. These columns stand about 40 feet tall and are made of red and yellow sandstone. They are located near the Sharmistha Talav, a historic water body. The design of the toran reflects the architectural grandeur of the Solanki period. It is one of the few surviving examples of such entrance gates in India. The carving style is similar to that found at the Rudra Mahalaya in Sidhpur.", 
    image: "https://www.gujarattourism.com/content/dam/gujrattourism/images/heritage-sites/kirti-toran/gallery/Kirti%20Toran3.jpg" 
  },
  { 
    id: 3, 
    name: "Statue of Unity", 
    description: "The Statue of Unity, standing 182 meters tall, is the world’s tallest statue. It is located near Kevadia, Gujarat, and was dedicated to Sardar Vallabhbhai Patel. Patel was India’s first Deputy Prime Minister and a key figure in the country’s independence movement. The statue symbolizes his efforts to unite the country after independence. The structure offers panoramic views of the surrounding Narmada Valley. It is an architectural marvel and a major tourist attraction in India.", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Statue_of_Unity.jpg/800px-Statue_of_Unity.jpg" 
  },
  { 
    id: 4, 
    name: "Adalaj Vaav", 
    description: "Adalaj Vaav, also known as Rudabai Stepwell, is a stunning stepwell located near Gandhinagar, Gujarat. It was built in 1498 by Queen Rudabai in memory of her husband, Rana Veer Singh. The stepwell features intricate carvings and inscriptions. It was designed to provide water in a region prone to water scarcity. The architecture includes several levels with beautifully crafted pillars and arches. Adalaj Vaav is an example of the advanced engineering of the era.", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Adalaj_ki_Vav_Gujarat_240A1370_72.jpg/800px-Adalaj_ki_Vav_Gujarat_240A1370_72.jpg" 
  }
];

const MustVisit = () => {
  const [expanded, setExpanded] = useState(null);

  const handleToggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h6" sx={{ color: "#FF6600", fontWeight: "bold", mb: 2 }}>
        ~ Must Visit
      </Typography>
      <Grid container spacing={3}>
        {places.map((place) => (
          <Grid item xs={12} sm={6} md={6} key={place.id}>
            <Card
              sx={{
                p: 2,
                boxShadow: 2,
                cursor: "pointer",
                transition: "0.3s ease",
                "&:hover": { boxShadow: 4 },
              }}
              onClick={() => handleToggleExpand(place.id)}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ p: 1 }}>
                  <img 
                    src={place.image} 
                    alt={place.name} 
                    style={{ width: 80, height: 80, objectFit: "cover", borderRadius: 8 }} 
                  />
                </Box>
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h6" fontWeight="bold">
                    {place.name}
                  </Typography>
                </CardContent>
              </Box>
              <Collapse in={expanded === place.id}>
                <Box sx={{ p: 2, backgroundColor: "#f5f5f5", borderRadius: "8px", mt: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    {place.description}
                  </Typography>
                </Box>
              </Collapse>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MustVisit;
