import React from "react";
import Slider from "react-slick";
import user1 from "../Images/user1.jpg";
import user2 from "../Images/user2.jpg";
import user3 from "../Images/user3.jpg";
import user4 from "../Images/user4.jpg";

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
        arrows: false,
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
                                <div className="single-feedback-box">
                                    <div className="client-info d-flex">
                                        <div className="user">
                                            <img src={user1} />
                                        </div>
                                        <div className="name">
                                            <h5>David Warner</h5>
                                            <p>Moodle Developer</p>
                                        </div>
                                    </div>
                                    <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."</p>
                                    <div className="rating d-flex">
                                        <h5>Theme Customization</h5>
                                        <div class="stars">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="single-feedback-box">
                                    <div className="client-info d-flex">
                                        <div className="user">
                                            <img src={user2} />
                                        </div>
                                        <div className="name">
                                            <h5>David Warner</h5>
                                            <p>Moodle Developer</p>
                                        </div>
                                    </div>
                                    <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."</p>
                                    <div className="rating d-flex">
                                        <h5>Theme Customization</h5>
                                        <div class="stars">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="single-feedback-box">
                                    <div className="client-info d-flex">
                                        <div className="user">
                                            <img src={user3} />
                                        </div>
                                        <div className="name">
                                            <h5>David Warner</h5>
                                            <p>Moodle Developer</p>
                                        </div>
                                    </div>
                                    <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."</p>
                                    <div className="rating d-flex">
                                        <h5>Theme Customization</h5>
                                        <div class="stars">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="single-feedback-box">
                                    <div className="client-info d-flex">
                                        <div className="user">
                                            <img src={user4} />
                                        </div>
                                        <div className="name">
                                            <h5>David Warner</h5>
                                            <p>Moodle Developer</p>
                                        </div>
                                    </div>
                                    <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."</p>
                                    <div className="rating d-flex">
                                        <h5>Theme Customization</h5>
                                        <div class="stars">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="single-feedback-box">
                                    <div className="client-info d-flex">
                                        <div className="user">
                                            <img src={user2} />
                                        </div>
                                        <div className="name">
                                            <h5>David Warner</h5>
                                            <p>Moodle Developer</p>
                                        </div>
                                    </div>
                                    <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."</p>
                                    <div className="rating d-flex">
                                        <h5>Theme Customization</h5>
                                        <div class="stars">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section10;
