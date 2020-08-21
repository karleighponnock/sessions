import React from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logout from "../Logout";
import "./style.css";

export const NavBar = () => {

    const { currentUser, isAuthenticated } = useSelector(state => state.auth)

    // helper to show links on Navbar if user is authenticated
    const showLinks = () => {
        if (isAuthenticated) {
            return (
                <>
                    <Link to="/dashboard" className="link">{currentUser.email}</Link>
                    <Logout/>
                </>
            )
        } else {
            return (
                <>
                    <Link to="/login" className=" link">Login</Link>
                    <Link to="/register" className="link">Register</Link>
                </>
            )
        }

    }

    return (
        <div className="ui inverted menu">

            <Link to="/" className="link">Home</Link>
            {isAuthenticated ? <Link to="/newsesh" className="link">New Session</Link> : ""}
            {isAuthenticated ? <Link to="/mysesh" className="link">My Sessions</Link> : ""}
        

            <div className="right menu">
                {showLinks()}
            </div>
        </div>
    )
}

export default NavBar;
