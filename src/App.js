import React from 'react'
import './App.css';
import Movies from './components/Movies'
//import SortMovies from './components/SortMovies';
import TopBar from './components/TopBar'

const MOVIE_API='https://api.themoviedb.org/3/discover/movie?api_key=8a9cc99f32fb447167876b3a86789b79&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=8a9cc99f32fb447167876b3a86789b79&query=`;

function App() {
  
  //? initial state is declared as an array
  const [movies,setMovies] = React.useState([]);
  const [searchQuery,setSearchQuery] = React.useState('');
  //const [ascOrder,setAscOrder] = React.useState([]);
  //const [dscOrder,setDscOrder] = React.useState([]);
  //? UseEffect hook is used to do the side effects like fetching data
  
  //* when an empty array is passed as second argument to 
  //* useEffect it acts like componentDidMount
  
  
    //? spread operator is used to get all the props seperately
    //? no idea where that item.id came from


  React.useEffect(()=>{
      fetch(MOVIE_API)
      .then(res => res.json())
      .then((data) =>{
          //console.log(data.results)
          setMovies(data.results)
        })
    },[])


    
    const tempMovies = movies;
    //! Logic for sorting the movies
    const handleAscSort=()=>{
      function compare(a,b){
        const bandA = a.title;
        const bandB = b.title;
  
        let comparision = 0;
        if(bandA > bandB){
            comparision = 1;
        } else if(bandA < bandB){
            comparision = -1;
        }
        return comparision;
      }
      setMovies(tempMovies.sort(compare));
      console.log(movies);
    }
    
    const handleDscSort=()=>{
      function compare(a,b){
      const bandA = a.title;
      const bandB = b.title;

      let comparision = 0;
      if(bandA > bandB){
          comparision = 1;
      } else if(bandA < bandB){
          comparision = -1;
      }
      return comparision * -1;
    }
    setMovies(tempMovies.sort(compare));
    console.log(movies)
    }
    

    //! sorting logic ends

    const handleSubmit=(e)=>{
      fetch(SEARCH_API+`${ searchQuery }`)
          .then(res => res.json())
          .then((data)=>{
            //console.log(data.results)
            setMovies(data.results)
          })
      e.preventDefault();
  };
  
  const handleOnChange=(e)=>{
      setSearchQuery(e.target.value);
  };
    return (
    <div className="App">
      <TopBar 
      submitFunction={handleSubmit}
      changeFunction={handleOnChange}
      searchTerm={searchQuery}
      />
      <div>
          <button value="ascending" onClick={handleAscSort}>Ascending Order</button>
          <button value="decending" onClick={handleDscSort}>Descending Order</button>
      </div>
      {/* <SortMovies 
      sortMovie={movies}
      sortAscending={setAscOrder}
      sortDescending={setDscOrder}
      /> */}
    {
        movies.length > 0 && movies.map(items=>(
            <Movies 
            key={items.id} 
            {...items}
            />
          ))
    }
    {/* {
        ascOrder.length > 0 && ascOrder.map(items=>(
            <Movies 
            key={items.id} 
            {...items}
            />
          ))
    }
    {
      dscOrder.length > 0 && dscOrder.map(items=>(
        <Movies
        key={items.id}
        {...items}
        />
      ))
    } */}
    </div>
  );
}
// 'https://api.themoviedb.org/3/movie/550?api_key=8a9cc99f32fb447167876b3a86789b79'
//const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=8a9cc99f32fb447167876b3a86789b79&query='

export default App;
