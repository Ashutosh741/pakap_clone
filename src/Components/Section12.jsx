import React from "react";
import frame from "../Images/frame.png"
const Section12 = () => {
    return (
        <div className="section12_area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="footer-content text-center text-white">
                            <div className="frame">
                                <img src={frame} />
                            </div>
                            <h1 className="pt-2">Pakap</h1>
                            <div className="socials pt-3">
                                <i class="fa-brands fa-facebook-f"></i>
                                <i class="fa-brands fa-linkedin-in"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-facebook-messenger"></i>
                                <i class="fa-brands fa-github"></i>
                            </div>
                            <div className="line bg-white">

                            </div>
                            <div className="routes d-flex">
                                <h6>Services</h6>
                                <h6>Support</h6>
                                <h6>Privacy Policy</h6>
                                <h6>FAQ's</h6>
                                <h6>Contact</h6>
                            </div>
                            <h6 className="pt-5"><span className="light">Copyright @2023</span> <span className="bolder">Pakap</span>.<span className="light"> All Rights Reserved by</span> EnvyTheme</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section12;