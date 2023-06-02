import React from 'react';
import './Header.css';
function Search() {

  return (
    <div>
        
       <form action="" className="search-form" >
             <input type ="search" placeholder="search here...." name="search" id="search-box" />
            <label for="search-box" className="fas fa-search"></label>
            {/* <input type='submit' value='search'></input> */}
            <div id="search-btn" className="fas fa-search"></div>
     </form>`
    </div>
  )
}

export default Search
