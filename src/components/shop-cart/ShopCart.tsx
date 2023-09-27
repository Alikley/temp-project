import { useState } from 'react'
import { useQuery } from 'react-query';
//components

import  LinearProgress  from '@mui/material/LinearProgress';
import  Grid  from '@mui/material/Grid';
//style
import {Wrapper} from'./App.styled';
import Item from './item/Item';
import Layout from '../layout/Layout';
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
  const [cardItems, setCardItems] = useState([] as CardItemType[])

  const {data, isLoading , error} = useQuery<CardItemType[]>('products',getProducts);
 
    console.log(data);

  

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


    
    if(isLoading) return <LinearProgress />;
    if (error) return <div>Something Went Wrong ...</div>
  
  return (
    <div className="App">
      <Wrapper>
        <Layout cardItems={cardItems} setCardItems={setCardItems}  />
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
