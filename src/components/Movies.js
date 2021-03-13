import React from 'react'

//? This is the image api url which will be appended with poster_path to render the image

//* Here w780 represents the poster size,
//* available sizes are 92 ,154 ,185 ,500 ,780 and 'original'

const IMAGE_API = 'https://image.tmdb.org/t/p/w780'

//? Here the values are directly passed as props instead of props
//? Honestly i have no idea why this is used

const Movies = ({ title, poster_path, overview, vote_average })=>{
    return(
        <div className="movie">
            <img src={IMAGE_API + poster_path } alt={ title }/>
            <div className="fix">
            <h3 className="maintitle">{ title }</h3>
            {
                (vote_average < 8) ? (
                (vote_average > 6 ) ? <span className="mid">{vote_average}</span>
                : <span className="end">{vote_average}</span>
                ) :
                (
                    <span>{ vote_average }</span>
                )
            }
            </div>
            <hr />
            <div className="overview">
                <div className='maincontent'>
                    <h3> Overview </h3>
                    {overview}
                </div>
            </div>
        </div>
    )
}

export default Movies;
