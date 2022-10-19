import React, { useState } from 'react'
import "./SearchBox.css";

export default function SearchBox({searchValue, setSearchValue}) {

  return (
    <div className='search'>
        <input type="text" value={searchValue} placeholder={`Search any movie...`} 
        onChange={(e) => setSearchValue(e.target.value) } className='search-text'/> 
    </div>
  )
}
