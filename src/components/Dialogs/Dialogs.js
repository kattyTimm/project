import React from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import {addMessageActionCreator, newMessageTextActionCreator} from './../../redux/dialogsReducer';

 
const Dialogs = (props) => {

  console.log(props);
  let refElem = React.createRef();

  let addMessage = () => {
     props.addMessage();
  }

  let printNewMessageText = () => {
     props.printNewMessageText(refElem.current.value);
  };

   if(!props.isAuth) return <Redirect to='/login' />

  return (         
        <div className={s.content}>    
            <div className={s.dialogs}>
               {props.dialogsData.map((obj, i) => <DialogItem key={i} name={obj.name}  id={obj.id} />)}             
            </div>

            <div className={s.messages}>
                {props.messagesDate.map((obj,i) => <MessageItem key={i}  message={obj.message} id={obj.id} />)}	                    
            </div>

            <textarea onChange={printNewMessageText} value={props.newMessageText} ref={refElem}/>  
            <button onClick={addMessage}>add message</button>
        </div> 

  );
}



export default Dialogs;
