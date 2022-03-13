import React from 'react'
import './App.css';
import Movies from './components/Movies'
import SortMovies from './components/SortMovies';
import TopBar from './components/TopBar'
import {useDispatch,useSelector} from 'react-redux'
import {viewMovie,searchMovie} from './redux/action'

function App() {
  const dispatch = useDispatch()
  const movie = useSelector(state=>state)
  //? initial state is declared as an array
  // const [movies,setMovies] = React.useState([]);
  const [searchQuery,setSearchQuery] = React.useState('');
  const [ascOrder,setAscOrder] = React.useState([]);
  const [dscOrder,setDscOrder] = React.useState([]);
  //? UseEffect hook is used to do the side effects like fetching data
  
  //* when an empty array is passed as second argument to 
  //* useEffect it acts like componentDidMount
  
  
  //? spread operator is used to get all the props seperately
  //? no idea where that item.id came from


  React.useEffect(()=>{
      dispatch(viewMovie())
    },[dispatch])
    
    //* submit and change functions

    const handleSubmit=(e)=>{
      dispatch(searchMovie(searchQuery))
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
      sortMovie={movie}
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
        movie.length > 0 && movie.map(items=>(
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
