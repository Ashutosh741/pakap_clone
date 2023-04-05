import React from "react";
import bg from "../Images/bg-shape2.png";
import shape1 from "../Images/atlassian.png";
import shape2 from "../Images/gdrive.png";
import shape3 from "../Images/jira.png";
import shape4 from "../Images/frame.png";
import shape5 from "../Images/skype.png";
import shape6 from "../Images/slack.png";
import shape7 from "../Images/shape5.png";

const Section8 = () => {
 return (
  <div className="section8_area">
   <div className="software-integrations-area ptb-100">
    <div className="container">
     <div className="row align-item-center">
      <div className="col-6">
       <div className="software-integration-content">
        <div className="section-title">
         <span className="sub-title">SOFTWARE INTEGRATIONS</span>
        </div>
        <h2 class="fw-bolder pb-3">
         Easy & Perfect Solution With Latest Software Integrations
        </h2>
        <p>
         Cloud based storage for your data backup just log in with your mail
         account from play store and using whatever you want for your business
         purpose orem ipsum dummy text. never missyour chance its just began.
         backup just log in with your mail account from.
        </p>
        <p>
         Most provabily best for your data backup just log in with your mail
         account from play store and using whatever you want for your business
         purpose orem ipsum dummy.
        </p>
        <a href="#" className="default-btn">
         Get Started
        </a>
       </div>
      </div>
      <div className="col-6">
       <div className="right-software-integration">
        <div className="software-integration-list">
         <img src={bg} />
         <ul>
          <li>
           <img src={shape1} />
          </li>
          <li>
           <img src={shape2} />
          </li>
          <li>
           <img src={shape3} />
          </li>
          <li>
           <img src={shape4} />
          </li>
          <li>
           <img src={shape5} />
          </li>
          <li>
           <img src={shape6} />
          </li>
         </ul>
        </div>
        <div className="shape5">
         <img src={shape7} />
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Section8;
