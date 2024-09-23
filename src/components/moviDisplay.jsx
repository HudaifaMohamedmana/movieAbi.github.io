import React from 'react'

function MoviDisplay({movie}) {
  const loaded = ()=>{
    return(
      <>
      <div className="flex" >      
        <div className="poster">
        <img src={movie.Poster} alt="" />
      </div>
      <div >
      <div className="title"> 
        {movie.Title}
        </div>

      <div className="info">
        genre: {movie.Genre}
        <hr />
        Year: {movie.Year}
        <hr />

       {movie.Plot}
      </div>
      </div>

    </div>
      
      </>
    )
  }
  const loading = ()=>{
    return(
      <>
      <h1>Now is Loading</h1>
      
      </>
    )
  }

  return movie ? loaded() : loading()
}

export default MoviDisplay