
import React from 'react';

import Button from '@mui/material/Button'
//
import { CardItemType } from '../ShopCart';


import { Wrapper } from './CartItem';



type Props = {
  item:CardItemType;
  addToCart: (clickedItem: CardItemType) => void;
  removeFromCart: (id: number) => void;
}

const CartItem2 = (props: Props) => {
  return (
    <Wrapper>
      <div>
          <h3>{props.item.title}</h3>
          <div className='information'>
              <p>Price : ${props.item.price}</p>
              <p>Total : ${(props.item.amount * props.item.price).toFixed(2)}</p>
          <div className="buttons">
            <Button
            size='small'
            disableElevation
            variant='contained'
            onClick={() => props.removeFromCart(props.item.id)}
            >
              -
            </Button>
            <p style={{margin:"15px"}}>{props.item.amount}</p>
            <div className="buttons2">
            <Button
            size='small'
            disableElevation
            variant='contained'
            onClick={() => props.addToCart(props.item)}
            >
              +
            </Button>
          </div>
          </div>

      </div>
      </div>
      <img src={props.item.image} alt={props.item.title} />
    </Wrapper>
  )
}

export default CartItem2