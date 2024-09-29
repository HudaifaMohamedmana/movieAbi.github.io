import React from 'react'

function MoviDisplay({movie}) {
  const loaded = ()=>{
    return(
      <>
      <div className="flex" >      
        <div className="poster">
        <img src={movie.Poster} alt="" />
        <div className='stars'>Ratings: {movie.Ratings[0].Value}</div>
        Year: {movie.Year}

      </div>
      <div className='dec'>
      <div className="title"> 
        <h2>{movie.Title}</h2>
        </div>
        

      <div className="info">
        genre: {movie.Genre}
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
        <img src="https://media2.giphy.com/media/uIJBFZoOaifHf52MER/giphy.gif?cid=6c09b95292w6xelslxhghnmi3kf8r8xbmkrnh2zlkxd0388f&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="" />      
      </>
    )
  }

  return movie ? loaded() : loading()
}

export default MoviDisplay