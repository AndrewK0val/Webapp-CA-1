import React, { useState } from "react"
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client"
import { BrowserRouter  as Router, Route, Navigate, Routes } from "react-router-dom"
import HomePage from "./pages/homePage"
import MoviePage from "./pages/movieDetailsPage"
import { QueryClientProvider, QueryClient } from "react-query"
import MovieReviewPage from "./pages/movieReviewPage"
import UpcomingMoviesPage from "./pages/upcomingMoviesPage"
import TopRatedMoviesPage from "./pages/topRatedMoviesPage"
import SiteHeader from './components/siteHeader'
import FavoriteMoviesPage from "./pages/favoriteMoviesPage"
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext"
import reportWebVitals from "./reportWebVitals";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import Form from './components/Common/Form'
import PopularMoviesPage from "./pages/popularMoviesPage";
import LoginOrSignupPage from "./pages/authenticationPage"
import SimilarMoviesPage from "./pages/similarMoviesPage";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth"
import {auth} from './firebase-config'
import Box from '@mui/material/Box'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
})


function App() {

  
  return (
    <Box sx={{ overflowX: 'hidden', overflowY:'hidden', padding:'none', transform: 'translateX(-0.5rem)', backgroundColor:'#e0e0e0' }}>
      <QueryClientProvider client={queryClient}>
        {/* <BrowserRouter> */}
          <Router>
            <SiteHeader />
            <MoviesContextProvider>

              <Routes>
                <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
                {/* <Route path="/login" element={ <Form title="Login" setEmail={setEmail} setPassword={setPassword} handleAction={() => handleAction(1)}/>}/>
                <Route path="/register" element={ <Form title="Register" setEmail={setEmail} setPassword={setPassword} handleAction={() => handleAction(2)} />}/> */}
                <Route path="/authentication" element={<LoginOrSignupPage/>} />
                <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
                <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
                <Route path="/movies/topRated" element={<TopRatedMoviesPage />} />
                <Route path="movies/popular" element={<PopularMoviesPage/>}/>
                <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
                <Route path="/movies/similar-to/:id" element={<SimilarMoviesPage />}/>
                <Route path="/movies/:id" element={<MoviePage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={ <Navigate to="/" /> } />
              </Routes>


            </ MoviesContextProvider>
          </Router>
        {/* </BrowserRouter> */}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Box>
  )
}

// const rootElement = createRoot( document.getElementById("root") )
// rootElement.render(<App />)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();