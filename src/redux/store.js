import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import usersReducer from './usersReducer';

let store = {

  _state: {

    profile :{
    	postsData: [
          {text: "hello", id: 1},
          {text: "ququ", id: 2},
          {text: "new", id: 3},
      ],
      newPost: ''
    },

    dialogs: {
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
    }, 

    users:{
       usersData:[
          {user: 'Dima', id: 1},
          {user: 'Lera', id: 2},
          {user: 'mama', id: 3},
       ]
    } 
  },

  getState: function(){
    return this._state;
  },

  _rerenderEntireTree(){}, // entire - whole

  subscribe(observer){
    this._rerenderEntireTree = observer;
  },

  dispatch: function(action){
      this._state.profile = profileReducer(this._state.profile, action);
      this._state.dialogs = dialogsReducer(this._state.dialogs, action);
      this._state.users = usersReducer(this._state.users, action);

      this._rerenderEntireTree(this._state);
  }
};

window.store = store;
export default store;