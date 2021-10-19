import * as axios from "axios";
import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
let initialState = {
    postsData: [
        {
            id: 1,
            message: "Hello! How are you?",
            imgAdr: "https://klike.net/uploads/posts/2020-01/1579681667_30.jpg",
            likecount: 10
        },
        {
            id: 2,
            message: "I study React!",
            imgAdr: "https://klike.net/uploads/posts/2020-01/1579681667_30.jpg",
            likecount: 3
        },
        {
            id: 3,
            message: "Good Luck!",
            imgAdr: "https://klike.net/uploads/posts/2020-01/1579681667_30.jpg",
            likecount: 8
        },
        {
            id: 4,
            message: "I like travel",
            imgAdr: "https://klike.net/uploads/posts/2020-01/1579681667_30.jpg",
            likecount: 20
        }
    ],
    newPostText: "",
    isFetching: true,
    profile: null
};
const profileReducer = (state=initialState, action)=>{
    switch (action.type){
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                imgAdr: "https://klike.net/uploads/posts/2020-01/1579681667_30.jpg",
                likecount: 0
            };
            return {...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''};
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state,
            newPostText: action.newText}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default: return state;
    }
}
export const addPost = ()=>({type: ADD_POST});
export const updateNewPostText = (text)=>({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});
export const setUserProfile = (profile) =>({
    type: SET_USER_PROFILE, profile
});
export const toggleIsFetching = (isFetching) => ({type:TOGGLE_IS_FETCHING, isFetching})

export const getProfile = (userId) =>{
    return (dispatch) =>{
        dispatch(toggleIsFetching(true));
        if (!userId) {
            userId = 18879
            // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials:true}).then(resp =>{
            //     userId = resp.data.data.id;
            // })
        }
        profileAPI.getProfile(userId).then(resp => {

            dispatch(toggleIsFetching(false));
            dispatch(setUserProfile(resp));
        });
    }
}
export default profileReducer;