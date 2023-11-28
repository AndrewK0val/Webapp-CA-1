import React, { useState } from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import Button from "@mui/material/Button"
import MenuIcon from "@mui/icons-material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Menu from "@mui/material/Menu"
import { useNavigate } from "react-router-dom"
import { styled } from '@mui/material/styles'
// import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTheme } from '@mui/material/styles'
import PersonIcon from '@mui/icons-material/Person'
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';


const Offset = styled('div')(({ theme }) => theme.mixins.toolbar)



const SiteHeader = ({ history }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  const navigate = useNavigate()

  function isUserLoggedIn() {
    // return localStorage.getItem("username")
    if(localStorage.getItem("username")){
      return localStorage.getItem("username")
    }else{
      return "login"
    }
  }

  const menuOptions = [
    { label: "Home", path: "/" },
    { label: "Favorites", path: "/movies/favorites" },
    { label: "Upcoming Movies", path: "/movies/upcoming" },
    { label: "Top Rated", path: "/movies/topRated" },
    { label: "Popular", path: "/movies/popular" },
    { label: "Login / Signup", path: "/authentication" },
  ]

  const handleMenuSelect = (pageURL) => {
    navigate(pageURL, { replace: true })
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }



  return (
    <>
      <AppBar position="fixed" color="secondary" sx={{}}>
        <Toolbar  sx={{ backgroundColor: '#c71a37', border:'4px solid black', boxShadow:'-2px 6px 29px 8px rgba(0,0,0,0.6)' }}>
          <Typography variant="h4" sx={{ flexGrow: 1, fontFamily:'Bebas Neue'  }}>
          <LocalMoviesIcon sx={{ fontSize: 40, transform:'translateY(0.5rem)' }} />
            TMDB Client
            <LocalMoviesIcon sx={{ fontSize: 40, transform:'translateY(0.5rem)' }} />
          </Typography>

            {isMobile ? (
              <>
                <IconButton
                  aria-label="menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                >
                  {menuOptions.map((opt) => (
                    <MenuItem
                    key={opt.label}
                    onClick={() => handleMenuSelect(opt.path)}
                    >
                      {opt.label}
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <>
                {menuOptions.map((opt) => (
                  <Button
                    key={opt.label}
                    color="inherit"
                    onClick={() => handleMenuSelect(opt.path)}
                  >
                    {opt.label}
                  </Button>
                ))}
              </>
            )}
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  )
}

export default SiteHeader