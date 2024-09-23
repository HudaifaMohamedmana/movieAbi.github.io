import React, { useState } from 'react'

function Form({getMovie}) {
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
          type="text"
          name="searchterm"
          onChange={handleChange}
          value={formData.searchterm}
        />
        <input type="submit" value="submit" />
      </form>
    
    </div>
  )
}

export default Form