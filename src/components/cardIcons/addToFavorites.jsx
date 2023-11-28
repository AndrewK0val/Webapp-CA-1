import React, { useContext, useState, useEffect } from "react"
import { MoviesContext } from "../../contexts/moviesContext"
import IconButton from "@mui/material/IconButton"
import FavoriteIcon from "@mui/icons-material/Favorite"


const AddToFavoritesIcon = ({ movie }) => {
  const { favorites, addToFavorites } = useContext(MoviesContext)
  

  if (favorites.find((id) => id === movie.id)) {
    movie.favorite = true
  } else {
    movie.favorite = false
  }


  useEffect(() => {
    window.onbeforeunload = () => {
      localStorage.removeItem('clickedCards')
    }
  }, [])




  const handleAddToFavorite = (e) => {
    e.preventDefault()
    addToFavorites(movie)
  }

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavorite}>
      <FavoriteIcon
        color="primary"
        fontSize="large"
        sx={{ color: movie.favorite ? '#a3031e' : 'gray' }}
      />
    </IconButton>
  )
}

export default AddToFavoritesIcon