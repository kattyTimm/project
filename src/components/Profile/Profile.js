import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

/*
  let postsData = [
      {text: "hello", id: 1},
      {text: "ququ", id: 2},
      {text: "new", id: 3},
  ];
  */
  return (
      <div className={s.content}>    

        <ProfileInfo />
        <MyPosts state={props.state} dispatch={props.dispatch} />
        
      </div> 

  );
}

export default Profile;
