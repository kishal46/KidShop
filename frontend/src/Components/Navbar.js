import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Authuse from './Auth';

function NormalNavbar() {
  const auth = Authuse()
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Nav><img src='https://nuruladilahahmad.com/wp-content/uploads/2019/11/KidsShop-logo.png' id='img'></img></Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto gap-3">
            <NavLink to={"/"} className="nav-link">Home</NavLink>
            <NavLink to={"/purchase"} className="nav-link">Purchase</NavLink>
            <NavLink to={"/service"} className="nav-link">Service</NavLink>
            <NavLink to={"/contact"} className="nav-link">Contact</NavLink>
            <NavLink to={"/about"} className="nav-link">About</NavLink>
          </Nav>
          {auth.userName?(
            <Nav className='name'>            
            <NavLink to={"/profile"} className="nav-link">
              <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/user-male-circle.png" alt="user-male-circle"/></NavLink>
            </Nav>
          ):<Nav>
          <div id="sign">
            <NavLink to={"/signup"} className="nav-link"><button className="btn btn-outline-primary me-2" aria-label="Sign Up">Signup</button></NavLink>
            <NavLink to={"/login"} className="nav-link"><button className="btn btn-outline-primary" aria-label="Login">Login</button></NavLink>
          </div>
        </Nav>

          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NormalNavbar;
