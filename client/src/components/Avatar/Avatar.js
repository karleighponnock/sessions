import React, { useEffect } from "react";
import Dropzone from 'react-dropzone';
import request from 'superagent';
import "./style.css"
import axios from 'axios';


export function Avatar() {
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);
  var lastSaved = JSON.parse(localStorage.getItem("image"))

  useEffect(() => {
  //   axios.get("/api/fileAWS")
  //     .then(res => {
  //       console.log(res.data.Contents)
  //       const gallInfo = res.data.Contents
       
  //       //get key from local storage
  //       const file = localStorage.getItem('image')
  //       console.log("localstorage", file);
  //       //look over contents(iterate) check for each key
  //       for (var i = 0; i < res.data.Contents.length; i++) {
  //         console.log(res.data.Contents[i].Key);
  //         //if key matches
  //         if(res.data.Contents[i].Key === file){
  //           console.log("found a match", res.data.Contents[i].Key, file) 
  //           break
  //           // src.appendChild(this.img)
  //         }
  //       }
  //     }
  //     )
      
  //     .catch(err => console.warn(err.message))
     
      console.log(lastSaved);

  },[])

  const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = e => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
      console.log("file", file)
    }
  };

  function handleAvatarUpload(event) {
    event.preventDefault();
    const data = new FormData();
    const [file] = event.target.files;
    console.log("checkinggg", file)
   

    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = e => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
      console.log("file", file)
    }
    console.log("fileeee", file)
    data.append('fileAWSImage', file, file.name);

    console.log("Hello", file);

    axios.post('/api/fileAWS/fileAWS-upload', data, {
      headers: {
        'accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.8',
        'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
      }
    })
      .then((response) => {
        console.log("Avatar", response)

        if (200 === response.status) {
          // If file size is larger than expected.
          if (response.data.error) {
            console.log(response.data);
          } else {
            // Success
            let fileName = response.data;
             /////file.name store it locally
    localStorage.setItem('image',JSON.stringify(fileName))
            console.log('filedata', fileName);
          }
        }
      }).catch((error) => {
        // If another error
        this.ocShowAlert(error, 'red');
      });
  }





  return (
    <div className="bio-pic">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleAvatarUpload}
          ref={imageUploader}
          style={{
            display: "none"
          }}
        />
       
        <div
          style={{
            height: "360px",
            width: "250px",
            padding: "10px"
          }}
          onClick={() => imageUploader.current.click()
          }
        >
          <img
            ref={uploadedImage}
            src={lastSaved.location}
            style={{
              width: "100%",
              height: "100%",
              position: "relative"
            }}
          />
        </div>
      Click to upload Image
    </div>



    </div>
  );
}

export default Avatar 