import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import {addMessageActionCreator, newMessageTextActionCreator} from './../../redux/dialogsReducer';

 
const Dialogs = (props) => {
  let refElem = React.createRef();

  let addMessage = () => {
     props.dispatch(addMessageActionCreator());
  }

  let printNewMessageText = () => {
     props.dispatch(newMessageTextActionCreator(refElem.current.value))
  };

  return (
      <div className={s.content}>    

          <div className={s.dialogs}>
             {props.state.dialogsData.map((obj, i) => <DialogItem key={i} name={obj.name}  id={obj.id} />)}             
          </div>

          <div className={s.messages}>
              {props.state.messagesDate.map((obj,i) => <MessageItem key={i}  message={obj.message} id={obj.id} />)}	                    
          </div>

          <textarea onChange={printNewMessageText} value={props.messageText} ref={refElem}/>  
          <button onClick={addMessage}>add message</button>

      </div> 

  );
}

export default Dialogs;
