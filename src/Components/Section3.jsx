import React from "react";
import app_img from "../Images/app-img1.png";
import shape3 from "../Images/shape3.png";
import shape2 from "../Images/shape2.png";

const Section3 = () => {
 return (
  <div className="section3_area">
   <div className="container">
    <div className="row align-items-center">
     <div className="col-6">
      <div className="section3_left">
       <h2>Most Probably You Are Getting Best App Ever</h2>
       <p>
        Cloud based storage for your data backup just log in with your mail
        account from play store and using whatever you want for your business
        purpose orem ipsum dummy text. Never missyour chance its just began.
       </p>
       <ul className="section3_list">
        <li>
         <div className="icon">
          <i class="fa-solid fa-cloud-arrow-down"></i>
         </div>
         <h3>Free Download App</h3>
         <p>
          Just log in with your mail account from play store and using whatever
          you want for your business purpose.
         </p>
        </li>
        <li>
         <div className="icon">
          <i class="fa-solid fa-award"></i>
         </div>
         <h3>Trusted and Reliable</h3>
         <p>
          Most provabily best you can trust on it, just log in with your mail
          account from play store and using whatever you want for your business.
         </p>
        </li>
        <li>
         <div className="icon">
          <i class="fa-solid fa-cloud"></i>
         </div>
         <h3>Cloud Storage</h3>
         <p>
          Cloud based storage for your data backup just log in with your mail
          account from play store and using whatever you want for your business
          purpose orem ipsum dummy.
         </p>
        </li>
       </ul>
       <div className="btn-box">
        <a href="" className="default-btn">
         Start Free Trial
        </a>
        <a href="" className="link-btn">
         See All Features
        </a>
       </div>
      </div>
     </div>
     <div className="col-6 ">
      <div className="section3_right d-flex">
       {" "}
       <div className="shape3">
        <img src={shape3} />
       </div>
       <div className="right_img text-center ">
        <img src={app_img} />
       </div>
       <div className="shape2">
        <img src={shape2} />
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Section3;
