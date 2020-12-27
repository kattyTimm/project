import React from 'react';
import {NavLink} from 'react-router-dom';

import s from './Header.module.css';
import PreloaderTop from '../common/PreloaderTop/PreloaderTop';

const Header = (props) => {
  console.log(props)
  return (  <>
  	
     <header className={s.header}>
           <div className={s.loginBlock}>
                

               <div>
               {    props.actIdPhoto ? <img src={props.actIdPhoto} className={s.miniAva}/> : ''
                 	            
               }
               </div>

                <div className={s.starusTop}>
                    <span>
  	                  { props.isAuth ? props.login : <NavLink to='/login'>login</NavLink> }
  	                </span> 
  	               <span>
  	                  {props.topStatus ? props.topStatus : ''} 
  	               </span>
                
                </div>


            </div>
     </header>   
     </> 
  );
}

export default Header;
/*
     {
               	props.isAuth ? props.login : <NavLink to='/login'>login</NavLink>             
               }
               {
               	props.actIdPhoto ? <img src={props.actIdPhoto} /> : ''
               } 
           */    