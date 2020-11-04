import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';


const Navbar = () => {
  return (
      <nav className={s.nav}>
         <NavLink to='/dialogs' activeClassName={s.activeLink}>dialogs </NavLink>
         <NavLink to='/profile' activeClassName={s.activeLink}>profile </NavLink>
         <NavLink to='/users' activeClassName={s.activeLink}>users </NavLink>
      </nav>  
  );
}

export default Navbar;
