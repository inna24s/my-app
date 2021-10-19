import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_POGRESS = 'TOGGLE_IS_FOLLOWING_POGRESS'
let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:{
            return  { ...state, users:state.users.map(u =>
                {
                    if (u.id === action.userID) return {...u, followed: true}
                    return u;
                }
                )};
        }
        case UNFOLLOW:{
            return  { ...state, users:state.users.map(u =>
                    {
                        if (u.id === action.userID) return {...u, followed: false}
                        return u;
                    }
                )};
        }

        case SET_USERS:
            return { ...state, users:[...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_POGRESS:
            return {...state, followingInProgress: action.isFetching?
                    [...state.followingInProgress, action.userID]
                    :[state.followingInProgress.filter(id=> id !== action.userID)]}
        default:
            return state;
    }
}
export const acceptFollow = (userID) => ({type: FOLLOW, userID});
export const acceptUnfollow = (userID) => ({type: UNFOLLOW, userID});
export const setUsers = (users)=> ({type: SET_USERS, users});

export const setCurrentPage = (currentPage) =>({type: SET_CURRENT_PAGE, currentPage});

export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalCount});
export const toggleIsFetching = (isFetching) => ({type:TOGGLE_IS_FETCHING, isFetching});
export const toggleIsFollowingProgress = (isFetching,userId) => ({type:TOGGLE_IS_FOLLOWING_POGRESS, isFetching, userId})

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(resp => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(resp.items));
            dispatch(setTotalUsersCount(resp.totalCount));
        });
    }
}

export const follow = (userId) =>{
    return (dispatch) =>{
        dispatch(toggleIsFollowingProgress(true, userId));
        usersAPI.follow(userId).then
        (resp => {
            if(resp.resultCode ===0)  dispatch(acceptFollow(userId));
            dispatch(toggleIsFollowingProgress(false, userId));
        })
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId));
        usersAPI.unfollow(userId).then
        (resp => {
            if(resp.resultCode ===0) dispatch(acceptUnfollow(userId));
            dispatch(toggleIsFollowingProgress(false, userId));
        })
    }
}
export default usersReducer;