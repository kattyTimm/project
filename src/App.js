import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Users from './components/Users/Users';

const App = (props) => {
 
    return (

      <div className="app-wrapper">
          <Header className="header" />
          <Navbar className="nav" />
          <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogs} dispatch={props.dispatch} /> } />  {/*component={Dialogs}*/}
          <Route path='/profile' render={ () => <Profile state={props.state.profile} dispatch={props.dispatch} /> } />   
          <Route path='/users' render={ () => <Users state={props.state.users} /> } />      
      </div> 

  );
}

export default App;
