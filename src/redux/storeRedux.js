import {createStore, combineReducers} from 'redux';

import usersReducer from './usersReducer';
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';

// Для редаксовского стора нужно скомбайнить все свои редьюсоры
// в редьюсорах нужно объявити инициализирующий стэйт как раз со свойствами users, dialogs, profile
let reducers = combineReducers({
    users: usersReducer,
    dialogs: dialogsReducer,
    profile: profileReducer 
  });

let store = createStore(reducers);

export default store;