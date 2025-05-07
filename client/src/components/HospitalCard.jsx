import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const HospitalCard = ({ hospital }) => {
  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: 4,
        height: '100%', // Ensure card fills its container
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <CardContent>
        <Typography variant="h6" color="primary" gutterBottom>
          <LocalHospitalIcon sx={{ mr: 1 }} />
          {hospital.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          📍 {hospital.location}
        </Typography>
        <Typography variant="body2">
          📞 {hospital.mobile}
        </Typography>
        <Typography variant="body2">
          ✉️ {hospital.email}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HospitalCard;
