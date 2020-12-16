import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';


import usersReducer from './usersReducer';
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import authReducer from './authReducer';

// Для редаксовского стора нужно скомбайнить все свои редьюсоры
// в редьюсорах нужно объявити инициализирующий стэйт как раз со свойствами users, dialogs, profile
let reducers = combineReducers({
    users: usersReducer,
    dialogs: dialogsReducer,
    profile: profileReducer,
    auth: authReducer
  });

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;