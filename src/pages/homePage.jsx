import React from "react";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'

const HomePage = (props) => {
  // let page = null;

  const {  data, error, isLoading, isError }  = useQuery('discover', ()=> getMovies(page))
  const [page, setPage] = React.useState(1);
   
  if (isLoading) {
    return <Spinner />
  }



  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 

  return (
    <>
      <div> page: {page}</div>
      <input type="text" />
      <PageTemplate
        title="Discover Movies"
        movies={movies}
        page={setPage}
        action={(movie) => {
          return <AddToFavoritesIcon movie={movie} />
        }}
      />
    </>
);
};
export default HomePage;