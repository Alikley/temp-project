
import { Wrapper } from "./Crat.styled";
import CartItem2 from '../cartitem/CartItem2'
import { CardItemType } from '../ShopCart';
import React from "react";


type Props = {
    cartItem: CardItemType[];
    addToCart: (clicKedItem:CardItemType) => void
    removeFromCart: (id: number) => void
}




const Cart: React.FC <Props> = ({cartItem, addToCart, removeFromCart}) =>{
    return(
        <Wrapper>
            <h2>Your Shopping cart</h2>
            {cartItem.length === 0 ? <p>No items in cart</p>:null}
            {cartItem.map(item => (
                <CartItem2 
                key={item.id}
                item={item}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                
                
                />
            ))}
        </Wrapper>
    )
}


export default Cart