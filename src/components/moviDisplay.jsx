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
        <img src="https://media2.giphy.com/media/uIJBFZoOaifHf52MER/giphy.gif?cid=6c09b95292w6xelslxhghnmi3kf8r8xbmkrnh2zlkxd0388f&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="" />      
      </>
    )
  }

  return movie ? loaded() : loading()
}

export default MoviDisplay