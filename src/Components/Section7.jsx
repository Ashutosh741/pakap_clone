import React from "react";
import Slider from "react-slick";
import ss1 from "../Images/screenshots1.png";
import ss2 from "../Images/screenshots2.png";
import ss3 from "../Images/screenshots3.png";
import ss4 from "../Images/screenshots4.png";
const Section7 = () => {
 var settings = {
  dots: false,
  infinite: true,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  slidesToScroll: 1,
  slidesToShow: 5,
 };
 return (
  <div className="section7_area">
   <div className="screenshots_area bg-color">
    <div className="container">
     <div className="section-title">
      <span className="sub-title">APP SCREENS</span>
      <h2 class="fw-bolder">Beautifully Crafted All App Screenshots</h2>
     </div>
     <div className="screenshots_slider">
      <Slider {...settings}>
       <div class="p-3">
        <img src={ss1}></img>
       </div>
       <div class="p-3">
        <img src={ss2}></img>
       </div>
       <div class="p-3">
        <img src={ss3}></img>
       </div>
       <div class="p-3">
        <img src={ss4}></img>
       </div>
       <div class="p-3">
        <img src={ss1}></img>
       </div>
       <div class="p-3">
        <img src={ss2}></img>
       </div>
       <div class="p-3">
        <img src={ss3}></img>
       </div>
      </Slider>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Section7;
