import './Header.css'
import React from 'react';
import { NavLink } from 'react-router-dom';

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
    <>
      <h1>The Daily Scoop</h1>
      <div>{sectionLinks}</div>
    </>
  )  
}

export default Header