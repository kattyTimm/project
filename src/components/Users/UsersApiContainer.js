import React from 'react';
import {connect} from 'react-redux';
import * as axios from 'axios';

import s from './Users.module.css';
import userPhoto from '../../assets/imgs/userPhoto.jpg';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersApiContainer extends React.Component{
	constructor(props){
		// конструктор класса вызывается только один раз, когда создается объект класса(через new). 
		//Потом у объекта вызывается только рендер, а сам объект сидит в памяти,
		// и поэтому проверка - if(this.props.usersData.length === 0) здесь вовсе не обязательна
		super(props);
		this.props = props;	
	}


	componentDidMount(){
      this.props.getUsers(this.props.currentPage, this.props.pageSize);

  /*  this.props.toggleIsFetching(true);
		  usersApi.getUsers(this.props.currentPage, this.props.pageSize).then( resp => {
      this.props.toggleIsFetching(false);
			this.props.setUsers(resp.items);
			this.props.setTotalUsersCount(resp.totalCount);
		});
    */
	}

/*
    getUsers = () => {
	  // если пользоваться функциональной компонентой и закгружать пользователей без проверки - if(this.props.usersData.length === 0)
	  //  то будет ошибка слишком большой вложенности вызовов, т.к. реакт все время будет вызывать функцию
	  // В классе необходимость в проверке отпадает, так как объект класса создается единожды (конструктор вызывается только один раз) 
	  // адрес котика - 'https://krot.info/uploads/posts/2018-06/1529538875_mtpoxu2bul.jpg'
        if(this.props.usersData.length === 0){   
		      axios.get('https://social-network.samuraijs.com/api/1.0/users').then(resp => {
		     	this.props.setUsers(resp.data.items);
		     	console.log(resp.data);
		     });
	    } 
    }
*/
  // метод объявляется через анонимную функцию, чтобы сохранить контекст!!!
  // и чтобы передать номер страницы, а не event, в обработчике нужно предать метод чере з анонимную функцию
  // onClick={ (e) => {this.onPageChanged(item)} },таким образом можно обратьться к номеру элемента
    onPageChanged = (item) => {
        this.props.setCurrentPage(item);
        this.props.getUsers(item, this.props.pageSize);       
    }


	render(){ 

		  return <> 
                { this.props.isFetching ? <Preloader /> : null }

                <Users totalCount={this.props.totalCount} pageSize={this.props.pageSize} 
                       currentPage={this.props.currentPage} usersData={this.props.usersData}
                       followingProgress={this.props.followingProgress}
                       onPageChanged={this.onPageChanged} unfollow={this.props.unFollow}
                       follow={this.props.follow}
                       togglefollowingProgress={this.props.togglefollowingProgress}
                />

             </>
	}
}

export default UsersApiContainer;
