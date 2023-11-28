import React from "react"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import Paper from "@mui/material/Paper"
import IconButton from "@mui/material/IconButton"
import { useNavigate } from "react-router-dom"
import Typography from "@mui/material/Typography"

const Header = (props ) => {
  const navigate = useNavigate();

  const title = props.title
  return (
    <Paper 
      component="div" 
      sx={{
        display: "flex",
        justifyContent: "space-around",
        // flexWrap: "wrap",
        height: "7rem",
        alignItems: "center",
        marginBottom: '2rem',
        transform:'translateY(-2.5rem)'
      }}
      >
      <IconButton aria-label="go forward" onClick={() => navigate(+1) } >
        <ArrowBackIcon  fontSize="large" />
      </IconButton>

      <Typography variant="h4" component="h3" sx={{fontFamily:'Bebas Neue', fontSize:'40pt'}}>
        {title}
      </Typography>
      <IconButton aria-label="go forward" onClick={() => navigate(-1) } >

        <ArrowForwardIcon  fontSize="large" />
      </IconButton>
    </Paper>
  )
}

export default Header