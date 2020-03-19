import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '251154dd-b681-47d2-ae11-fdc0159dfce0'
    }
});

export const userAPI = {
    getUsers(currentPage, pageSize){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    follow(userId){
        return instance.post(`follow/${userId}`).then(response => response.data)
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`).then(response => response.data)
    },
    authMe(){
        return instance.get(`auth/me`).then(response => response.data)
    },
    getProfile(userId){
        return instance.get(`profile/${userId}`);
    }
}