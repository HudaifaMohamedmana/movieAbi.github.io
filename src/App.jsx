import { useState , createContext} from 'react'
import './App.css'
import { Nav } from './components/Nav'
import MoviDisplay from'./components/moviDisplay'


export const MovieContext = createContext();

function App() {
  const [movie, setMovie] = useState(null)
  let fiverit = []
  createContext(movie,setMovie,fiverit)

  return (
    <MovieContext.Provider value={{ movie, setMovie }}>
      <div className='main'>
        <Nav setMovie={setMovie}/>
        <MoviDisplay movie={movie} />
      </div>
    </MovieContext.Provider>

  )
}

export default App
