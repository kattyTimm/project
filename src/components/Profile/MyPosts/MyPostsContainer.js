import React from 'react';
import {connect} from 'react-redux';

import {addPostActionCreator, addNewPostTextActionCreator} from './../../../redux/profileReducer';
import MyPosts from './MyPosts';


let mapStateToProps = (state) => {
  return {
    postsData: state.profile.postsData,
    newPost: state.profile.newPost,
  };
}; 

let mapDispatchToProps = (dispatch) => {
  return {
    addNewPostClick: () => dispatch(addPostActionCreator()),
    postChange: (val) => dispatch(addNewPostTextActionCreator(val))
  }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

/*
const MyPostsContainerOld = (props) => {
 let postsData = props.state.postsData;
 let newPost = props.state.newPost;

 let addNewPostClick = () => {
 	props.dispatch(addPostActionCreator());
 } 

 let postChange = (val) => {
 //	let val = refElem.current.value;
 	props.dispatch(addNewPostTextActionCreator(val));
 }

  return (
      <MyPosts addNewPostClick={addNewPostClick} postChange={postChange} postsData={postsData} newPost={newPost} /> 

  );
}
*/

