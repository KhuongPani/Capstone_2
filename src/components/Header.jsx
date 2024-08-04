import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.scss';
import ImgHeader from '../assets/image1.png';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <img src={ImgHeader} alt="Header Image" className="header-image" />
      <nav className="header-nav">
        <button className="nav-button" onClick={() => navigate('/')}>Home</button>
        <button className="nav-button" onClick={() => navigate('/products')}>Products</button>
        <button className="nav-button" onClick={() => navigate('/register')}>Register</button>
      </nav>
    </header>
  );
};

export default Header;
