import * as React from 'react';
import {Card,Box} from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const getCurrentDate = () => {
    return new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

const Blogs = ({blog}) => {
  return (
    <Box>
      <Card sx={{ maxWidth: 310 }}>
      <CardMedia
        sx={{ height: 180 }}
        image={blog.image}
        title="green iguana"
      />
      <CardContent>
      <Button sx={{backgroundColor:'rgb(242,242,242)',color:'rgb(75,107,251)',fontSize:'9px',fontWeight:'bold',borderRadius:'20px',}}>
          CitySupport
       </Button>

        <Typography variant="body2" sx={{fontWeight:'bold',fontSize:'17px',marginTop:"15px"}}>
            {blog.title}
        </Typography>
      </CardContent>
      <Box sx={{pb:1}}>
      <CardActions>
      <Avatar alt="Remy Sharp" src={blog.profile} />
      <Typography sx={{color:'rgb(151,152,159)',fontSize:'15px',fontWeight:'15px'}}>{blog.author}</Typography>
      <Typography sx={{color:"rgb(151,152,159)",pl:4}}>{getCurrentDate()}</Typography>
      </CardActions>
      </Box>
    </Card>
    </Box>
  )
}

export default Blogs
