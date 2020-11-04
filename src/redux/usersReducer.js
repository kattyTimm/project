
let initialState = {
	  users:{
       usersData:[
          {user: 'Dima', id: 1},
          {user: 'Lera', id: 2},
          {user: 'mama', id: 3},
       ]
    } 
};

const usersReducer = (state = initialState, action) => {
    return state;
}

export default usersReducer;