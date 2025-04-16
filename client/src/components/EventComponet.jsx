import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  Box, IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';

const getCurrentDate = () => {
  return new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const EventComponet = ({ event }) => {

  const [like,setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(event.like || 0);


  const handleToggle = ()=>{
    setLike((prev)=>!prev);
    setLikeCount((prevCount) => (like ? prevCount - 1 : prevCount + 1));
  }
  return (
    <Card sx={{ maxWidth: 290 }}>
      <CardMedia
        sx={{ height: 150 }}
        image={event.img}
        title={event.name}
      />
      <CardContent>
        <Typography >
          {event.name}
        </Typography>
        <Typography>
          {event.owner}
        </Typography>
      </CardContent>
      <CardActions>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
        <Typography sx={{ fontSize: "15px" }}>{getCurrentDate()}</Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton onClick={handleToggle}>
          {like ? <FavoriteIcon sx={{ color: "red" }} /> : <FavoriteBorderIcon sx={{ color: "red" }} />}
          </IconButton>
        <Typography>{likeCount}</Typography>
      </Box>
    </Box>
      </CardActions>
    </Card>
  );
};

export default EventComponet;
