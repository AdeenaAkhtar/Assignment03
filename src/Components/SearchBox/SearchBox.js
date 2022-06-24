import React, { useState } from 'react';
import CardList from '../CardList';
import './searchBox.css';
function SearchBox({ details }) {

  const [searchField, setSearchField] = useState("");

  const filteredFlowers = details.filter(
    flower => {
      return (
        flower.name.toLowerCase().includes(searchField.toLowerCase()) ||
        flower.scientific.toLowerCase().includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  function cardList() {
    return (
        <CardList filteredFlowers={filteredFlowers} />
    );
  }

  return (
	<div>
    <div className='center'>
		<input className ='searcher' placeholder='Search The Flowers' onChange={handleChange}/></div>
      {cardList()}
    </div>
  );
}
export default SearchBox;