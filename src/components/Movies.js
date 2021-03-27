import React from 'react'

//? This is the image api url which will be appended with poster_path to render the image

//* Here w780 represents the poster size,
//* available sizes are 92 ,154 ,185 ,500 ,780 and 'original'

const IMAGE_API = 'https://image.tmdb.org/t/p/w780'

//? Here the values are directly passed as props instead of props
//? Honestly i have no idea why this is used

const Movies = ({ title, poster_path, overview, vote_average }) => {
    return (
        <div className="movie">
            <img src={poster_path ? (IMAGE_API + poster_path) :
                "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"} alt={title} />
            <div className="fix">
                <h3 className="maintitle">{title}</h3>
                {
                    (vote_average < 8) ? (
                        (vote_average > 6) ? <span className="mid">{vote_average.toFixed(1)}</span>
                            : <span className="end">{vote_average.toFixed(1)}</span>
                    ) :
                        (
                            <span>{vote_average.toFixed(1)}</span>
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
