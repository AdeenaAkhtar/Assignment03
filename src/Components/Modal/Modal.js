import React from 'react'
import './modal.css'
const Modal = () => {
    const closeFullscreen = event => {
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
      };
  return (
    <div id="myModal" className="modal">
      <span className="close" onClick={closeFullscreen}>&times;</span>
      <img className="modal-content" id="img" alt='fullscreen'></img>
    </div>
  )
}
export default Modal;