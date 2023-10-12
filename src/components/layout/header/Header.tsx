import { NavLink } from 'react-router-dom';
import {Button, Container,Form,Nav,Navbar,NavDropdown} from 'react-bootstrap';

import './Header.scss'
import { LoginContext } from '../../../context/LoginContext';
import { useContext} from 'react';
import { FiHeart,FiUser,FiLogOut,FiShoppingCart } from "react-icons/fi";
import { useShopingCart } from '../../../context/ShopingCartContext';


function Header() {
  const {openCart,cartQuantity} = useShopingCart()
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
 <Navbar sticky='top' expand="lg" className="bg-bg-white shadow-sm mb-3" >
      <Container fluid>
        <Navbar.Brand to="/" as={NavLink} >Mohammad</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
             <NavDropdown title="Shop" id="navbarScrollingDropdown">
              <div style={{display:"grid",columnGap:"50px"}}>
                <NavDropdown.Item href="#action3" to="/" as={NavLink} >Women's Collection</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4" to="/" as={NavLink}>
                  Dresses
                </NavDropdown.Item>

                <NavDropdown.Item href="#action5" to="/" as={NavLink}>
                  Blouses & Shirts
                </NavDropdown.Item>

                <NavDropdown.Item href="#action5" to="/" as={NavLink}>
                  T-shirts
                </NavDropdown.Item>

                <NavDropdown.Item href="#action5" to="/" as={NavLink}>
                  Rompers
                </NavDropdown.Item>

                <NavDropdown.Item href="#action5" to="/" as={NavLink}>
                  Bras & Panties
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

            <Nav.Link to="/shop" as={NavLink}>Shop</Nav.Link>
            <Nav.Link href="#" >
              Blog
            </Nav.Link>
          </Nav> 

            <div className='form'>
              <Form className="d-flex form" >
                <Form.Control 
                  type="search"
                  placeholder="Search"
                  className="me-2 "
                  aria-label="Search"
                />
              </Form>
            </div>
          <NavLink to="/">
            <FiHeart style={{color:"#000",transform:"translateX(-65px)",borderLeft:"1px solid #000",fontSize:"1.5rem"}} />
          </NavLink>








          {
              userLog.isLogin?
              <NavLink to="/panel" style={{color:"#000",transform:"translateX(-30px)",borderLeft:"1px solid #000",fontSize:"1.5rem"}}>
               <NavDropdown title={<FiLogOut  />} id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3"><button onClick={userLog.logout}>logOUT</button></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

              
              </NavLink>

              :
              <NavLink to="/login" style={{color:"#000",transform:"translateX(-30px)",borderLeft:"1px solid #000",fontSize:"1.5rem"}}><FiUser />
              
              
              </NavLink>
            }
          
            {cartQuantity > 0 && <Button onClick={openCart} style={{width:"3rem" , height:"3rem",position:"relative"}} variant='outline-primary' className='rounded-circle  '><FiShoppingCart />
            <div className="rounded-circle bg-danger justify-content-center 
            d-flex align-items-center" style={{color:"white", width:"1.5rem",height:"1.5rem",
            position:"absolute",bottom:0,right:0,transform:"translate(25%,25%)"}}>
              {cartQuantity}
              </div>
          </Button>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header