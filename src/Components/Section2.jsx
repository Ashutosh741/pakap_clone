import React from "react";
import shape1 from "../Images/shape1.png";
import shape2 from "../Images/shape2.png";
import videobg from "../Images/video-bg1.jpg";

const Section2 = () => {
 return (
  <div className="video-area pt-5">
   <div className="container">
    <div className="video-box d-flex">
     <div className="video_shape1">
      <img src={shape1} />
     </div>
     <div className="video-bg">
      <img src={videobg} />
      <div className="video_btn">
       <i class="fa-solid fa-play"></i>
      </div>
     </div>

     <div className="video_shape2">
      <img src={shape2} />
     </div>
    </div>
   </div>
  </div>
 );
};

export default Section2;
