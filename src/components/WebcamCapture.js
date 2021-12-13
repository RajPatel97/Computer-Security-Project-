import React, { Component, useState } from 'react';
import Webcam from "react-webcam";

//ref: https://javascript.plainenglish.io/capture-images-via-webcam-using-react-9282bb87de5a


 
const WebcamComponent = () => <Webcam />;
const videoConstraints = {
  width: 220,
  height: 200,
  facingMode: "user"
};

const WebcamCapture = () => {
const webcamRef = React.useRef(null);
const [image,setImage]=useState('');
  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImage(imageSrc)
      console.log(image)
    },

    [webcamRef]
  );

  
  return (
    <div className="webcam-container">
       {image==''?<Webcam
        audio={false}
        height={200}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
          width={220}
        videoConstraints={videoConstraints}
        />:<img src={image}/>}
      <button onClick={(e)=>{e.preventDefault();capture();}}>
      Capture</button>
    </div>
  );
};

 export {WebcamCapture};