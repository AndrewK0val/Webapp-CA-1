import React from "react"
import PageTemplate from "../components/templateMovieListPage"
import ActorsListTemplate from "../components/templateMovieActorsPage"
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {  getMovieActor } from '../api/tmdb-api'
import { useParams } from 'react-router-dom'

const MovieActorsPage = () => {

  const { id } = useParams()
  const { data, isLoading, error, isError } = useQuery(['actor', { id: id }], getMovieActor)

  if (isError) return <h1>{error.message}</h1>
  if (isLoading) return <Spinner/>
  
  const actors = data.cast  
  const favorites = actors.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))

  const mustWatch = actors.filter(m => m.mustWatch)
  localStorage.setItem('mustWatch', JSON.stringify(mustWatch))

  return (
    <React.Fragment>
      {actors ? (
        <React.Fragment>
          <ActorsListTemplate
          title={`Actors from movie ID: ${id}`}
          actors={actors}
              action={(actor) => {
        return <AddToFavoritesIcon actor={actor} />
      }}
      />
        </React.Fragment>
      ) : (<p>Loading...</p>)}
    </React.Fragment>)
}
export default MovieActorsPage