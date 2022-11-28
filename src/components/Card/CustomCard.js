import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
// import ProfileImage from '../../assets/profileImage.jpeg';

export default function CustomCard({ image, title, description, gitref, liveref }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <div class="">
            <Button href={gitref} sx={{ color: '#000000', textTransform: 'capitalize', textDecoration: 'underline' }}><GitHubIcon sx={{fontSize: 16}}/>GitHub</Button>
            <Button href={liveref} sx={{ color: '#000000', textTransform: 'capitalize', textDecoration: 'underline' }}>Live Here</Button>
        </div>
      </CardActions>
    </Card>
  );
}