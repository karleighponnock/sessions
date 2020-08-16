import React from 'react'
import { Header, Message, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.css";
import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo";

export const Home = () => {
    // access to the isAuthenticated property from the auth reducer state
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

    const showLoginBtn = () => {
        if (!isAuthenticated) {
            return (
                <Button color="black" animated secondary>
                    <Button.Content visible>Login</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow right' />
                    </Button.Content>
                </Button>
            )
        }
    }

    return (
        <div>
            <Message className="message-container" size="huge" secondary="true">
                <p className="title" > SESSIONS </p>
                <p style={{ marginBottom: "5px" }}>FOR ARTISTS BY ARTISTS</p>
                <p style={{ margin: "5px 0 25px" }}>CREATE-STORE-SHARE-CONNECT</p>
                <Link to="/login">
                    {showLoginBtn()}
                </Link>
            </Message>
            <BackgroundVideo/>

        </div>
    )
};

export default Home;
