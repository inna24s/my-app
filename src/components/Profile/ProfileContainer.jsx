import React from 'react';
import s from './Profile.module.css';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {getProfile} from "../../Redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getProfile(userId);
    }

    render() {
        return (
            <div className={s.profile}>
                {this.props.isFetching ?<Preloader /> : null}
                <Profile {...this.props} profile={this.props.profile}/>
            </div>);
    }
}

let mapStateToProps= (state) =>({
    isFetching: state.profilePage.isFetching,
    profile: state.profilePage.profile
});
let withUriProfileComp = withRouter(ProfileContainer);
export default connect(mapStateToProps,
    { getProfile}
    )(withUriProfileComp);