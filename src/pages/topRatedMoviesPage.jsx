import React, { useState, useEffect } from "react"
import PageTemplate from '../components/templateMovieListPage'
import { getTopRatedMovies } from "../api/tmdb-api"
import AddToWatch from '../components/cardIcons/addToWatch'
import Spinner from '../components/spinner'
import { isError, useQuery } from "react-query"


const TopRatedMoviesPage = (props) => {
    const {data, error, isLoading, isError} = useQuery('topRated', getTopRatedMovies)
    const [page, setPage] = useState([])

    if (isLoading){
        return <Spinner/>
    } 
    
    if (isError){
        return <h1>{error.message}</h1>
    }

    const topRatedMovies = data.results


    return (
        <PageTemplate
          title='Top Rated Movies'
          movies={topRatedMovies}
          action={(movie) => {
            return <AddToWatch movie={movie} />
          }}
        />
      )
    }

export default TopRatedMoviesPage
