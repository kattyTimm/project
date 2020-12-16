import React from 'react';
import {connect} from 'react-redux';
import * as axios from 'axios';

import s from './Users.module.css';
import userPhoto from '../../assets/imgs/userPhoto.jpg';

const Users = (props) => {	
  
  // если закгрузить пользователей без проверки то будет ошибка слишком большой вложенности вызовов
  // адрес котика - 'https://krot.info/uploads/posts/2018-06/1529538875_mtpoxu2bul.jpg'
  if(props.usersData.length === 0){
  	
     axios.get('https://social-network.samuraijs.com/api/1.0/users').then(resp => {
     	props.setUsers(resp.data.items);
     	console.log(resp.data);
     });

  }
  return <div>    
          {
          	props.usersData.map((u, i) => {
          	  return <div key={i} id={u.id}>
          	            <span>
          	                  <img className={s.ava} src={u.photos.small 
          	                  	? u.photos.small
                                : userPhoto
          	                  } />
          	           </span>
          	            <span>{u.status} </span>
          	            <span>{u.name} </span>
                        
                        <span>
                           {u.followed ? <button onClick={ ()=> {props.unfollow(u.id)} }>Unfollow</button> 
                           	           : <button onClick={ ()=> {props.follow(u.id)} }>Follow</button>}
                        </span>
          	            
          	         </div>})
          }
      </div> 

};

export default Users;
