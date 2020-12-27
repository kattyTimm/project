import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';

import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import LoginPage from './components/Login/Login';

const App = (props) => {

    return (

      <div className="app-wrapper">
          <div className="header">
              <HeaderContainer />  
          </div>
          <Navbar className="nav" />
          <Route path='/dialogs' render={ () => <DialogsContainer /> } />  {/*component={Dialogs}*/}
           {/*state={props.state.profile} dispatch={props.dispatch}*/}
          <Route path='/profile/:userId?' render={ () => <ProfileContainer /> } />   
          <Route path='/users' render={ () => <UsersContainer /> } />   
          <Route path='/login' render={ () => <LoginPage /> } />  
      </div> 

  );
}

export default App;

// <Route path='/login/:actId?' render={ () => <HeaderContainer /> } />