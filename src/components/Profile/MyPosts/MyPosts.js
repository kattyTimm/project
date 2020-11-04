import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, addNewPostTextActionCreator} from './../../../redux/profileReducer';

const MyPosts = (props) => {

 let refElem = React.createRef();

 let addNewPostClick = () => {
 	props.dispatch(addPostActionCreator());
 } 

 let postChange = () => {
   debugger;
 	let val = refElem.current.value;
 	props.dispatch(addNewPostTextActionCreator(val));
 }

  return (
      <div> 
           <h6>MyPosts</h6>
           <div>
                <textarea ref={refElem} onChange={postChange} value={props.state.newPost}/>
           </div>  
            <div>
                <button onClick={addNewPostClick}>add post</button>
           </div> 
            {props.state.postsData.map((item, i) => <Post key={i} className={s.item} text={item.text} id={item.id} />)}
      </div> 

  );
}

export default MyPosts;
