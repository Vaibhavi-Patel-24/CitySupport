import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import LocationCityIcon from '@mui/icons-material/LocationCity';

const MunicipalCard = ({ municipal }) => {
  return (
    <Card 
      sx={{ 
        height: '100%', 
        borderRadius: 3, 
        boxShadow: 4, 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between' 
      }}
    >
      <CardContent>
        <Typography variant="h6" color="primary" gutterBottom>
          <LocationCityIcon sx={{ mr: 1 }} />
          {municipal.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          📍 {municipal.location}
        </Typography>
        <Typography variant="body2">
          📞 {municipal.contact}
        </Typography>
        <Typography variant="body2">
          ✉️ {municipal.email}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MunicipalCard;
