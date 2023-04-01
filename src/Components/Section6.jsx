import React from "react";
import play_store from "../Images/play-store.png";
import app_store from "../Images/apple-store.png";
import img3 from "../Images/app-img3.png";

const Section6 = () => {
 return (
  <div className="section6_area">
   <div className="app-download-area">
    <div className="container">
     <div className="app-download-inner">
      <div className="row align-items-center">
       <div className="col-6">
        <div className="app-download-content">
         <span className="sub-title">DOWNLOAD APP</span>
         <h2>Let's Get Your Free Copy From Apple and Play Store</h2>
         <p>
          Instant free download from store Cloud based storage for your data
          backup just log in with your mail account from play store and using
          whatever you want for your business purpose orem ipsum dummy text.
         </p>
         <div className="btn-box">
          <a href="" target="_blank" className="playstore-btn">
           <img src={play_store}></img>
           Get It On <br></br>
           <span>Google Play</span>
          </a>
          <a href="" className="applestore-btn" target="_blank">
           <img src={app_store}></img>
           Download on the<br></br>
           <span>Apple Store</span>
          </a>
         </div>
        </div>
       </div>
       <div className="col-6">
        <div className="app-download-image"></div>
        <img src={img3}></img>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Section6;
