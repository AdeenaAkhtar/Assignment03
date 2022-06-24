import React from 'react'
import './cover.css';
import cover from '../../../src/cover.jpeg';
const Cover = () => {
  return (
  <div className='cover'>
    <div className='cover-img'>
        <img src={cover} alt="Forest" width="100%" height="100%"></img>
        <div className='cover-text'>
            <h3>Take a look at the beauty the flora hold...</h3>
        </div>
    </div>
</div>
  )
}
export default Cover;

