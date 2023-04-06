import React from "react";
import shape6 from "../Images/shape6.png";
import shape7 from "../Images/shape7.png";



const Section11 = () => {
    return (
        <div class="section11_area ptb-100">
            <div className="container">
                <div className="free-trial-content">
                    <div className="row">
                        <div className="col">
                            <div className="contact_us text-center">
                                <h6>FREE TRIAL</h6>
                                <h1>Start Your 14 Days Free<br></br> Trials Today!</h1>
                                <div className="reach-me bg-white">

                                    <input type="email" id="email" name="email"></input>

                                    <a href="#" class="default-btn">Get Started</a>
                                </div>
                            </div>
                            <div className="shape6">
                                <img src={shape6} />
                            </div>
                            <div className="shape7">
                                <img src={shape7} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section11;