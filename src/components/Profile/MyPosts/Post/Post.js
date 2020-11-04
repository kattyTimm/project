import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
      <div className={s.post}>  

           <img src="https://demotivation.ru/wp-content/uploads/2020/04/100325-yana.jpg" />
           <span>
               {props.text}
           </span>

      </div> 

  );
}

export default Post;
