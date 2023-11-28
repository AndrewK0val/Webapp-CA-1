// import React from "react"
import Chip from "@mui/material/Chip"
import Paper from "@mui/material/Paper"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import MonetizationIcon from "@mui/icons-material/MonetizationOn"
import StarRate from "@mui/icons-material/StarRate"
import NavigationIcon from "@mui/icons-material/Navigation"
import Fab from "@mui/material/Fab"
import Typography from "@mui/material/Typography"
import React, { useState } from "react"
import Drawer from "@mui/material/Drawer"
import MovieReviews from "../movieReviews"
import Button from "@mui/material/Button"
import { Link } from "react-router-dom"
import HomeIcon from "@mui/icons-material/Home"




const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
}
const chip = { margin: 0.5 }

const MovieDetails = ({ movie }) => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {movie.overview}
      </Typography>

      <Paper 
        component="ul" 
        sx={{...root}}
      >
        <li>
          <Chip label="Genres" sx={{...chip}} color="primary" />
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{...chip}} />
          </li>
        ))}

        <a href={movie.homepage}>
          <HomeIcon color="primary" />
        </a>
      </Paper>
      <Paper component="ul" sx={{...root}}>
        <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} />
        <Chip
          icon={<MonetizationIcon />}
          label={`${movie.revenue.toLocaleString()}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${movie.vote_average} (${movie.vote_count}`}
        />
        <Chip label={`Released: ${movie.release_date}`} />
      </Paper>

      <Paper component="ul" sx={{...root}}>
          <Chip
            label="Production Countries"
            color="primary"
          >
        </Chip>
        <Chip
          label={ movie.production_countries[0].name}
        />
      </Paper>
      <Link to={`/movies/similar-to/${movie.id}`} style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary" style={{ marginTop: '16px', marginRight:'2rem' }}>
             View Similar
        </Button>
      </Link>

      <Link to={`/actors/staring-in/${movie.id}`} style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary" style={{ marginTop: '16px' }}>
             View Cast
        </Button>
      </Link>
      
      <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <MovieReviews movie={movie} />
      </Drawer>
      </>
  )
}
export default MovieDetails 