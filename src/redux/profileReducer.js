//let rerenderEntireTree = () => {}; // entire - whole
const ADD_POST = 'ADD-POST';
const NEW_POST_TEXT = 'NEW-POST-TEXT';

let initialState = {
   profile :{
      postsData: [
          {text: "hello", id: 1},
          {text: "ququ", id: 2},
          {text: "new", id: 3},
      ],
      newPost: ''
    }
};

const profileReducer = (state = initialState, action) => {
  debugger;
  console.log('profileReducer')

  switch(action.type){
    case ADD_POST:{
      let id = state.postsData.length + 1;
        state.postsData.push({text: state.newPost, id});
        state.newPost = '';
        return state;
    }
    case NEW_POST_TEXT: {
      state.newPost = action.value;    
      return state;
    }
    default: return state;
  }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const addNewPostTextActionCreator = (val) => ({type: NEW_POST_TEXT, value: val});

export default profileReducer;