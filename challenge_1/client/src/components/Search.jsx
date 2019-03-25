import React from 'react';


const Search = ({handleChange, handleClick}) => (
  <div>
    <h3>Please enter keyword to search historical events</h3>
    <br/>
    <input type="text" id="search" onChange={handleChange}></input>
    <button onClick={handleClick}>Search</button>
  </div>
)

export default Search;