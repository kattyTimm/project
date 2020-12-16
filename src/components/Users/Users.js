import React from 'react';
import {NavLink} from 'react-router-dom';
import * as axios from 'axios';

import s from './Users.module.css';
import userPhoto from '../../assets/imgs/userPhoto.jpg';
import {usersApi} from '../../redux/api';


const Users = (props) =>{

console.log(props)
	let btnQuantity = Math.ceil(props.totalCount / props.pageSize);
	let itemArr = [];

	for(let i = 1; i < btnQuantity; i++){
		itemArr.push(i);
	}
	  
	let pageItems = itemArr.map((item, i) => {
		return <span key={i} onClick={ (e) => props.onPageChanged(item)} className={props.currentPage === item && s.selectedPage}>
		           {item}
		       </span> 
	});

 
  return <div> 
              <div id="pagination_tmp">
                     {
                     	pageItems
                     }
              </div>	

              {
              	props.usersData.map((u, i) => {
              		return <div key={i} id={u.id}>
              		          <NavLink to={`/profile/${u.id}`}>
                                  <img src={u.photos.small ? u.photos.small : userPhoto} className={s.ava}/>
              		          </NavLink>

              		          <div>
                                  <span>
                                     {u.name}
                                  </span>
                                   <span>
                                     {u.status}
                                  </span>
                              </div>

                              {u.followed  
                              	 ? <button disabled={props.followingProgress.some(id => id === u.id)}
                                           onClick={ () => { props.unfollow(u.id) } } > 
                                  unfollow </button>
                              	 : <button disabled={props.followingProgress.some(id => id === u.id)} 
                                           onClick={ () => { props.follow(u.id) } }>
                                   follow</button>
                              }                                 
              		</div>
              	})
              }	          
        </div>    
}

export default Users;


/*
 props.togglefollowingProgress(true, u.id);

                                           usersApi.unfollow(u.id)
                                                 .then(resp => { 
                                                    
                                                    if(resp.data.resultCode === 0){
                                                       props.unfollow(u.id)
                                                    } 
                                                    props.togglefollowingProgress(false, u.id);
                                                 })


props.togglefollowingProgress(true, u.id);
                                                 usersApi.follow(u.id)
                                                 .then(resp => { 
                                                    if(resp.data.resultCode === 0){
                                                        props.follow(u.id)
                                                    } 
                                                    props.togglefollowingProgress(false, u.id);
                                                 })



                                                 */