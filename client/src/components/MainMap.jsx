import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const wrapperStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '30px',
  overflow: 'hidden',
  border: '2px solid blue',
  backgroundColor: 'black',
  maxWidth: '900px', // max width for responsiveness
  margin: '0 auto',  // center horizontally
  boxShadow: '0 10px 30px rgba(0,0,0,0.7)'
};

const mapContainerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '30px',
};

const MapComponent = ({ lat, lng }) => {
  const center = { lat, lng };
  const key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  return (
    <div style={wrapperStyle}>
      <LoadScript googleMapsApiKey={key}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={12}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapComponent;
