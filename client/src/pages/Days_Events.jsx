// import React from 'react';
// import { experimentalStyled as styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import { Box, Typography } from '@mui/material';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
//   ...theme.applyStyles('dark', {
//     backgroundColor: '#1A2027',
//   }),
// }));
// const eventFilters = [
//   "Today",
//   "Tomorrow",
//   "This Weekend",
//   "This Week",
//   "Next Weekend",
//   "Next Week",
//   "This Month",
//   "Custom Date",
// ];

// const Days_Events = () => {
//   return (
//     <>
//        <Box>
//       <Typography sx={{ color: 'rgb(241,118,53)', fontWeight: "bold", fontSize: "22px", pl: { xs: 0, sm: 15 }, pb: 3,  textAlign: { xs: 'center', sm: 'left' } }}>
//         Events Day Wise
//       </Typography>

//     <Box sx={{ flexGrow: 1, pl: 5, pr: 5, pb: 5 }}> {/* Added left & right padding */}
//         <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>
//           {eventFilters.map((filter, index) => (
//             <Grid item xs={2} sm={4} md={4} key={index} sx={{ display: "flex", justifyContent: "center" }}>
//               <Item sx={{ 
//                 width: "100%", 
//                 backgroundColor: index % 2 === 0 ? "#f0f0f0" : "#e0e0e0", // Alternating background colors
//                 padding: "20px" // Adjust padding inside each block
//               }}>
//                 {filter}
//               </Item>
//             </Grid>
//           ))}
//         </Grid>
//     </Box>
//   </Box>
//     </>
//   )
// }

// export default Days_Events


// import React from 'react';
// import { experimentalStyled as styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import { Box, Typography } from '@mui/material';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// const eventFilters = [
//   "Today",
//   "Tomorrow",
//   "This Weekend",
//   "This Week",
//   "Next Weekend",
//   "Next Week",
//   "This Month",
//   "Custom Date",
// ];

// // Shades of orange, pink, and blue
// const colors = [
//   "#B39DDB", // lavender (deep lavender/light purple)
//   "#FF7043", // deep orange lighten 1 (reddish)
//   "#F48FB1", // pink lighten 3
//   "#FF8A65",   // lighter version of deep orange (replacing #FF7043)
//   "#EC407A", // pink lighten 1

//   "#64B5F6", // blue lighten 2
//   "#BA68C8", // purple lighten 2 (to replace yellowish)
//   "#42A5F5", // blue lighten 1
// ];

// const Days_Events = () => {
//   return (
//     <>
//       <Box>
//         <Typography sx={{ color: 'rgb(241,118,53)', fontWeight: "bold", fontSize: "22px", pl: { xs: 0, sm: 15 }, pb: 3,  textAlign: { xs: 'center', sm: 'left' } }}>
//           Events Day Wise
//         </Typography>

//         <Box sx={{ flexGrow: 1, pl: 5, pr: 5, pb: 5 }}>
//           <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>
//             {eventFilters.map((filter, index) => (
//               <Grid item xs={2} sm={4} md={4} key={index} sx={{ display: "flex", justifyContent: "center" }}>
//                 <Item 
//                 onClick={() => onSelectFilter(filter)}
//                 sx={{ 
//                   width: "100%", 
//                   backgroundColor: colors[index],
//                   padding: "20px",
//                   color: "#fff", // white text for better contrast
//                   fontWeight: "bold"
//                 }}>
//                   {filter}
//                 </Item>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//       </Box>
//     </>
//   )
// }

// export default Days_Events;

import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  cursor: "pointer",  // Makes it clickable
  userSelect: "none",  // Prevents text selection on click
}));

const eventFilters = [
  "Today",
  "Tomorrow",
  "This Weekend",
  "This Week",
  "Next Weekend",
  "Next Week",
  "This Month",
  "Last Month",
];

const colors = [
  "#B39DDB", // lavender
  "#FF7043", // orange
  "#F48FB1", // pink
  "#FF8A65", // light orange
  "#EC407A", // pink
  "#64B5F6", // blue
  "#BA68C8", // purple
  "#42A5F5", // blue
];

const DaysEvents = ({ selectedFilter, onSelectFilter }) => {
  return (
    <Box>
      <Typography
        sx={{
          color: "rgb(241,118,53)",
          fontWeight: "bold",
          fontSize: "22px",
          pl: { xs: 0, sm: 15 },
          pb: 3,
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        Events Day Wise
      </Typography>

      <Box sx={{ flexGrow: 1, pl: 5, pr: 5, pb: 5 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>
          {eventFilters.map((filter, index) => (
            <Grid
              item
              xs={2}
              sm={4}
              md={4}
              key={filter}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Item
                sx={{
                  width: "100%",
                  backgroundColor: colors[index],
                  padding: "20px",
                  color: "#fff",
                  fontWeight: "bold",
                  opacity: selectedFilter === filter ? 0.8 : 1, // Highlight selected filter
                }}
                onClick={() => onSelectFilter(filter)}  // Pass filter to parent
              >
                {filter}
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default DaysEvents;

