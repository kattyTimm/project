import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './../Dialogs.module.css';

const DialogItem = (props) => {
    return  <div className={ `${s.dialogItem} ${s.aciveDialog}` }>
                  <NavLink to={ `/dialogs/${props.id}` } activeClassName={s.aciveDialog}>
                       {props.name}
                  </NavLink>  
	          </div>             
}

export default DialogItem;
