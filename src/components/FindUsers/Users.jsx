import React from "react";
import userPhoto from "../../assets/images/userPhoto.png";
import styles from "./users.module.css";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../../api/api";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);
    let pages = [];
    for (let i=1; i<=pagesCount; i++) pages.push(i);

    // let getUsers = () => {
    //     if (this.props.users.length === 0) {
    //
    //         // props.setUsers(
    //         //     [{
    //         //         id: 1,
    //         //         name: "Voronkova Inna",
    //         //         imgAdr: "https://klike.net/uploads/posts/2020-01/1579681667_30.jpg",
    //         //         followed: false,
    //         //         location: {
    //         //             country: "Russia",
    //         //             city: "Saint-Petersburg"
    //         //         },
    //         //         status: "I'm so cool"
    //         //     },
    //         //         {
    //         //             id: 2,
    //         //             name: "Alexandr",
    //         //             imgAdr: "https://klike.net/uploads/posts/2020-01/1579681667_30.jpg",
    //         //             followed: false,
    //         //             location: {
    //         //                 country: "Russia",
    //         //                 city: "Omsk"
    //         //             },
    //         //             status: "I study React!",
    //         //         },
    //         //         {
    //         //             id: 3,
    //         //             name: "Andrey",
    //         //             imgAdr: "https://klike.net/uploads/posts/2020-01/1579681667_30.jpg",
    //         //             followed: true,
    //         //             location: {
    //         //                 country: "Russia",
    //         //                 city: "Samara"
    //         //             },
    //         //             status: "Good Luck!",
    //         //         },
    //         //         {
    //         //             id: 4,
    //         //             name: "Elena",
    //         //             imgAdr: "https://klike.net/uploads/posts/2020-01/1579681667_30.jpg",
    //         //             followed: true,
    //         //             location: {
    //         //                 country: "Russia",
    //         //                 city: "Omsk"
    //         //             },
    //         //             status: "I like travel"
    //         //         }]
    //         // )
    //     }
    // }

    return (<div>
            <div>
                {pages.map(p =>  {

                    return <span className={props.currentPage === p ? styles.selectedPage: "" }
                    onClick={(e)=>{props.onPageChanged(p)}} >{p}, </span>})
                }

            </div>
            <h2>Users</h2>
            {props.users.map(u => {
                return (<div key={u.id}>
                    <span>
                    <NavLink to = {"/profile/" + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userphoto}/>
                    </NavLink>
                    <div>
                        {u.followed ?
                            <button disabled={props.followingInProgress.some(id=> id===u.id)} onClick={() =>{
                                props.unfollow(u.id);
                            }}>Unfollow</button> :
                            <button disabled={props.followingInProgress.some(id=> id===u.id)} onClick={() =>{
                                props.follow(u.id);
                            }}>Follow</button>
                        }
                    </div>

                    </span>
                    <span>
                        <span>
                            <div> {u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"},</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)
            })
            }
        </div>)
    }


export default Users;



