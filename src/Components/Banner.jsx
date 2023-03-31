import React from "react";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "react-bootstrap/Button";
import mobile_img from "../Images/banner-app1.png";
import shape9 from "../Images/shape9.png";
import shape7 from "../Images/shape7.png";
import shape10 from "../Images/shape10.png";
import shape2 from "../Images/shape2.png";
import shape11 from "../Images/shape11.png";
import Slider from "react-slick";
import partner1 from "../Images/partner1.png";
import partner2 from "../Images/partner2.png";
import partner3 from "../Images/partner3.png";
import partner5 from "../Images/partner5.png";
import partner6 from "../Images/partner6.png";

const Banner = () => {
 var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  slidesToScroll: 1,
  slidesToShow: 4,
  arrows: false,
 };
 return (
  <div className="banner_area pt-5">
   <div className="container">
    <div className="row">
     <div className="col-8">
      <div className="banner_content">
       <div className="shape9">
        <img src={shape9} />
       </div>
       <div className="shape7">
        <img src={shape7} />
       </div>
       <div className="free_trial text-light">
        <span>#Get your 14 days free trial</span>
       </div>
       <div className="banner_title">
        <span>
         The Revolutionary App That <br />
         Makes Your Life Easier Than
         <br /> Others Apps
        </span>
       </div>
       <div className="two_in_one d-end">
        <div className="btn bg-white mt-3">
         <Button variant="white">Start Free Trial</Button>
        </div>
        <div className="shape2">
         <img src={shape2} />
        </div>
       </div>
      </div>
      <div className="trusted_by">
       <div className="trusted_title">
        <span>Trusted by :</span>
       </div>
       <div className="trusted_companies">
        <Slider {...settings}>
         <div>
          <img src={partner1} />
         </div>
         <div>
          <img src={partner2} />
         </div>
         <div>
          <img src={partner3} />
         </div>
         <div>
          <img src={partner5} />
         </div>
         <div>
          <img src={partner6} />
         </div>
        </Slider>
       </div>
      </div>
     </div>
     <div className="col-4">
      <div className="right_banner d-flex">
       <div className="phone_img">
        <img src={mobile_img} />
       </div>
       <div className="shape10">
        <img src={shape10} />
       </div>
      </div>
     </div>
    </div>
   </div>

   <div className="shape_overlay"></div>
   <div className="shape11">
    <img src={shape11} />
   </div>
  </div>
 );
};

export default Banner;

// banner_area
