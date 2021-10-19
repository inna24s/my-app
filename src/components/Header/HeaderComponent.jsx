import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import * as axios from "axios";
import {setUserData} from "../../Redux/auth-reducer";

class HeaderComponent extends React.Component{
    componentDidMount() {
        this.props.setUserData();
    }

    render() {
        return <Header {...this.props}/>
    }

}
let mapStateToProps = (state) =>{
    return {
        userId: state.auth.email,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps,{setUserData})(HeaderComponent);