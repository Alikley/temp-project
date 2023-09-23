import { NavLink } from 'react-router-dom';
import {Button,Container,Form,Nav,Navbar,NavDropdown} from 'react-bootstrap';

import { LoginContext } from '../../../context/LoginContext';
import { useContext } from 'react';
import { FiHeart,FiUser } from "react-icons/fi";
import './Header.scss'
function Header() {
  const userLog = useContext(LoginContext)


  return (
    <div>
           {/* <NavLink to="/">خانه</NavLink>
            {
              userLog.isLogin?
              <NavLink to="/panel"> پنل</NavLink>
              :
              <NavLink to="/login">ورود</NavLink>

            } */}
 <Navbar expand="lg" className="bg-body-tertiary abs p-3" data-bs-theme="light">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
             <NavDropdown title="Shop" id="navbarScrollingDropdown">
              <div style={{display:"grid",columnGap:"50px"}}>
                <NavDropdown.Item href="#action3"><NavLink>Women's Collection</NavLink></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">
                  <NavLink>Dresses</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  <NavLink>Blouses & Shirts</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  <NavLink>T-shirts</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  <NavLink>Rompers</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  <NavLink>Bras & Panties</NavLink>
                </NavDropdown.Item>
              <div>
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </div>
              <div>
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </div>
              </div>
            </NavDropdown>

            <NavDropdown title="Pages" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link ><NavLink to="/">Shop</NavLink></Nav.Link>
            <Nav.Link href="#" >
              Blog
            </Nav.Link>
          </Nav>

          <Form className="d-flex form" >
            <Form.Control 
              type="search"
              placeholder="Search"
              className="me-2 "
              aria-label="Search"
            />
          </Form>
          <NavLink>
            <FiHeart />
          </NavLink>

          <NavLink>
            <FiUser />
          </NavLink>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
