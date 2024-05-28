// src/App.jsx
import React, { useEffect, useState } from 'react';
import BeerCard from './components/BeerCard';
import Search from './components/Search';
import axios from 'axios';
import './App.css';

const App = () => {
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://api.sampleapis.com/beers/ale')
      .then(response => setBeers(response.data))
      .catch(error => console.error('Error fetching the beers:', error));
  }, []);

  const filteredBeers = beers.filter(beer =>
    beer.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Beer List</h1>
      <Search search={search} setSearch={setSearch} />
      <div className="row">
        {filteredBeers.map(beer => (
          <BeerCard key={beer.id} beer={beer} />
        ))}
      </div>
    </div>
  );
};

export default App;
