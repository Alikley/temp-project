import { useState } from 'react'
import { useQuery } from 'react-query';
//components

import  Drawer  from '@mui/material/Drawer';
import  LinearProgress  from '@mui/material/LinearProgress';
import  Grid  from '@mui/material/Grid';
import  Badge  from '@mui/material/Badge';
import { AddShoppingCart } from '@mui/icons-material';
//style
import {Wrapper,StyledButton} from'./App.styled';
import Item from './item/Item';
import Cart from './cart/Cart';
//type
 export interface CardItemType{
  id:number;
  category:string
  description:string;
  image:string;
  price:number;
  title:string
  amount:number
 }

const getProducts = async (): Promise<CardItemType[]> => 
await (await fetch('https://fakestoreapi.com/products')).json();

function ShopCart() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cardItems, setCardItems] = useState([] as CardItemType[])

  const {data, isLoading , error} = useQuery<CardItemType[]>('products',getProducts);
 
    console.log(data);

    const getTotalItems = (items: CardItemType[]) =>
    items.reduce((ack:number,items) => ack + items.amount, 0)

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
    
    if(isLoading) return <LinearProgress />;
    if (error) return <div>Something Went Wrong ...</div>
  
  return (
    <div className="App">
      <Wrapper>
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
        <Grid container spacing={3}>
          {data?.map(item => (
            <Grid item key={item.id} xs={12} sm={4}>
              <Item item={item} handleAddToCart={handleAddToCart} />
            </Grid>
          ))}
        </Grid>
      </Wrapper>
    </div>
  );
}

export default ShopCart;
