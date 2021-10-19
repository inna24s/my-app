import React from "react";
import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFollowingProgress,
    unfollow
} from "../../Redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersAPIContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage,
            this.props.pageSize)
        };

    //getUsers = () => {
        //if (this.props.users.length === 0) {

            // props.setUsers(
            //     [{
            //         id: 1,
            //         name: "Voronkova Inna",
            //         imgAdr: "https://klike.net/uploads/posts/2020-01/1579681667_30.jpg",
            //         followed: false,
            //         location: {
            //             country: "Russia",
            //             city: "Saint-Petersburg"
            //         },
            //         status: "I'm so cool"
            //     },
            //         {
            //             id: 2,
            //             name: "Alexandr",
            //             imgAdr: "https://klike.net/uploads/posts/2020-01/1579681667_30.jpg",
            //             followed: false,
            //             location: {
            //                 country: "Russia",
            //                 city: "Omsk"
            //             },
            //             status: "I study React!",
            //         },
            //         {
            //             id: 3,
            //             name: "Andrey",
            //             imgAdr: "https://klike.net/uploads/posts/2020-01/1579681667_30.jpg",
            //             followed: true,
            //             location: {
            //                 country: "Russia",
            //                 city: "Samara"
            //             },
            //             status: "Good Luck!",
            //         },
            //         {
            //             id: 4,
            //             name: "Elena",
            //             imgAdr: "https://klike.net/uploads/posts/2020-01/1579681667_30.jpg",
            //             followed: true,
            //             location: {
            //                 country: "Russia",
            //                 city: "Omsk"
            //             },
            //             status: "I like travel"
            //         }]
            // )
        //}
    //}
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    };
        // this.props.toggleIsFetching(true);
        // this.props.setCurrentPage(pageNumber);
        // usersAPI.getUsers(pageNumber, this.props.pageSize).then(resp => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(resp.items)
        // });

   // }

    render() {
        return <>
            {this.props.isFetching ?<Preloader /> : null}
            <Users key={this.props.id} pageSize={this.props.pageSize} setUsers={this.props.setUsers}
                   totalUsersCount={this.props.totalUsersCount} users={this.props.users}
                   onPageChanged={this.onPageChanged}
                   unfollow={this.props.unfollow} follow={this.props.follow} currentPage={this.props.currentPage}
                   toggleIsFollowingProgress = {this.props.toggleIsFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (page) => {
//             dispatch(setCurrentPageAC(page))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching) =>{
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//
//     }
// }


export default connect(mapStateToProps,
    {follow, unfollow, setUsers,
        setCurrentPage, setTotalUsersCount,
        toggleIsFollowingProgress,
        getUsers}
    )(UsersAPIContainer);