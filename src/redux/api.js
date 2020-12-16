import * as axios from 'axios';

let instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: { "API-KEY": "43040dd6-0e63-4499-9314-9afff1dbb86e"} 
});

/*
export const getUsers = (currentPage = 1, pageSize = 10) => {
  return instance.get(`?page=${currentPage}&count=${pageSize}`,
                   {withCredentials: true}).then(resp =>  resp.data);
};
*/

export const usersApi = {

	getUsers: (currentPage = 1, pageSize = 10) => {
           return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(resp =>  resp.data);
    },

    follow: function(id){

       return instance.post(`follow/${id}`);
    },

    unfollow: (id) => {
    	return instance.delete(`follow/${id}`);
    }

};
