import React from "react"
import PageTemplate from "../components/templateMovieListPage"
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import { getSimilarMovies, getMovie } from '../api/tmdb-api'
import { useParams } from 'react-router-dom'

const SimilarMoviesPage = () => {

  const { id } = useParams()
  const { data: similar, error, isLoading, isError } = useQuery( ["similar", { id: id }], getSimilarMovies)
  const { data: movie, isLoading: isMovieLoading } = useQuery(['movie', { id: id }], getMovie)

  if (isError) return <h1>{error.message}</h1>
  if (isLoading || isMovieLoading) return <Spinner/>
  
  const movies = similar.results  
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))

  const mustWatch = movies.filter(m => m.mustWatch)
  localStorage.setItem('mustWatch', JSON.stringify(mustWatch))

  return (
    <>
      {similar ? (
        <>
          <PageTemplate
          title={`Similar to: ${movie.title}`}
          movies={movies}
              action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
      />
        </>
      ) : (<p>Loading...</p>)}
    </>)
}
export default SimilarMoviesPage