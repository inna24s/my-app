import * as axios from "axios";
//создаем отдельный экземпляр axios
const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "40431a7f-c3ec-4c3a-a19b-d1ae24662fd4"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(resp => resp.data)
    },
    follow(userId=2){
        return instance.post(`follow/${userId}`).then (resp => resp.data)
    },
    unfollow(userId = 2){
        return instance.delete(`follow/${userId}`).then(resp => resp.data)
    }
}

export const profileAPI = {
    getProfile(userId = 18879){
        return instance.get(`profile/`+ userId).then(resp => resp.data)
    }
}

export const headerAPI = {
    isAuth() {
        return instance.get(`auth/me`).then(resp => resp.data)
    }
}