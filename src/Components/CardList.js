import React from 'react';
import Card from './Card';
import './flowers.css';
function CardList({ filteredFlowers }) {
  const filtered = filteredFlowers.map(flower =>  <Card key={flower.id} flower={flower} />); 
  return (
    <div className='container'>
      {filtered}
    </div>
  );
}
export default CardList;