import React from 'react';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {addMessageActionCreator, newMessageTextActionCreator} from './../../redux/dialogsReducer';

import {AuthRedirectComponent} from '../../hoc/AuthRedirectComponent';

 let mapStateToProps = (state) => {
   return {
       dialogsData: state.dialogs.dialogsData,
       newMessageText: state.dialogs.newMessageText,
       messagesDate: state.dialogs.messagesDate,
   } 
 };

 let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => dispatch(addMessageActionCreator()),
    printNewMessageText: (val) => dispatch(newMessageTextActionCreator(val))
  }
 };

//let DialogsComponentWithRedirect = AuthRedirectComponent(Dialogs);

//const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(DialogsComponentWithRedirect);

// compose сама вызовет AuthRedirectComponent и connect для Dialogs, и оборнет ее в контейнерные компоненты
export default compose(
  connect(mapStateToProps,mapDispatchToProps),
   AuthRedirectComponent
  )(Dialogs);



