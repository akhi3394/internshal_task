// src/components/Search.jsx
import React from 'react';

const Search = ({ search, setSearch }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Search beers..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
