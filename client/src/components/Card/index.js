import React from "react";
import "./style.css";

function Card(props) {
  return (
    // The most straightforward solution would be to add the Consumer to the Card component.
    // This way, all Card components can have the Card context passed directly as props
    <div>
      <div
        className="card">
        {/* Here, we do not pass the title to demonstrate that it can also be consumed from the CardTitleText component */}
        <h1>{props.title}</h1>
        {props.children}
      </div>
    </div>
  );
}

export default Card;
