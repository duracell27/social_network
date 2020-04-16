import axios from 'axios';
import {profileType, userType} from "../types/Types";

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

type getUsersResponseType = {
    items: Array<userType>
    totalCount: number
    error: string
}

type standartResponseType = {
    resultCode: number
    messages: Array<string>
    data: object
}


export const userAPI = {
    getUsers(currentPage: number, pageSize: number){
        return instance.get<getUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    follow(userId: number){
        return instance.post<standartResponseType>(`follow/${userId}`).then(response => response.data)
    },
    unfollow(userId: number){
        return instance.delete<standartResponseType>(`follow/${userId}`).then(response => response.data)
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
        return instance.put<getProfileResponseName>(`profile`, data);
    }

}

type getProfileResponseName = {
    "aboutMe": string
    "contacts": {
        "skype": string
        "vk": string
        "facebook": string
        "icq": string
        "email": string
        "googlePlus": string
        "twitter": string
        "instagram": string
        "whatsApp": string
    },
    "lookingForAJob": boolean
    "lookingForAJobDescription": string
    "fullName": string
    "userId": number
    "photos": { small: string, large: string}
}

export const profileAPI = {
    getProfile(userId: number){
        return instance.get<getProfileResponseName>(`profile/${userId}`);
    },
    getStatus(userId: number){
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status: string){
        return instance.put<standartResponseType>(`profile/status`, {status:status});
    }
}

type getCaptchaUrlResponseType = {
    url: string
}

export const securityAPI = {
    getCaptchaUrl(){
        return instance.get<getCaptchaUrlResponseType>(`security/get-captcha-url`);
    }
}
