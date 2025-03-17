import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
const eventFilters = [
  "Today",
  "Tomorrow",
  "This Weekend",
  "This Week",
  "Next Weekend",
  "Next Week",
  "This Month",
  "Custom Date",
];

const Days_Events = () => {
  return (
    <>
       <Box>
      <Typography sx={{ color: 'rgb(241,118,53)', fontWeight: "bold", fontSize: "22px", pl: 15, pb: 3 }}>
        Events Day Wise
      </Typography>

    <Box sx={{ flexGrow: 1, pl: 5, pr: 5, pb: 5 }}> {/* Added left & right padding */}
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>
          {eventFilters.map((filter, index) => (
            <Grid item xs={2} sm={4} md={4} key={index} sx={{ display: "flex", justifyContent: "center" }}>
              <Item sx={{ 
                width: "100%", 
                backgroundColor: index % 2 === 0 ? "#f0f0f0" : "#e0e0e0", // Alternating background colors
                padding: "20px" // Adjust padding inside each block
              }}>
                {filter}
              </Item>
            </Grid>
          ))}
        </Grid>
    </Box>
  </Box>
    </>
  )
}

export default Days_Events
