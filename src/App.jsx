import { useEffect, useState } from 'react'
import './App.css'
import Form from './components/Form'
import MoviDisplay from'./components/moviDisplay'

function App() {
  const [movie, setMovie] = useState(null)
  const ApiKey = '60c8563'
  //-------------------------------------------------------------------------
  const  getMovie = async(term)=>{
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${ApiKey}&t=${term}` )

     const data = await response.json()
     console.log(data)

     setMovie(data)
  }


  useEffect(() => {
    getMovie('godfather');
  }, []);  
  
  return (
    <>

     <Form getMovie={getMovie} />
     <MoviDisplay movie={movie} />
    </>
  )
}

export default App
