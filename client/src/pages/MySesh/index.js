import React from 'react';
import { Message } from "semantic-ui-react";

export const MySesh = () => {
    return (
        <>
            <Message className="message-container" size="huge" secondary="true">
                <p className="titleTwo"  size="huge"> My Sessions </p>
                <p>This page is going to display all of the authenticated users sessions by foler. Each can be clicked on to access and opened to siaply contents</p>
            </Message>
        </>
    )
}

export default MySesh;
