import React from 'react';
import './App.css';
import logo from'./logo.svg'
import document from "./icons/document.svg";
import speachToText from "./icons/speechToText.svg"
import voice from "./icons/voice.svg"
import ResponsivePlayer from "./video/video.component.jsx"

function App() {
  return (
    <div className="App">
     <div className="header">
        <img className="logo" src={logo} alt="my logo"/>
     </div>
     <div className="vid-container">       
       <div className="vid-spacing">
       <div className="vid">
         <ResponsivePlayer />
       </div>
       <div className="text-1"><h1>How it <span>WORKS</span>?</h1></div>
       </div>
     </div>
     <div className="features-container">
       <div className="features-header">
         <h1 className="block-text">Features</h1>
       </div>
       <div className="card-container">
         <div className="card">
           <img className="icon" src={document} alt="something"/>
           <h4>Object-Detection</h4>
           <p>The program is designed to detect the presence
              of person smartphone and book as they are considered
              as the prohibited items during an examination or 
              test. Nevertheless it shows the confidence level 
              of each item detected.
            </p>
         </div>
         <div className="card">
           <img className="icon" src={voice} alt=""/>
           <h4>Voice-Detection</h4>
           <p>
            in this module the program records any noise or 
            sounds that is exerted to the surrounding and 
            it's filters out any silence. If there is 
            no sound or noise recorded for 5 seconds. 
            The program stops recording, filters out 
            the noise and stores it in a file in the 
            directory. For example, 
            when you say “open WhatsApp”, 
            it will be recorded and stored in wav format
           </p>
         </div>
         <div className="card">
           <img className="icon" src={speachToText} alt=""/>
           <h4>Speach-To-Text</h4>
           <p>
            in this program the module converts the 
            audio you that was recorded from The 
            Voice activity detection program.
            It converts it from audio to a 
            text using the ability of 
            Google activity recognition
           </p>
         </div>         
       </div>
     </div>
     <div className="about-us">
         <h1 className="block-text">About us</h1>      
         <p className="about-us-block">This project is all about preventing cheating and providing a better online education system. This software was created by a group of students <span>from Multimedia University (MMU)</span></p>
     </div>
     <div className="footer-container">
       <h3 className="footer-item">copy rights </h3>
       <h3 className="footer-item">Contact Us</h3>
       <h3 className="footer-item">FAQs</h3>
       <h3 className="footer-item">Inquiries</h3>
     </div>
    </div>
  );
}

export default App;
