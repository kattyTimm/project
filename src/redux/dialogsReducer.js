
const ADD_MESSAGE = 'ADD-MESSAGE';
const NEW_MESSAGE_TEXT = 'NEW-MESSAGE-TEXT';

let initialState = {
      dialogsData: [
        {name:"Dima", id:1},
        {name:"Lera", id:2},
        {name:"mama", id:3},
      ],

      messagesDate: [
        {message: "from Dima", id:1},
        {message: "from Lera", id:2},
        {message: "from mama", id:3},
      ],

      newMessageText: ''
    
};

const dialogsReducer = (state = initialState, action) => {
// state = this._state.dialogs
switch(action.type){
  case ADD_MESSAGE:{
      let id = state.messagesDate.length + 1;
      return {...state, 
                      messagesDate: [...state.messagesDate, {message: state.newMessageText, id:id}],
                      newMessageText: ''};

  }
  case NEW_MESSAGE_TEXT:{
      return {...state, newMessageText: action.value}     

  }
  default :return state;
  }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const newMessageTextActionCreator = (text) =>  ({type: NEW_MESSAGE_TEXT, value: text});

export default dialogsReducer;