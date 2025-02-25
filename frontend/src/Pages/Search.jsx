import React from 'react';
import './CSS/Search.css';


const Search = (props) => {

  return (
    <div className='search'>
      <div>
        <input type='search' placeholder='Enter Product Name' />
      </div>
    </div>
  );
};

export default Search;