import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const places = [
  {
    id: 1,
    name: "Sidi Saiyyed Mosque",
    image:
      "https://img.atlasobscura.com/OVTOoyacO3oMfNBabCtVKDxOe7cCsWqy5IE4eL3vraU/rs:fill:780:520:1/g:ce/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL3BsYWNl/X2ltYWdlcy9lYzc3/ZTAyNi1mOWVkLTQ2/ZmEtOGM1NC1hYjRj/MTRiZGEyZWM1OTUy/NzdmMmQzNmFhMmJj/MjVfTW9zcXVlX29m/X1NpZGlfU2F5ZWRf/SmFhbGkuanBn.jpg",
  },
  {
    id: 2,
    name: "Rann Of Kutch",
    image:
      "https://www.trawell.in/admin/images/upload/359804259Great_Rann_of_Kutch_Main.jpg",
  },
  {
    id: 3,
    name: "Sun Temple",
    image:
      "https://www.gujarattourism.com/content/dam/gujrattourism/images/heritage-sites/sun-temple/gallery/Sun%20Temple19.jpg",
  },
];

const PopularPlaces = () => {
  const [open, setOpen] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleOpen = (place) => {
    setSelectedPlace(place);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPlace(null);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
        Popular Places
      </Typography>

      <Grid container spacing={4}>
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
                onClick={() => handleOpen(place)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 2,
                  p: 2,
                  borderRadius: 2,
                  boxShadow: 3,
                  transition: "transform 0.3s",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <img
                  src={place.image}
                  alt={place.name}
                  style={{
                    width: 80,
                    height: 80,
                    objectFit: "cover",
                    borderRadius: 8,
                    marginRight: 16,
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

      {/* Popup Dialog */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between" }}>
          {selectedPlace?.name}
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {selectedPlace && (
            <Box
              component="img"
              src={selectedPlace.image}
              alt={selectedPlace.name}
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: 2,
                mt: 1,
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default PopularPlaces;
// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Grid,
//   Typography,
//   Card,
//   CardContent,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogContentText,
//   IconButton,
// } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import { API } from "../services/api"; // Your backend API service

// const PopularPlaces = () => {
//   const [places, setPlaces] = useState([]);
//   const [selectedPlace, setSelectedPlace] = useState(null);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const fetchPlaces = async () => {
//       try {
//         const response = await API.getPopularPlaces(); // Adjust API method name if needed
//         setPlaces(response.data?.data || []);
//       } catch (error) {
//         console.error("Failed to fetch popular places:", error);
//       }
//     };
//     fetchPlaces();
//   }, []);

//   const handleCardClick = (place) => {
//     setSelectedPlace(place);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setSelectedPlace(null);
//   };

//   return (
//     <Box sx={{ p: 4, maxWidth: "1200px", marginX: "auto" }}>
//       <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
//         Popular Places
//       </Typography>
//       <Grid container spacing={4}>
//         {/* Left side: Places list */}
//         <Grid item xs={12} sm={4}>
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               gap: 2,
//               maxHeight: 400,
//               overflowY: "auto",
//             }}
//           >
//             {places.map((place) => (
//               <Card
//                 key={place._id || place.id}
//                 onClick={() => handleCardClick(place)}
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   padding: 1,
//                   cursor: "pointer",
//                   boxShadow: 2,
//                   borderRadius: 2,
//                   transition: "transform 0.3s",
//                   "&:hover": {
//                     transform: "scale(1.05)",
//                     boxShadow: 4,
//                   },
//                 }}
//               >
//                 <Box
//                   component="img"
//                   src={place.imageURL || place.image}
//                   alt={place.title || place.name}
//                   sx={{
//                     width: 80,
//                     height: 80,
//                     objectFit: "cover",
//                     borderRadius: 1,
//                     mr: 2,
//                   }}
//                 />
//                 <CardContent sx={{ p: 0 }}>
//                   <Typography variant="body1" fontWeight="bold">
//                     {place.title || place.name}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             ))}
//           </Box>
//         </Grid>

//         {/* Right side: Static YouTube video */}
//         <Grid item xs={12} sm={8}>
//           <Box
//             sx={{
//               width: "100%",
//               height: 400,
//               borderRadius: 2,
//               overflow: "hidden",
//               boxShadow: 3,
//             }}
//           >
//             <iframe
//               width="100%"
//               height="100%"
//               src="https://www.youtube.com/embed/k3OolA45orE"
//               title="Popular Place Video"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//               style={{ aspectRatio: "16/9" }}
//             />
//           </Box>
//         </Grid>
//       </Grid>

//       {/* Dialog for place details */}
//       <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
//         <DialogTitle
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           {selectedPlace?.title || selectedPlace?.name}
//           <IconButton onClick={handleClose}>
//             <CloseIcon />
//           </IconButton>
//         </DialogTitle>
//         <DialogContent>
//           {selectedPlace?.imageURL || selectedPlace?.image ? (
//             <Box
//               sx={{
//                 width: "100%",
//                 display: "flex",
//                 justifyContent: "center",
//                 mb: 2,
//               }}
//             >
//               <img
//                 src={selectedPlace.imageURL || selectedPlace.image}
//                 alt={selectedPlace.title || selectedPlace.name}
//                 style={{
//                   maxWidth: "100%",
//                   maxHeight: 250,
//                   objectFit: "contain",
//                   borderRadius: 8,
//                 }}
//               />
//             </Box>
//           ) : null}
//           <DialogContentText>
//             {selectedPlace?.description || "No description available."}
//           </DialogContentText>
//         </DialogContent>
//       </Dialog>
//     </Box>
//   );
// };

// export default PopularPlaces;
