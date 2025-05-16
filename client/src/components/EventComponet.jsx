import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, IconButton, Tooltip } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';

const formatDate = (dateString) => {
  if (!dateString) return "No Date";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const EventComponet = ({ event }) => {
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(event.like || 0);

  const handleToggle = () => {
    setLike(prev => !prev);
    setLikeCount(prevCount => (like ? prevCount - 1 : prevCount + 1));
  };

  return (
<Card
  sx={{
    maxWidth: 290,
    boxShadow: 3,
    borderRadius: 2,
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
      transform: 'scale(1.03)',
      boxShadow: 6,
    },
  }}
>
      <CardMedia
        sx={{ height: 150 }}
        image={event.img}
        title={event.name}
      />
      <CardContent>
        <Tooltip title={event.name} arrow>
          <Typography
            sx={{
              fontWeight: 600,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: 'block',
              cursor: 'default'
            }}
          >
            {event.name}
          </Typography>
        </Tooltip>
        <Typography sx={{ fontSize: 14, color: "text.secondary" }}>
          {event.owner}
        </Typography>
      </CardContent>
      <CardActions>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
          <Typography sx={{ fontSize: "14px", color: "text.secondary" }}>
          {formatDate(event.date)}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton onClick={handleToggle}>
              {like ? <FavoriteIcon sx={{ color: "red" }} /> : <FavoriteBorderIcon sx={{ color: "red" }} />}
            </IconButton>
            <Typography sx={{ fontSize: "14px" }}>{likeCount}</Typography>
          </Box>
        </Box>
      </CardActions>
    </Card>
  );
};

export default EventComponet;
