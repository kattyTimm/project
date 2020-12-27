import React from 'react';
import * as axios from 'axios';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import Header from './Header';
import {setUserDataThunk} from './../../redux/authReducer';
import {authApi, profileApi} from './../../redux/api';
import s from './Header.module.css';

class HeaderContainer extends React.Component{

  componentDidMount(){
    this.props.setAuthUserData();
  }
  
  render(){
  	return <>
  	          
  	           <Header  {...this.props} />
  	       </>
  }
}

const mapStateToProps = (state) => ({
   id: state.auth.id,
   email: state.auth.email,
   login: state.auth.login,
   isAuth: state.auth.isAuth,
   isFetching: state.auth.isFetching,
   actIdPhoto: state.auth.actIdPhoto,
   topStatus: state.auth.topStatus
});

HeaderContainer = withRouter(HeaderContainer);

HeaderContainer = connect(mapStateToProps, {setAuthUserData: setUserDataThunk})(HeaderContainer);

export default HeaderContainer;


/*
class HeaderContainer extends React.Component{

    componentDidMount(){
       axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
       	   withCredentials: true,
       }).then(resp => {
       	    console.log(resp);
       	    if(resp.data.resultCode === 0) {
       	    	let {id, email, login} = resp.data.data;
                this.props.setAuthUserData(id, email, login);
       	    }
       });
    }

	render(){
		return ( <>
				     { props.isFetching ? <Preloader /> : null }

			         <Header {...this.props}/>
		         </>
		    )
	}

}

const mapStateToProps = (state) => {
	return { 
	    id: state.auth.id,
		email: state.auth.email,
		login: state.auth.login,
		isAuth: state.auth.isAuth,
		isFetching: state.auth.isFetching,
    }
}
*/