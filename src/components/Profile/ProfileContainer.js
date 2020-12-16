import React from 'react';
import * as axios from 'axios';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import s from './Profile.module.css';
import Profile from './Profile';
import {setUserPropfileAC} from '../../redux/profileReducer';

class ProfileContainer extends React.Component{
  constructor(props){
     super(props);
     this.props = props;
    
  }
    componentDidMount(){
       let userId = this.props.match.params.userId;

       if(!userId) userId = 6858;

      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(resp => {     
       console.log(this.props.match.params);  
        this.props.setUserPropfile(resp.data);
      });
    }

    render(){
      return <Profile {...this.props} profile={this.props.profile}/>
    }
}

const mapStateToProps = (state) => {
   return {
      profile: state.profile.profile
   } 
};

ProfileContainer = withRouter(ProfileContainer);

ProfileContainer = connect(mapStateToProps, {setUserPropfile : setUserPropfileAC})(ProfileContainer);

export default ProfileContainer;
/*
class ProfileContainer extends React.Component{
  
  componentDidMount(){
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/6858`).then( resp => {
      console.log(resp);
      this.props.setUserPropfile(resp.data);
    });
   
  }

  render(){
    return (
      <div>    
        <Profile {...this.props} profile={this.props.profile}/>        
      </div> 
     );
  }
} 

const mapStateToProps = (state) => {
    return {
        profile: state.profile.profile,
    }
};

ProfileContainer = connect(mapStateToProps, {setUserPropfile})(ProfileContainer);

export default ProfileContainer;

*/
/*
const mapDispatchToProps = (dispatch) => {
    return {
          setUserPropfile: (userId) => dispatch(setUserPropfileAC(userId))
    }
};
*/