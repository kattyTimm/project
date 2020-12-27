import {authApi, profileApi} from './api';

const SET_USER_DATA = 'SET-USER-DATA';
const SET_IMG_URL_ACTIVE_USER = 'SET-IMG-URL-ACTIVE-USER';
const SET_TOP_STATUS = 'SET-TOP-STATUS';

let initialState = {
   id: null,
   email: null,
   login: null,
   isAuth: false,
   isFetching: true,
   actIdPhoto: null,
   topStatus: null 
};

const authReducer = (state = initialState, action) => {
  switch(action.type){
    case SET_USER_DATA:{
      //  чтобы не передавать несколько параметров в акшн креэйтор можно передатиь просто объект ...action.data
          return {...state, ...action.data, isAuth: true,  isFetching: false };
    }
    case SET_IMG_URL_ACTIVE_USER: {
      return {...state, actIdPhoto: action.url}
    }
    case SET_TOP_STATUS: {
         return {...state, topStatus: action.status};
    }
    default:{
      return state;
    }
  }
};


 const setAuthUserDataAC = (id, email, login) => ( {type: SET_USER_DATA, data: {id, email, login} } );
 const smallImgUrlAC = (url) => ({type: SET_IMG_URL_ACTIVE_USER, url});
 const setTopStatusAC = (value) => ({type: SET_TOP_STATUS, status: value});

export const setUserDataThunk = () => {
  return dispatch => {
      authApi.auth().then(data => {
      
      if(data.resultCode === 0){
        let {id, email, login} = data.data;
           dispatch(setAuthUserDataAC(id, email, login));
      

          profileApi.getProfile(`${id}`).then(data => {
                  console.log(data)
                 let smallImgUrl = data.photos.small;
                 dispatch(smallImgUrlAC(smallImgUrl));
                 dispatch(setTopStatusAC(data.aboutMe));
          }); 
        }
     });
  }
}


export default authReducer;

/*
let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false
};

const authReducer = (state = initialState, action) => {
  switch(action.type){
      case SET_USER_DATA:{
        return {...state, ...action.data};
      }
      case LOGOUT: {
        return {...state, id: null, login: null};
      }
      default: {
        return state;
      }
  }
};

export const setAuthUserDataAC = (id, email, login) => ({ type: SET_USER_DATA, data: {id, email, login} });
export const logoutAC = () => ({type: LOGOUT});




*/