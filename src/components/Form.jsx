import React, { useState, useEffect, useContext} from 'react'
import { MovieContext } from '../App';

function Form() {
  const ApiKey = '60c8563'
  const { setMovie } = useContext(MovieContext);



  const  getMovie = async(term)=>{
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${ApiKey}&t=${term}`)

     const data = await response.json()
     console.log(data)

     setMovie(data)
  }


  useEffect(() => {
    getMovie('godfather');
  }, []);  
  
  const [formData,setFormData]= useState({
    searchterm:''
});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovie(formData.searchterm);
  };

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <input
          className='text'
          type="text"
          name="searchterm"
          onChange={handleChange}
          value={formData.searchterm}
          placeholder="Search for a movie..."
        />
        <input className='submit' type="submit" value="search" />
      </form>
    
    </div>
  )
}

export default Form