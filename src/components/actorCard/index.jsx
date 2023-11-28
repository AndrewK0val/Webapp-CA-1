import React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone"
import Grid from "@mui/material/Grid"
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom"
import Rating from '@mui/material/Rating';
import MovieActorDetails from "../actorDetails"

export default function ActorCard({ actors, action }) {
  return (
    <Card sx={{ maxWidth: 400, 
      backgroundColor: '#e0e0e0',
      border: '3px solid #f0f0f0',
      borderRadius: '0.9rem',
      transition: 'transform 0.15s ease-in-out',
      '&:hover': {
        transform: 'scale(1.03)'},    
      boxShadow:  '-7px -7px 19px #a4a4a4, 7px 7px 19px #ffffff;'
      }}>

    <Typography sx={{textAlign: 'center', color:'#35354f', fontFamily:'Bebas Neue', fontSize:'23pt', padding:'0.1rem'}} >
        {actors.name}
    </Typography>

      <CardMedia
        sx={{ height: 500, borderTop: '3px solid #ffffff', borderBottom: '3px solid #ffffff', zIndex: '100'}}
        image={
          actors.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actors.profile_path}`
            : img
        }
      />
      <CardContent> 
        <Grid container sx={{display:'flex', justifyContent:'center'}}>
            <Typography variant="h6"  >
              <CalendarIcon fontSize="small" />
            </Typography>

          <CardActions >
            <Link to={`/actors/${actors.id}`}>
              <Button variant="outlined" size="medium" sx={{color: 'grey', border:'2px solid grey', fontFamily:'sans-serif', fontWeight:'bold'}}>
                More Info
              </Button>
            </Link>
          </CardActions>
        </Grid>
      </CardContent>
    </Card>
  )
}