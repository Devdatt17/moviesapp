const MOVIE_API_KEY = process.env.REACT_APP_API_KEY
const MOVIE_API=`https://api.themoviedb.org/3/discover/movie?api_key=${MOVIE_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&query=`;

const movie = (payload) => {
    return {
        type: "VIEWMOVIES",
        payload
    }
}

export const viewMovie = (payload) => {
    return (dispatch) => {
        fetch(MOVIE_API)
            .then(res => res.json())
            .then((data) => {
               dispatch( movie(data.results))
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}

export const searchMovie = (payload)=>{
    return (dispatch) =>{
        fetch(SEARCH_API+`${ payload }`)
          .then(res => res.json())
          .then((data)=>{
            dispatch(movie(data.results))
          })
    }
}