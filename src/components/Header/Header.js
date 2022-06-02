import './Header.css'
import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Header({ sections }) {
  const sectionLinks = sections.map((section) => {
    return (
    <NavLink key={section} 
    to={`/${section}`}
    className={({isActive}) => {
      return isActive ? 'active' : '';
    }}> 
      <button>
      {section} 
      </button>
    </NavLink>)
  }
  
  )
  return (
    <header>
      <Link to='/'> <h1>The Daily Scoop</h1> </Link>
      <div>{sectionLinks}</div>
    </header>
  )  
}

export default Header