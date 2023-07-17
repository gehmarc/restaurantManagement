import React from 'react'
import { GoSearch } from 'react-icons/go'

const Search = () => {
  return (
    <div className="search-container" data-search-container>

        <div className="search-box">
        <input type="search" name="search" aria-label="Search here" placeholder="Search..."
            className="search-input"/>

        <button className="search-submit" aria-label="Submit search" data-search-submit-btn>
            <GoSearch />
        </button>
        </div>

        <button className="search-close-btn" aria-label="Cancel search" data-search-close-btn></button>

    </div>
  )
}

export default Search
