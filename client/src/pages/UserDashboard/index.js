// import React, { useState, useEffect } from "react";
import React from "react";
import "./style.css";
import Card from "../../components/Card"
// import Portrait from "../../assets/portrait.jpg"
import Lists from "../../components/Lists";
import Avatar from "../../components/Avatar/Avatar"
import Bio from "../../components/Bio"

function Main() {

  return (
    <div>
      <div>
  
          <Card>
           <div className="image-text-container">
            <Avatar/>
            <Bio/>
           </div>
          </Card>
      </div>

    </div>
  );
}


export default Main;
