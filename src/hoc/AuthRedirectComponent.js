import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const mapStateToPropsToRedirect = (state) => {
   return {
      isAuth: state.auth.isAuth
   } 
};


export const AuthRedirectComponent = (Component) => {
   class ContainerComponent extends React.Component{
     render(){
         if(!this.props.isAuth) return <Redirect to='/login' />
           return <Component {...this.props} />
      }   
   }

   return connect(mapStateToPropsToRedirect)(ContainerComponent);
}
