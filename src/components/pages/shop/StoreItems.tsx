import  './scss/storeItems.scss'
import { Button, Card} from 'react-bootstrap';
import { formatCurrency } from '../../../utilities/formatCurrency';
import { useShopingCart } from '../../../context/ShopingCartContext';
// https://preview.colorlib.com/#essence
interface storeitemsProps{
    id:number;
    name:string;
    price:number;
    imgURL:string;
}

const StoreItems = ({id,name,price,imgURL}: storeitemsProps) => {
  const {getItemQuantity,increaseCartQuantity,decreaseCartQuantity,removeFromCart} = useShopingCart()
  const quantity = getItemQuantity(id)
  return (
    <div className='storeItems'>
        <Card className='cart-item'>
            <Card.Img variant='top' src={imgURL} className='img-item' />
             <Card.Body className='d-flex flex-column'>
                <Card.Title className=' justify-content-space-between align-items-baseline mb-4'>
                    <span className='fs-2'>{name}</span>
                    <br />
                    <span className='ms-2 text-muted price-item'>{formatCurrency(price)}</span>
                </Card.Title>
                <div className="mt-auto">
                  {quantity === 0 ? (
                      <Button className='button-item' onClick={() => increaseCartQuantity(id)}>Add To Cart</Button>
                  ) :( <div className='d-flex align-items-center flex-column' style={{gap:".5rem"}}>
                          <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                            <div>
                              <span className='fs-3'>{quantity}</span> in Cart
                            </div>
                          <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                        <div className='d-flex align-items-center justify-content-center' style={{gap:".5rem"}}>
                          <Button variant='danger' size='sm' onClick={() => removeFromCart(id)}>Remove</Button>
                        </div>
                    </div>
                    )}
                </div>
             </Card.Body>
        </Card>
    </div>
  )
}

export default StoreItems