// src/components/BeerCard.jsx
import React from 'react';
import './Beercard.css'

const BeerCard = ({ beer }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-80">
        <img src={beer.image} className="card-img-top" alt={beer.name} />
        <div className="card-body">
          <h5 className="card-title">{beer.name}</h5>
          <p className="card-text">{beer.description}</p>
          <p className="card-text">Price:{beer.price}</p>
         
        </div>
      </div>
    </div>
  );
};

export default BeerCard;
