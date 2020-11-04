import React from 'react';
import s from './Users.module.css';

const Users = (props) => {
  return (
      <div>    
          {props.state.usersData.map((u, i) => <div key={i} id={u.id}>{u.user}</div>)}
      </div> 

  );
}

export default Users;
