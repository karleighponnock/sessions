import React from 'react';
import { Header, Message } from "semantic-ui-react";


export const NewSesh = () => {
    return (
        <>
            <Message className="message-container" size="huge" secondary="true">
                <p className="titleTwo"  size="huge"> New Session </p>
                <p> This page will allow the user to upload and store a new session</p>
            </Message>
        </>
    )
}

export default NewSesh;