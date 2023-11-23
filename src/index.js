import React, { useState } from "react"
import ReactDOM from "react-dom";
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
import reportWebVitals from "./reportWebVitals";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import {
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

  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

   
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <Box sx={{ overflowX: 'hidden', overflowY:'hidden', padding:'none', transform: 'translateX(-0.5rem)', }}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <SiteHeader />
          <MoviesContextProvider>
          <Box>
              <div className="App">
                <div>
                  <h3> Register User </h3>
                  <input
                    placeholder="Email..."
                    onChange={(event) => {
                      setRegisterEmail(event.target.value);
                    }}
                  />
                  <input
                    placeholder="Password..."
                    onChange={(event) => {
                      setRegisterPassword(event.target.value);
                    }}
                  />

                  <button onClick={register}> Create User</button>
                </div>

                <div>
                  <h3> Login </h3>
                  <input
                    placeholder="Email..."
                    onChange={(event) => {
                      setLoginEmail(event.target.value);
                    }}
                  />
                  <input
                    placeholder="Password..."
                    onChange={(event) => {
                      setLoginPassword(event.target.value);
                    }}
                  />

                  <button onClick={login}> Login</button>
                </div>

                <h4> User Logged In: </h4>
                {user?.email}

                <button onClick={logout}> Sign Out </button>
              </div> 
          </Box>
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

// const rootElement = createRoot( document.getElementById("root") )
// rootElement.render(<App />)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();