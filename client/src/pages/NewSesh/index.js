import React from 'react';
import { Header, Message } from "semantic-ui-react";


export const NewSesh = () => {
    return (
        <>
            <Message className="message-container" size="huge" secondary="true">
                <Header size="huge"> New Session </Header>
                <p>This is a Protected Route</p>
            </Message>
        </>
    )
}

export default NewSesh;
