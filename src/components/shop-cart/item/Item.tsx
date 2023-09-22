import React from 'react'

import Button from '@mui/material/Button'
//type
import { CardItemType } from '../ShopCart';
//styled
import { Wrapper } from './Item.styled'


interface Props  {
    item: CardItemType;
    handleAddToCart:(clickedItem:CardItemType) => void;
}


const Item: React.FC<Props> = ({item , handleAddToCart}) =>{
    return(

    <Wrapper>
        <img src={item.image} alt={item.title} />
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>${item.price}</h3>
        <Button onClick={() => handleAddToCart(item)}>Add to Cart</Button>
        </div>
    </Wrapper>
    )
}

export default Item