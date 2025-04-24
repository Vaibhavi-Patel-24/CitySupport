import * as React from 'react';
import { Card, Box, Avatar, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const Blogs = ({ blog }) => {
  return (
    <Box>
      <Card sx={{ maxWidth: 310 }}>
        <CardMedia
          sx={{ height: 180 }}
          image={blog.imageURL}
          title={blog.title}
        />
        <CardContent>
          <Button sx={{
            backgroundColor: 'rgb(242,242,242)',
            color: 'rgb(75,107,251)',
            fontSize: '9px',
            fontWeight: 'bold',
            borderRadius: '20px',
          }}>
            CitySupport
          </Button>
          <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '17px', marginTop: "15px" }}>
            {blog.title}
          </Typography>
        </CardContent>
        <Box sx={{ pb: 1 }}>
          <CardActions>
            <Avatar alt={blog.name} src={blog.profilePhoto} />
            <Typography sx={{ color: 'rgb(151,152,159)', fontSize: '15px', ml: 1 }}>
              {blog.name}
            </Typography>
            <Typography sx={{ color: "rgb(151,152,159)", pl: 4 }}>
              {formatDate(blog.datePosted)}
            </Typography>
          </CardActions>
        </Box>
      </Card>
    </Box>
  );
};

export default Blogs;
