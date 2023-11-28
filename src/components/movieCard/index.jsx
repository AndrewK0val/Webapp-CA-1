// import React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck'

import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import CardHeader from "@mui/material/CardHeader"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import FavoriteIcon from "@mui/icons-material/Favorite"
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone"
import StarRateIcon from "@mui/icons-material/StarRate"
import Avatar from '@mui/material/Avatar'
import IconButton from "@mui/material/IconButton"
import Grid from "@mui/material/Grid"
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom"
import React, { useContext  } from "react"
import { MoviesContext } from "../../contexts/moviesContext"
import { useTheme } from '@mui/material/styles'
import { BorderAll } from "@mui/icons-material"
import { createTheme, ThemeProvider } from '@mui/material'
import Rating from '@mui/material/Rating';
export default function MovieCard({ movie, action }) {
  // const movie = props.movie

  const { favorites, addToFavorites } = useContext(MoviesContext)
  const { toWatch, addToWatch } = useContext(MoviesContext)

  if (favorites.find((id) => id === movie.id)) {
    movie.favorite = true
  } else {
    movie.favorite = false
  }
  if (toWatch.find((id) => id === movie.id)) {
    movie.toWatch = true
  } else {
    movie.toWatch = false
  }


  const theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });
  
  // if (toWatch.find((id) => id === movie.id)) {
  //   movie.toWatch = true
  // } else {
  //   movie.toWatch = false
  // }

  const handleAddToFavorite = (e) => {
    e.preventDefault()
    addToFavorites(movie)
  }

  // const handleAddToWatch = (e) => {
  //   e.preventDefault()
  //   addToWatch(movie)
  // }
  return (
    <Card sx={{ maxWidth: 400, 
      backgroundColor: '#e0e0e0',
      border: '3px solid #f0f0f0',
      // borderImage: 'linear-gradient(to right, darkblue, darkorchid) borderBox',
      borderRadius: '0.9rem',
      transition: 'transform 0.15s ease-in-out',
      '&:hover': {
        transform: 'scale(1.03)'},    
      boxShadow:  '-7px -7px 19px #a4a4a4, 7px 7px 19px #ffffff;'
      }}>

      {/* <CardHeader title={movie.title} sx={{textAlign: 'center', fontFamily:'Bebas Neue', fontWeight:'bold'}}
              avatar={
                movie.favorite ? (
                  <Avatar sx={{ backgroundColor: 'red' }}>
                    <FavoriteIcon />
                  </Avatar>
                ) : movie.toWatch ? (
                  <Avatar sx={{ backgroundColor: 'brown' }}>
                    <PlaylistAddCheckIcon />
                  </Avatar>
                ) : null}
      /> */}
    <Typography sx={{textAlign: 'center', color:'#35354f', fontFamily:'Bebas Neue', fontSize:'23pt', padding:'0.1rem'}} >
      
        {movie.title}
    </Typography>


      <CardMedia
        sx={{ height: 500, borderTop: '3px solid #ffffff', borderBottom: '3px solid #ffffff', zIndex: '100'}}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : img
        }
      />
      <CardContent> 
        <Grid container sx={{display:'flex', justifyContent:'center'}}>
          {/* <Grid item xs={6}> */}
            <Typography variant="h6"  >
              <CalendarIcon fontSize="small" />
              {" "}{movie.release_date}
            </Typography>
          {/* </Grid> */}
          {/* <Grid item xs={6}> */}
            <Typography variant="h6" component="p">
            <Rating name="read-only" value={movie.vote_average} max={10} size="small" readOnly />
              {/* <StarRateIcon  fontSize="small" />
              {"  "} {movie.vote_average}{" "} */}
            </Typography>
          {/* </Grid> */}
          <CardActions >
            <Link to={`/movies/${movie.id}`}>
              <Button variant="outlined" size="medium" sx={{color: 'grey', border:'2px solid grey', fontFamily:'sans-serif', fontWeight:'bold'}}>
                More Info
              </Button>
            </Link>
          </CardActions>
        </Grid>
        {action(movie, favorites)}
      </CardContent>
    </Card>
  )
}