export type postsDataType = {
    id: number
    likes: number
    postText: string
}

export type contactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type photosTypes = {
    small: string | null
    large: string | null
}

export type profileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: contactsType
    photos: photosTypes
}

 export type userType = {
    id: number
    name: string
    status: string
    photos: photosTypes
    followed: boolean
}