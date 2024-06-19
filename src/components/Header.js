import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='Page-header-container'>
        <header className='Name'>Yusen Peng (彭禹森)</header>
        <ul className='Page-header-list'>
          <li><Link className='Link' to="/">Home</Link></li>
          <li><Link className='Link' to="/education">Education</Link></li>
          <li><Link className='Link' to="/research">Research</Link></li>
          <li><Link className='Link' to="/industry">Internship</Link></li>
        </ul>
    </div>
  );
};

export default Header;