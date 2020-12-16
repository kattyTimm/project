import {usersApi} from './api';

const FOLLOW = 'FOLLOW';
const UnFOLLOW = 'UnFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';

let initialState = {
    usersData: [],
    totalCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: true,
    followingProgress: []
};

const usersReducer = (state = initialState, action) => {
     switch(action.type){
     	case FOLLOW: {
           return {...state, 
                      usersData :state.usersData.map((u, i) => {
                         if(u.id === action.id){
                         	return {...u, followed: true};
                         }else{
                         	return u;
                         }
                      })
                  };

        }
        case UnFOLLOW: {
        	return {...state, usersData: state.usersData.map((u, i) => {
                       if(u.id === action.id){
                       	return {...u, followed: false};
                       }else{
                       	return u;
                       }
        	       })
            };
        }

        case SET_USERS: {
        	return {...state, usersData: action.users};
        }
        case SET_CURRENT_PAGE:{
        	return {...state, currentPage: action.page};
        }

        case SET_TOTAL_USERS_COUNT:{
        	return {...state, totalCount: action.quantity};
        }

        case TOGGLE_IS_FETCHING: {
        	return {...state, isFetching: action.fetch};
        }

        case TOGGLE_FOLLOWING_PROGRESS: {
                     // если action.isFetching равно тру, то добавить айди, либо отфильтровать
                     /*  
                        let arr = [1,2,3,45];
                        let a = 3;
                        arr.filter(num => num !== a);
                        вернет - [1, 2, 45]

                     */

              return {...state, followingProgress: action.isFetching 
                               ? [...state.followingProgress, action.userId]
                               : state.followingProgress.filter(id => id != action.userId)}
   
        }

     	default: return state;
     }
   
}



/// actionCreator это функция, возвращащая объект action для редьюсора
export const follow = (userId) => ({type: FOLLOW, id: userId}); 
export const unFollow = (userId) => ({type: UnFOLLOW, id: userId}); 
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (pageNum) => ({type: SET_CURRENT_PAGE, page: pageNum});
export const setTotalUsersCount = (usersQuantity) => ({type: SET_TOTAL_USERS_COUNT, quantity: usersQuantity});
export const toggleIsFetching = (val) => ({type: TOGGLE_IS_FETCHING, fetch: val});
export const togglefollowingProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId});

// внешняя функция вовращает thunkу и кидает в нее параметры
export const getUsersThunkCreator = (currentPage = 1, pageSize = 10) => {
  return dispatch => {

      dispatch(toggleIsFetching(true));

      usersApi.getUsers(currentPage, pageSize).then( resp => {
          dispatch(toggleIsFetching(false));
          dispatch(setUsers(resp.items));
          dispatch(setTotalUsersCount(resp.totalCount));
      });
   }
}

export const unFollowThunk = (id) => { 
   return dispatch => {
              dispatch(togglefollowingProgress(true, id));

              usersApi.unfollow(id)
                 .then(resp => { 
                    
                    if(resp.data.resultCode === 0){
                       dispatch(unFollow(id))
                    } 
                    dispatch(togglefollowingProgress(false, id));
                 })
   }
} 


export const followThunk = (id) => {
  return dispatch => {
       dispatch(togglefollowingProgress(true, id));
                     usersApi.follow(id)
                      .then(resp => { 
                        if(resp.data.resultCode === 0){
                            dispatch(follow(id))
                        } 
                        dispatch(togglefollowingProgress(false, id));
                     })
  }
}

export default usersReducer;


/*

{...state, followingProgress : action.isFetching 
                            ?  [...state.followingProgress, action.userId] 
                            : state.followingProgress.filter(id => id != action.userId) };

return {...state, 
				   // usersData: [...state.usersData] идентично копированию через map : 
                     usersData: usersData.map((obj, ind) => {
                     	if(obj.id === action.id){
                     		return {...obj, followed: true};
                     	}else{
                     		return obj;
                     	}
                     });
				   }; 
*/

//return {...state, usersData: [...state.usersData, ...action.users] };

	/*
	switch(action.type){
		case FOLLOW: {
			return {...state, 
                   // usersData: [...state.usersData]  
                      usersData: state.usersData.map((user, ind) => {
                      	if(user.id === action.id){
                      		return {...user, followed: true};
                      	}else{
                      		return user;
                      	}
                      })
			       };
	    }
		case UnFOLLOW: {
			return {...state,
			       usersData: state.usersData.map((user, ind) => {
			       	   if(user.id === action.id){
			       	   	  return {...user, followed: false};
			       	   }else{
			       	   	  return user;
			       	   }
			       })};
		}
		case SET_USERS: {
			//такая запись - usersData: [...state.usersData, ...action.users], будет добавлять юзеров  в конец страницы
			// а вот такая именно перезатирать usersData: action.users
			return {...state, usersData: action.users};
		}	
		case SET_CURRENT_PAGE : {
			//let copy = {...state}; 
		//	copy.currentPage = action.page
			return {...state, currentPage: action.page};
		}
		case SET_TOTAL_USERS_COUNT: {
			return {...state, totalCount: action.quantity};
		}
		default: return state;
	}
	*/