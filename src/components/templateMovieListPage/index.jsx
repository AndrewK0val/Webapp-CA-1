import React, { useState } from "react"
import Header from "../headerMovieList"
import FilterCard from "../filterMoviesCard"
import MovieList from "../movieList"
import Grid from "@mui/material/Grid"
import Pagination from '@mui/material/Pagination';

function MovieListPageTemplate({ movies, title, action, page, setPage}) {
  // const [page, setPage] = useState("")
  const [nameFilter, setNameFilter] = useState("")
  const [genreFilter, setGenreFilter] = useState("0")
  const genreId = Number(genreFilter)
  


  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true
    })

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value)
    else setGenreFilter(value)
  }

  return (
    <Grid container sx={{}} >
      <Grid item xs={12}>
          <FilterCard onUserInput={handleChange} titleFilter={nameFilter} genreFilter={genreFilter}/>
        <Header title={title} />
        <Pagination count={10} variant="outlined" color="secondary" page={page} onChange={(event, value) => setPage(value)} sx={{display:'flex', justifyContent:'center'}} />

      </Grid>
      <Grid item container spacing={5} sx={{margin:"2rem", display: 'flex', justifyContent: 'center'}}>
        {/* <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
        </Grid> */}
        <MovieList action={action} movies={displayedMovies}></MovieList>
      </Grid>
    </Grid>
  )
}
export default MovieListPageTemplate