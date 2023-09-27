import { NavLink } from 'react-router-dom';
import {Container,Form,Nav,Navbar,NavDropdown} from 'react-bootstrap';

import './Header.scss'
import { LoginContext } from '../../../context/LoginContext';
import { useContext, useState } from 'react';
import { FiHeart,FiUser,FiLogOut } from "react-icons/fi";
import  Drawer  from '@mui/material/Drawer';
import  Badge  from '@mui/material/Badge';
import { AddShoppingCart } from '@mui/icons-material';
import {StyledButton} from'../../shop-cart/App.styled';
import Cart from '../../shop-cart/cart/Cart';
export interface CardItemType{
  id:number;
  category:string;
  description:string;
  image:string;
  price:number;
  title:string
  amount:number
 }
 interface StateType{
  cardItems:CardItemType[]
  setCardItems:React.Dispatch<React.SetStateAction<CardItemType[]>>
 }
function Header({cardItems,setCardItems}:StateType) {
  const [cartOpen, setCartOpen] = useState(false)


  const userLog = useContext(LoginContext)


  
  
  
  const getTotalItems = (items: CardItemType[]) => {
    if (!items) return 0; // Add a check to handle undefined items
    
    return items.reduce((ack: number, item: CardItemType) => ack + item.amount, 0);
  };
    const handleAddToCart = (clickedItem:CardItemType) =>{
    setCardItems(prev => {
      const isItemcart = prev.find(item => item.id === clickedItem.id)

      if(isItemcart){
        return prev.map(item => (
          item.id === clickedItem.id?
          {...item, amount: item.amount +1}
          : item
        ))

      }
      return [...prev, {...clickedItem, amount:1}]
    })
  };

  const handleRemoveFromCart = (id:number) => {
    setCardItems(prev => (
      prev.reduce((ack , item) => {
        if(item.id === id){
          if(item.amount === 1) return ack;
          return [...ack, {...item,amount:item.amount - 1}]
        }else{
          return [...ack,item]
        }
      }, [] as CardItemType[])
    ))
  };

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
        <NavLink to="/"><Navbar.Brand >Mohammad</Navbar.Brand></NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
             <NavDropdown title="Shop" id="navbarScrollingDropdown">
              <div style={{display:"grid",columnGap:"50px"}}>
                <NavDropdown.Item href="#action3"><NavLink to="/">Women's Collection</NavLink></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">
                  <NavLink to="/">Dresses</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  <NavLink to="/">Blouses & Shirts</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  <NavLink to="/">T-shirts</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  <NavLink to="/">Rompers</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  <NavLink to="/">Bras & Panties</NavLink>
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
            <FiHeart />
          </NavLink>




          <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
          <Cart 
          cartItem={cardItems} 
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
          />
        </Drawer>
        <StyledButton onClick={() => setCartOpen(true)} >
            <Badge badgeContent={getTotalItems(cardItems)} color='error'>
              <AddShoppingCart />
            </Badge>
        </StyledButton>






          {
              userLog.isLogin?
              <NavLink to="/panel"><FiLogOut /></NavLink>
              :
              <NavLink to="/login"><FiUser /></NavLink>

            }
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
