import React from 'react'
import './App.css';
import Movies from './components/Movies'
import SortMovies from './components/SortMovies';
import TopBar from './components/TopBar'

const MOVIE_API_KEY = process.env.REACT_APP_API_KEY
const MOVIE_API=`https://api.themoviedb.org/3/discover/movie?api_key=${MOVIE_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&query=`;

function App() {
  
  //? initial state is declared as an array
  const [movies,setMovies] = React.useState([]);
  const [searchQuery,setSearchQuery] = React.useState('');
  const [ascOrder,setAscOrder] = React.useState([]);
  const [dscOrder,setDscOrder] = React.useState([]);
  //? UseEffect hook is used to do the side effects like fetching data
  
  //* when an empty array is passed as second argument to 
  //* useEffect it acts like componentDidMount
  
  
  //? spread operator is used to get all the props seperately
  //? no idea where that item.id came from


  React.useEffect(()=>{
      fetch(MOVIE_API)
      .then(res => res.json())
      .then((data) =>{
          setMovies(data.results)
        })
    },[])
    
    //* submit and change functions

    const handleSubmit=(e)=>{
      fetch(SEARCH_API+`${ searchQuery }`)
          .then(res => res.json())
          .then((data)=>{
            setMovies(data.results)
          })
      e.preventDefault();
    };
  
  const handleOnChange=(e)=>{
      setSearchQuery(e.target.value);
  };
    return (
    <div className="App">
      <div className="heading">
        
      <header>Movies Masti</header>

      <SortMovies 
      sortMovie={movies}
      sortAscending={setAscOrder}
      sortDescending={setDscOrder}
      ascState={ascOrder}
      dscState={dscOrder}
      />

      <TopBar 
      submitFunction={handleSubmit}
      changeFunction={handleOnChange}
      searchTerm={searchQuery}
      />
    </div>
    {
        movies.length > 0 && movies.map(items=>(
            <Movies 
            key={items.id} 
            {...items}
            />
          ))
    }
    </div>
  );
}

export default App;
