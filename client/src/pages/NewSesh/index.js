import React from 'react';
import { Message } from "semantic-ui-react";
import App from "../../App";


export const NewSesh = () => {
    return (
        <>
            <Message className="message-container" size="huge" secondary="true">
                <p className="titleTwo"  size="huge"> New Session </p>
            <div className="upload">
            <App />
            </div>
            </Message>
           
        </>
    )
}

export default NewSesh;
