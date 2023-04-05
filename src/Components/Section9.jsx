import React from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import shape6 from "../Images/shape6.png";
import shape7 from "../Images/shape7.png";

import Sonnet1 from "./Sonnet1";

const Section9 = () => {
 return (
  <div className="section9-area ptb-100">
   <div className="pricing-area">
    <div className="container">
     <div className="row">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
       <Row className="align-items-center">
        <Col sm={3}>
         <div className="pricing-title text-white ">
          <h5>Pricing Table</h5>
          <h1>No Hidden Charge Applied, Choose Your Plan</h1>
         </div>
         <Nav variant="pills" className="pricing-tab">
          <Nav.Item>
           <Nav.Link eventKey="first" className="m-pricing">
            Monthly
           </Nav.Link>
          </Nav.Item>
          <Nav.Item>
           <Nav.Link eventKey="second" className="m-pricing">
            Yearly
           </Nav.Link>
          </Nav.Item>
         </Nav>
        </Col>
        <Col sm={9}>
         <Tab.Content>
          <Tab.Pane eventKey="first">
           <Sonnet1 />
          </Tab.Pane>
          <Tab.Pane eventKey="second">
           <Sonnet1 />
          </Tab.Pane>
         </Tab.Content>
         <div className="more-plans">
          <a href="#">See All Pricing Plan</a>
         </div>
        </Col>
       </Row>
      </Tab.Container>
     </div>
    </div>
   </div>
   <div className="shape7">
    <img src={shape7} />
   </div>
   <div className="shape6">
    <img src={shape6} />
   </div>
  </div>
 );
};

export default Section9;
