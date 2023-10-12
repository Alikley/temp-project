import React from 'react'
import { Offcanvas, Stack } from 'react-bootstrap'
import { useShopingCart } from '../../../context/ShopingCartContext'
import CartItems from './CartItems'
import { formatCurrency } from '../../../utilities/formatCurrency'
import storeitems from '../../../data/items.json'

type Props = {
    isOpen:boolean
}

const ShoppingCart = ({isOpen}:Props) => {
  const {closeCart,cartItems} = useShopingCart()

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement='end'>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack gap={3}>
                {cartItems.map(item => (
                    <CartItems key={item.id}  {...item}/>
                ))}
                <div className='ms-auto fw-bold fs-5'>
                    Total {formatCurrency(cartItems.reduce((total,cartItem) =>{
                        const item =storeitems.find(i => i.id === cartItem.id)
                        return total + (item?.price || 0) * cartItem.quantity
                    },0)
                    )}
                </div>
            </Stack>
        </Offcanvas.Body>
    </Offcanvas>
  )
}

export default ShoppingCart