import React from "react";
import "./style.css";

function Lists(props) {
    return (
        <div>
            <h2>Skills and Technologies</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>Express.js</li>
                <li>Node.js</li>
                <li>API's</li>
                <li>Heroku</li>
                <li>Github</li>
               
            </ul>

            {props.children}
        </div>
    );
}

export default Lists;
