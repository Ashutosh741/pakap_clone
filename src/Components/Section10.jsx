import React from "react";
import Slider from "react-slick";

const Section10 = () => {
 const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",
 };
 return (
  <div>
   <div className="feedback-area">
    <div className="container">
     <div className="section-title">
      <div className="sub-title">CLIENT REVIEWS</div>
      <h2>
       Some of Our Happy Customer<br></br> Reviews About Our Products
      </h2>
     </div>
     <div className="customer-reviews">
      <Slider {...settings}>
       <div>
        <h3>1</h3>
       </div>
       <div>
        <h3>2</h3>
       </div>
       <div>
        <h3>3</h3>
       </div>
       <div>
        <h3>4</h3>
       </div>
       <div>
        <h3>5</h3>
       </div>
       <div>
        <h3>6</h3>
       </div>
      </Slider>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Section10;
