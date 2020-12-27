import React from 'react';
import {connect} from 'react-redux';


import UsersApiContainer from './UsersApiContainer';
import {follow, unFollow, setCurrentPage, togglefollowingProgress, 
	   getUsersThunkCreator, unFollowThunk, followThunk} from '../../redux/usersReducer';

const mapStateToProps = (state) => {
	return { usersData: state.users.usersData,
             totalCount: state.users.totalCount,
             pageSize: state.users.pageSize,
             currentPage: state.users.currentPage,
             isFetching: state.users.isFetching,
             followingProgress: state.users.followingProgress,
	 }
};


 const UsersContainer = connect(mapStateToProps, {
  follow, unFollow, setCurrentPage, togglefollowingProgress, 
  getUsers: getUsersThunkCreator, unFollow: unFollowThunk, follow: followThunk} )(UsersApiContainer);

export default UsersContainer;
 

/*
const mapDispatchToProps = (dispatch) => {
	return {
		follow: (id) => { dispatch(followAC(id)) },
		unfollow: (id) => { dispatch(unFollowAC(id)) },
		setUsers: (users) => {dispatch(setUsersAC(users))},
		setCurrPage : (pageNum) => {dispatch(setCurrentPageAC(pageNum))},
		setTotalUsersCount : (usersQuantity) => {dispatch(setTotalUsersCountAC(usersQuantity))},
		setToggleFetching : (val) => {dispatch(toggleIsFetchingAC(val))}
	};
};
*/