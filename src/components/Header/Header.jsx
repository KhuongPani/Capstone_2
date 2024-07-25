import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import ImgHeader from '../../assets/image1.png';

const Header = () => {
  const navigate = useNavigate();

  const handleHeaderClick = () => {
    navigate('/');
  };

  return (
    <div className="header" onClick={handleHeaderClick}>
      <img src={ImgHeader} alt="Header" />
    </div>
  );
};

export default Header;
