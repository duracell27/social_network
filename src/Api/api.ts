import axios from 'axios';
import {profileType} from "../types/Types";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '251154dd-b681-47d2-ae11-fdc0159dfce0'
    }
});

type meResponsetype = {
    data: {id: number, email: string, login: string}
    resultCode: number
    messages: Array<string>
}

type loginResponsetype = {
    data: {userId: number}
    resultCode: number
    messages: Array<string>
}


export const userAPI = {
    getUsers(currentPage: number, pageSize: number){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    follow(userId: number){
        return instance.post(`follow/${userId}`).then(response => response.data)
    },
    unfollow(userId: number){
        return instance.delete(`follow/${userId}`).then(response => response.data)
    },
    authMe(){
        return instance.get<meResponsetype>(`auth/me`).then(response => response.data)
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null){
        return instance.post<loginResponsetype>(`auth/login`, {email, password, rememberMe, captcha}).then(response => response.data)
    },
    logOut(){
        return instance.delete(`auth/login`).then(response => response.data)
    },
    getProfile(userId: number) {
        console.warn("use profileApi");
        return profileAPI.getProfile(userId);
    },
    savePhoto(file: any){
        let formData = new FormData();
        formData.append('image', file)
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type' : 'multipart/form-data'
            }
        });
    },
    saveProfile(data: profileType){
        return instance.put(`profile`, data);
    }

}

export const profileAPI = {
    getProfile(userId: number){
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId: number){
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status: string){
        return instance.put(`profile/status`, {status:status});
    }
}

export const securityAPI = {
    getCaptchaUrl(){
        return instance.get(`security/get-captcha-url`);
    }
}
