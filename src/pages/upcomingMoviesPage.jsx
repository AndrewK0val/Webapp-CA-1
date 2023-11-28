import React, { useState, useEffect } from "react"
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api"
import AddToWatch from '../components/cardIcons/addToWatch'
import Spinner from '../components/spinner'
import { isError, useQuery } from "react-query"
import Pagination from '@mui/material/Pagination'
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'



const UpcomingMoviePage = (props) => {
  const [page, setPage] = useState(1)
  const {  data, error, isLoading, isError }  = useQuery(['upcoming', page], ()=> getUpcomingMovies(page), { keepPreviousData : true })
    if (isLoading){
        return <Spinner/>
    } 
    
    if (isError){
        return <h1>{error.message}</h1>
    }

    const upcomingMovies = data.results
    const favorites = upcomingMovies.filter(m => m.favorite)
    localStorage.setItem('favorites', JSON.stringify(favorites))

    return (
      <>

        <PageTemplate
          title='Upcoming Movies'
          movies={upcomingMovies}
          page={page}
          setPage={setPage}
          action={(movie) => {
            return <AddToWatch movie={movie} />
          }}
        />
      </>
      )
    }

export default UpcomingMoviePage
