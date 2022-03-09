import React, { useState } from 'react';

function Search(props) {
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
    props.searchFood(event.target.value);
  };

  return (
    <div className="container">
      <label htmlFor="search">Search</label>
      <input type="text" name="search" value={search} onChange={handleSearch} />
    </div>
  );
}

export default Search;
