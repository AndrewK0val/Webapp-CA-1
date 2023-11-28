import React from "react"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import Paper from "@mui/material/Paper"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import HomeIcon from "@mui/icons-material/Home"
import Container from "@mui/material/Container"
import { useNavigate } from "react-router-dom";
import MovieIcon from '@mui/icons-material/Movie';


const MovieHeader = (props) => {
  const navigate = useNavigate();
  const movie = props.movie

  return (
    <Paper 
        component="div" 
        sx={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            padding: 1.5,
            margin: 0,
        }}
      >
      <IconButton aria-label="go back" onClick={() => navigate(-1)} >
        <ArrowBackIcon  fontSize="large" />
      </IconButton>

      <Typography variant="h3" component="h3" sx={{textAlign:'center', fontFamily:'Bebas Neue'}}>
      <MovieIcon  fontSize="large" sx={{ marginRight:'1rem'}} />
        {movie.title}

        <br />
           <Typography sx={{fontStyle:'italic'}}> {movie.tagline} </Typography>
        {/* <span sx={{ fontSize: "0.5rem"}}>{`   "${movie.tagline}"`} </span> */}
      </Typography>

      <IconButton aria-label="go forward" onClick={() => navigate(+1) } >
        <ArrowForwardIcon  fontSize="large" />
      </IconButton>
    </Paper>
  )
}

export default MovieHeader