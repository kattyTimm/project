import React from 'react';
import * as axios from 'axios';
import {connect} from 'react-redux';
import {withRouter, Redirect} from 'react-router-dom';
import {compose} from 'redux';

import s from './Profile.module.css';
import Profile from './Profile';
import {getProfileThunk} from '../../redux/profileReducer';

import {profileApi} from '../../redux/api';
import {AuthRedirectComponent} from '../../hoc/AuthRedirectComponent';

class ProfileContainer extends React.Component{
  constructor(props){
     super(props);
     this.props = props;
    
  }
    componentDidMount(){
       let userId = this.props.match.params.userId;

       if(!userId) userId = 6858;

       this.props.setUserPropfile(userId);
    }

    render(){
     if(!this.props.isAuth) return <Redirect to='/login' />

      return <Profile {...this.props} profile={this.props.profile}/>
    }
}

const mapStateToProps = (state) => {
   return {
      profile: state.profile.profile,
   } 
};

//let ProfileComponentWithRedirect = AuthRedirectComponent(ProfileContainer);

//let ContainerProfileComponentWithRedirect = withRouter(ProfileComponentWithRedirect);

//ProfileContainer = connect(mapStateToProps, {setUserPropfile : getProfileThunk})(ContainerProfileComponentWithRedirect);

ProfileContainer = compose(
    connect(mapStateToProps, {setUserPropfile : getProfileThunk}),
    withRouter,
    AuthRedirectComponent
  )(ProfileContainer);

export default ProfileContainer;
