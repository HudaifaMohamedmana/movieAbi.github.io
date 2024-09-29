import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import MoviDisplay from'./components/moviDisplay'

function App() {
  const [movie, setMovie] = useState(null)
  const ApiKey = '60c8563'
  return (
    <div className='main'>
     <nav>
      
      <img src="https://www.pngplay.com/wp-content/uploads/9/20th-Century-Fox-Background-PNG.png" alt="" />
      <div></div>
      <div></div>
      <Form setMovie={setMovie} ApiKey={ApiKey}/>
      </nav>
     <MoviDisplay movie={movie} />
    </div>
  )
}

export default App
