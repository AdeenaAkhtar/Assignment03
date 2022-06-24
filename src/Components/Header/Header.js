import React from 'react'
import './header.css';
import Logo from '../../../src/logo.png';
const Header = () => {
  return (
    <header className='header'>
    <div className='header-left'>
        <div className='logo'><img src={Logo} className="logo-img" alt="logo" />
        <h1>Flora</h1>
    </div>
        <div className='menu'>
            <ul>
                <li> <a href="Home">Home</a></li>
                <li className='active'> <a href="Gallery">Gallery</a></li>
                <li> <a href="About">About</a></li>
                <li> <a href="Contact">Contact</a></li>
            </ul>
        </div>
    </div>
</header>
  )
}
export default Header;
