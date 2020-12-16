import React from 'react';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {addMessageActionCreator, newMessageTextActionCreator} from './../../redux/dialogsReducer';

 let mapStateToProps = (state) => {
   return {
       dialogsData: state.dialogs.dialogsData,
       newMessageText: state.dialogs.newMessageText,
       messagesDate: state.dialogs.messagesDate
   } 
 };

 let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => dispatch(addMessageActionCreator()),
    printNewMessageText: (val) => dispatch(newMessageTextActionCreator(val))
  }
 };

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);
/*
const DialogsContainer = (props) => {
  let dialogsData = props.state.dialogsData;
  let newMessageText = props.state.newMessageText;
  let messagesDate = props.state.messagesDate;

  let addMessage = () => {
     props.dispatch(addMessageActionCreator());
  }

  let printNewMessageText = (val) => {
     props.dispatch(newMessageTextActionCreator(val));
  };

  return (
      <Dialogs addMessage={addMessage} printNewMessageText={printNewMessageText} 
               dialogsData={dialogsData} newMessageText={newMessageText} messagesDate={messagesDate}/> 

  );
}
*/
export default DialogsContainer;
