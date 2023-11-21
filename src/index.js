import React, { useState } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom"
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
import AddMovieReviewPage from './pages/addMovieReviewPage'
import { createUserWithEmailAndPassword } from "firebase/auth"
import {auth} from './firebase-config'
import Box from '@mui/material/Box';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
})


const App = () => {

  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
   
  const register = async ()=>{
    try{
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      console.log(user)
    } catch(error){
      console.log(error.message)
    }
  }
  const login = async ()=>{
  
  }
  const logout = async () => {
  
  }

  return (
    <Box sx={{ overflowX: 'hidden', padding:'none', transform: 'translateX(-0.5rem)', }}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <SiteHeader />
          <MoviesContextProvider>
            <Routes>
              <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
              <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
              <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
              <Route path="/movies/topRated" element={<TopRatedMoviesPage />} />
              <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
              <Route path="/movies/:id" element={<MoviePage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={ <Navigate to="/" /> } />
            </Routes>
          </ MoviesContextProvider>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Box>
  )
}

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />)