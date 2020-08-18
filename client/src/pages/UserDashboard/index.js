// import React, { useState, useEffect } from "react";
import React from "react";
import "./style.css";
import Card from "../../components/Card"
// import Portrait from "../../assets/portrait.jpg"
import Lists from "../../components/Lists";
import Avatar from "../../components/Avatar/Avatar"


function Main() {

  return (
    <div>
      <div>
  
          <Card>
           <div className="image-text-container">
            <Avatar/>
            <p className="about"> Hello! My name is Karleigh Ponnock I am a dedicated Junior Front-End Web Developer in Miami, Florida..............
           </p>
           <div className="list">
           <Lists />
           </div>
           </div>
          </Card>
      </div>

    </div>
  );
}


export default Main;
