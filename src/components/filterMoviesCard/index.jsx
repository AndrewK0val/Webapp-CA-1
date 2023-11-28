import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import TextField from "@mui/material/TextField"
import SearchIcon from "@mui/icons-material/Search"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import img from '../../images/pexels-dziana-hasanbekava-5480827.jpg'
import { getGenres } from "../../api/tmdb-api"
import { useQuery } from "react-query"
import Spinner from '../spinner'
import { node } from "prop-types"
import Box from '@mui/material/Box'

const formControl = 
  {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: "0.7rem",
    display: 'inline-flex',
  }

export default function FilterMoviesCard(props) {

  const { data, error, isLoading, isError } = useQuery("genres", getGenres)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }
  const genres = data.genres
  if (genres[0].name !== "Select Genre"){
    genres.unshift({ id: "0", name: "Select Genre" })
  }

  const handleChange = (e, type, value) => {
    e.preventDefault()
    props.onUserInput(type, value) // NEW
  }

  const handleTextChange = (e, props) => {
    handleChange(e, "name", e.target.value)
  }

  const handleGenreChange = (e) => {
    handleChange(e, "genre", e.target.value)
  }

  return (
    <>

    <Card 
      sx={{
        // maxWidth: 345,
        backgroundColor: 'black',
        display: 'flex',
        flexWrap: "wrap",
        justifyContent: "center",
        marginBottom: '2rem',
        height: '10rem',
        width: '110%',
        alignItems: 'baseline',
        marginLeft: '-5%',
        transform:'translateY(-.5rem)',
      }} 
     >


      <Typography variant="h5" component="h1" sx={{color:'white', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:'1rem', fontFamily:'Merriweather' }}>
          <SearchIcon fontSize="large" />
          Search/filter.
      </Typography>

    <Box sx={{
      display: 'flex',
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: 'center',
      width: '100%',
      
    }}>
        <CardContent sx={{ justifyContent: 'center'}}>
            <TextField
                sx={{...formControl}}
                id="filled-search"
                label="Search field"
                type="search"
                variant="filled"
                value={props.titleFilter}
                onChange={handleTextChange}
              />


          <Box sx={{display:'inline-flex'}}>

            {/* <InputLabel id="genre-label" sx={{color: 'white'}}>Genre</InputLabel> */}
            <FormControl sx={{...formControl}}>
              <Select
                labelId="genre-label"
                id="genre-select"
                defaultValue=""
                placeholder="Select Genre"
                value={props.genreFilter}
                onChange={handleGenreChange}
              >
                {genres.map((genre) => {
                  return (
                    <MenuItem key={genre.id} value={genre.id}>
                      {genre.name}
                    </MenuItem>
                  )
                })}
              </Select>
            </FormControl>

          </Box>
        </CardContent>
        {/* <CardMedia
          sx={{ height: 300 }}
          image={img}
          title="Filter"
        /> */}
        <CardContent>
          <Typography variant="h5" component="h1">
            {/* <SearchIcon fontSize="large" />
            Filter the movies.
            <br /> */}
          </Typography>
        </CardContent>
      </Box>
    </Card>
    </>
  )
}