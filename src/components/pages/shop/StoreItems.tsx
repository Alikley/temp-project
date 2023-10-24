import  './scss/storeItems.scss'
import { Button, Card, Col, Container, Nav, Row} from 'react-bootstrap';
import { formatCurrency } from '../../../utilities/formatCurrency';
// import { useShopingCart } from '../../../context/ShopingCartContext';
// import { useQuery } from 'react-query';
import  LinearProgress  from '@mui/material/LinearProgress';
import { useState,useEffect } from 'react';
import ShowProducts from './ShowProducts';
// https://preview.colorlib.com/#essence
export interface CardItemType{
  id:number;
  category:string
  description:string;
  image:string;
  price:number;
  title:string
  amount:number
 }



const StoreItems = () => {
  const [data, setData] = useState([] as CardItemType[])
  const [filter, setfilter] = useState(data)
  const [loading,setLoading] = useState(false)
  let componentMounted = true;






  useEffect(() => {
    const getProducts = async () => {
      setLoading(true)
      const response = await fetch('https://fakestoreapi.com/products');
      if(componentMounted){
        setData(await response.clone().json());
        setfilter(await response.json())
        setLoading(false);
        console.log(filter);
        
      }
      return () => {
        componentMounted = false;
      }
    }
    getProducts();
  },[])






    const Loading = () => {
      return(
        <>
          <LinearProgress />
        </>
      )
    }
    

  return (
    <div className='storeItems'>
      <Container>
        <Row className='justify-content-center' >
          {loading ? <Loading /> : <ShowProducts filter={filter} />}
        </Row>
      </Container>
    </div>
  )
}

export default StoreItems
