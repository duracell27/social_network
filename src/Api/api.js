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
    login(email, password, rememberMe = false, captcha){
        return instance.post(`auth/login`, {email, password, rememberMe, captcha}).then(response => response.data)
    },
    logOut(){
        return instance.delete(`auth/login`).then(response => response.data)
    },
    getProfile(userId) {
        console.warn("use profileApi");
        return profileAPI.getProfile(userId);
    },
    savePhoto(file){
        let formData = new FormData();
        formData.append('image', file)
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type' : 'multipart/form-data'
            }
        });
    },
    saveProfile(data){
        return instance.put(`profile`, data);
    }

}

export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status:status});
    }
}

export const securityAPI = {
    getCaptchaUrl(){
        return instance.get(`security/get-captcha-url`);
    }
}
