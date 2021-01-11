//let rerenderEntireTree = () => {}; // entire - whole
import {profileApi} from './api';

const ADD_POST = 'ADD-POST';
const NEW_POST_TEXT = 'NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
      postsData: [
          {text: "hello", id: 1},
          {text: "ququ", id: 2},
          {text: "new", id: 3},
      ],
      newPost: '',
      profile: null
};

const profileReducer = (state = initialState, action) => {

  switch(action.type){
    case ADD_POST:{
      let id = state.postsData.length + 1;
      let newPostText = {text: state.newPost, id};
                              /// , {text: state.newPost, id} - это внусто push, засуниуть элемент в массив
      return {...state, postsData: [...state.postsData, {text: state.newPost, id}], newPost: ''};
    }
    case NEW_POST_TEXT: {

      return {...state, newPost: action.value}; 
    }
    case SET_USER_PROFILE : {
        return {...state, profile:action.profile}
    }
    default: return state;
  }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const addNewPostTextActionCreator = (val) => ({type: NEW_POST_TEXT, value: val});
const setUserPropfileAC = (profile) => ({type: SET_USER_PROFILE, profile: profile});

export const getProfileThunk = (userId) => {
  return dispatch => {
      profileApi.getProfile(userId).then(data => {     
        
        dispatch(setUserPropfileAC(data));
      });
  }
}

export default profileReducer;