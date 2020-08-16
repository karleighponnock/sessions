import React from 'react';
import { Header, Message } from "semantic-ui-react";


export const MySesh = () => {
    return (
        <>
            <Message className="message-container" size="huge" secondary="true">
                <Header size="huge"> My Sessions </Header>
                <p>This is a Protected Route</p>
            </Message>
        </>
    )
}

export default MySesh;
