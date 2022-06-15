import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import ROUTES from '../../routes';
import './Header.css';
import { VscMenu } from "react-icons/vsc";

function Header() {
  const [isOpen , setIsOpen ] = useState(false);

  return (
   
      <div className={`header ${isOpen ? "active": ''}`}>
        <button className='header-winkel__btn' onClick={() => setIsOpen( !isOpen )}>
        <VscMenu />
        </button>
        <ul className='header-menu'>
          {
           Object.keys(ROUTES).map(route => (
            <li key={route}>
               <NavLink className="header-menu__link"
               state={( {isActive})=> {
                 return {
                   background:isActive ? 'green' : "red",
                 };
                  
               }}
               to={ROUTES[route]}>
                  {route}
              </NavLink>
            </li>
            ))};
       </ul>
      </div>
       
  );
};

export {Header} ;