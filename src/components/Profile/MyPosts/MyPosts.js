import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
//import {addPostActionCreator, addNewPostTextActionCreator} from './../../../redux/profileReducer';

const MyPosts = (props) => {

 let refElem = React.createRef();

 let onAddNewPostClick = () => {
   props.addNewPostClick();
 //	props.dispatch(addPostActionCreator());
 } 

 let onPostChange = () => {
 	let val = refElem.current.value;
  props.postChange(val);
// 	props.dispatch(addNewPostTextActionCreator(val));
 }

  return (
      <div> 
           <h6>MyPosts</h6>
           <div>
                <textarea ref={refElem} onChange={onPostChange} value={props.newPost}/>
           </div>  
            <div>
                <button onClick={onAddNewPostClick}>add post</button>
           </div> 
            {props.postsData.map((item, i) => <Post key={i} className={s.item} text={item.text} id={item.id} />)}
      </div> 

  );
}

export default MyPosts;
