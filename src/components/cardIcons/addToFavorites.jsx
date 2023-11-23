import React, { useContext, useState, useEffect } from "react"
import { MoviesContext } from "../../contexts/moviesContext"
import IconButton from "@mui/material/IconButton"
import FavoriteIcon from "@mui/icons-material/Favorite"


const AddToFavoritesIcon = ({ movie }) => {
  const context = useContext(MoviesContext)
  const [clickedCards, setClickedCards] = useState(
    () => JSON.parse(localStorage.getItem('clickedCards')) || {}
  )

  useEffect(() => {
    window.onbeforeunload = () => {
      localStorage.removeItem('clickedCards')
    }
  }, [])

  const handleClick = () => {
    setClickedCards(prevState => ({
      ...prevState,
      [movie.id]: !prevState[movie.id],
    }))
  }


  const handleAddToFavorites = (e) => {
    e.preventDefault()
    context.addToFavorites(movie)
  }

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavorites}>
      <FavoriteIcon
        color="primary"
        fontSize="large"
        sx={{ color: clickedCards[movie.id] ? 'red' : 'gray' }}
      />
    </IconButton>
  )
}

export default AddToFavoritesIcon