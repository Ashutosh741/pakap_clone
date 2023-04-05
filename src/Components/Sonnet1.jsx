import React from "react";

const Sonnet1 = () => {
 return (
  <div className="row d-flex">
   <div className="col-6">
    <div className="div">
     <div className="popular d-flex justify-content-end">Most Popular</div>

     <div className="single-pricing-table">
      <h4 className="fw-bolder">Small Team</h4>
      <p className="pb-3">Powerful & awesome elements</p>
     </div>
     <div className="price">
      $49<span>/Month</span>
     </div>
     <div className="pricing-btn">
      <a href="#" className="default-btn">
       Purchase Plan
      </a>
     </div>
     <ul className="check-list">
      <li>
       <i class="fa-solid fa-check"></i>Up to 10 Website
      </li>
      <li>
       <i class="fa-solid fa-check"></i>Lifetime free Support
      </li>
      <li>
       <i class="fa-solid fa-check"></i>10 GB Dedicated Hosting free
      </li>
      <li>
       <i class="fa-solid fa-check"></i>24/7 Support
      </li>
      <li>
       <i class="fa-solid fa-check"></i>SEO Optimized
      </li>
      <li>
       <i class="fa-solid fa-xmark"></i>Live Support
      </li>
     </ul>
    </div>
   </div>
   <div className="col-6">
    <div className="div pt-4">
     <div className="single-pricing-table">
      <h4 className="fw-bolder">Business</h4>
      <p className="pb-3">Powerful & awesome elements</p>
     </div>
     <div className="price">
      $69<span>/Month</span>
     </div>
     <div className="pricing-btn">
      <a href="#" className="default-btn">
       Purchase Plan
      </a>
     </div>
     <ul className="check-list">
      <li>
       <i class="fa-solid fa-check"></i>Up to 100 Website
      </li>
      <li>
       <i class="fa-solid fa-check"></i>Lifetime free Support
      </li>
      <li>
       <i class="fa-solid fa-check"></i>100 GB Dedicated Hosting free
      </li>
      <li>
       <i class="fa-solid fa-check"></i>24/7 Support
      </li>
      <li>
       <i class="fa-solid fa-check"></i>SEO Optimized
      </li>
     </ul>
    </div>
   </div>
  </div>
 );
};

export default Sonnet1;
