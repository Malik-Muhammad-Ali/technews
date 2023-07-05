import React, { useContext } from 'react';
import { AppContext } from './Context/context';

const Search = () => {

  const { query, searchPost } = useContext(AppContext);

  return (
    <>
      <div className="search-div">
        <h1>Welcome to Tech News</h1>
        <p>Made By Malik Muhammad Ali</p>
        <input  type="email" 
                className="form-control" 
                id="floatingInput" 
                placeholder="Search" 
                value={query}
                onChange={(e)=> searchPost(e.target.value)}
        />
      </div>
    </>
  )
}

export default Search;