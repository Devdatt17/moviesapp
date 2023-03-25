import React from 'react'
import {
  Grid,
  Box
} from '@mui/material'

import './App.css';
import Movies from './components/Movies'
import Navbar from './components/Navbar';
import { useDispatch, useSelector } from 'react-redux'
import { viewMovie, searchMovie } from './redux/action'

function App() {
  const dispatch = useDispatch()
  const movie = useSelector(state => state)
  //? initial state is declared as an array
  // const [movies,setMovies] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [ascOrder, setAscOrder] = React.useState([]);
  const [dscOrder, setDscOrder] = React.useState([]);
  //? UseEffect hook is used to do the side effects like fetching data

  //* when an empty array is passed as second argument to 
  //* useEffect it acts like componentDidMount


  //? spread operator is used to get all the props seperately
  //? no idea where that item.id came from


  React.useEffect(() => {
    dispatch(viewMovie())
  }, [dispatch])

  //* submit and change functions

  const clickOnHomeButton = () =>{
    dispatch(viewMovie())
  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value)
    if (e.key === 'Enter') {
      dispatch(searchMovie(searchTerm))
      e.preventDefault()
    }
  }

  return (
    <div className="App main-background">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container direction={'column'}>
          <Grid item>
            <Navbar
              sortMovie={movie}
              sortAscending={setAscOrder}
              sortDescending={setDscOrder}
              ascState={ascOrder}
              dscState={dscOrder}
              handleOnChange={handleOnChange}
              searchTerm={searchTerm}
              clickOnHomeButton={clickOnHomeButton}
            />
          </Grid>
          <Grid item>
            <Grid container p={2} justifyContent="flex-start" direction={'row'}>
              {
                movie.length > 0 && movie.map(items => (
                  <Grid item m={2} key={items.id}>
                    <Movies
                      {...items}
                    />
                  </Grid>
                ))
              }
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
