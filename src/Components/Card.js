import React from 'react';
import './flowers.css';
function Card({flower}) {
  const displayFullscreen = event => {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img");
    modal.style.display = "block";
    modalImg.src = event.target.src;
  };
  return( 
      <div className='card'>
        <img alt={flower.name} src={process.env.PUBLIC_URL + flower.imgPath}  onClick={displayFullscreen}/>
        <div className='text'>
        <h2>{flower.name}</h2>
        <p>{flower.scientific}</p>
        
        </div>
      </div>
  );
}
export default Card;

