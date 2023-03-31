import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../Images/black-logo.png";
import navbar from "../Images/navbar.jpg";
import Dropdown from "react-bootstrap/Dropdown";
const Header = () => {
 return (
  <div>
   <Navbar expand="lg" className="header_area">
    <Container>
     <Navbar.Brand href="#home">
      <img src={logo}></img>
     </Navbar.Brand>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto d-flex">
       <NavDropdown
        title="Home"
        id="basic-nav-dropdown"
        renderMenuOnMount={true}
        className="me-3 "
       >
        <NavDropdown.Item href="#action/3.1">Home Demo-1</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Home Demo-2</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Home Demo-3</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Home Demo-4</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Home Demo-5</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Home Demo-6</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Home Demo-7</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Home Demo-8</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Home Demo-9</NavDropdown.Item>
       </NavDropdown>
       <NavDropdown
        title="About Us"
        id="basic-nav-dropdown"
        renderMenuOnMount={true}
        className="me-3"
       >
        <NavDropdown.Item href="#action/3.2">About Simple</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Modern </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Features </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">
         <Dropdown drop="end">
          <Dropdown.Toggle variant="none">Features</Dropdown.Toggle>
          <Dropdown.Menu>
           <Dropdown.Item href="#/action-1">Feature 1 </Dropdown.Item>
           <Dropdown.Item href="#/action-2">Feature 2</Dropdown.Item>
           <Dropdown.Item href="#/action-3">Feature 3</Dropdown.Item>
          </Dropdown.Menu>
         </Dropdown>
        </NavDropdown.Item>
       </NavDropdown>
       <NavDropdown
        title="Pages"
        id="basic-nav-dropdown"
        renderMenuOnMount={true}
        className="me-3 p-relative pages "
       >
        <NavDropdown.Item href="#action/3.1">
         <div className="container submenu-3">
          <div className="row">
           <div className="col-3">
            <div className="submenu_title">Pages I</div>
            <ul class="page-item">
             <li>Team 1</li>
             <li>Team 2</li>
             <li>How it Works</li>
             <li>Gallery</li>
             <li>Services</li>
             <li>Plan</li>
            </ul>
           </div>
           <div className="col-3">
            <div className="submenu_title">Page II</div>
            <ul class="page-item">
             <li>Reviews</li>
             <li>Sign in</li>
             <li>Sign Up</li>
             <li>Forget Password</li>
             <li>Privacy Policy</li>
             <li>Terms & conditions</li>
            </ul>
           </div>
           <div className="col-3">
            <div className="submenu_title">Page III</div>
            <ul class="page-item">
             <li>Screenshots</li>
             <li>FAQ</li>
             <li>Coming Soon</li>
             <li>404 Error Page</li>
             <li>App Download</li>
             <li>Contact us</li>
            </ul>
           </div>
           <div className="col-3">
            <img src={navbar} className="navbar-img"></img>
           </div>
          </div>
         </div>
        </NavDropdown.Item>
       </NavDropdown>
       <NavDropdown
        title="Shop"
        renderMenuOnMount={true}
        id="basic-nav-dropdown"
        className="me-3"
       >
        <NavDropdown.Item href="#action/3.1">Products List</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Cart</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Checkout</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Product Details</NavDropdown.Item>
       </NavDropdown>
       <NavDropdown
        title="Blog"
        renderMenuOnMount={true}
        id="basic-nav-dropdown"
        className="me-3"
       >
        <NavDropdown.Item href="#action/3.1">Blog Grid</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
         Blog Right Sidebar
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">
         Blog Left Sidebar
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Blog Details</NavDropdown.Item>
       </NavDropdown>
       <h6 class="pt-2 opacity-75">Contact</h6>
      </Nav>
      <div className="header_right">
       <span className="started_btn">Get Started</span>
      </div>
     </Navbar.Collapse>
    </Container>
   </Navbar>
  </div>
 );
};
export default Header;

// banner_area
