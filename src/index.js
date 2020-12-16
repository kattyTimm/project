import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';

import store from './redux/storeRedux'; //storeRedux

//const StoreContext = React.crateContext(null);

//let rerenderEntireTree = () => {

	ReactDOM.render(
	  <React.StrictMode>
	      <BrowserRouter>
	        <Provider store={store}>
	           <App />  {/*dispatch={store.dispatch.bind(store)} */}
	        </Provider>   
	      </BrowserRouter>
	  </React.StrictMode>,
	  document.getElementById('root')
   );
   
//}

// rerenderEntireTree(); 

// здесь больше не нужна перерисовка, потомуч то connect сам будет перерисовывать дерево. 
// Оно вообще единожды отрисуется и все!
/*
store.subscribe(() => {
	//let state = store.getState();
	rerenderEntireTree();
});
*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
