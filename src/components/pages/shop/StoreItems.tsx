import { Button, Card, Col, Container, Row } from 'react-bootstrap';
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
    <div>

     









        <Card className='h-100' >
            <Card.Img variant='top' src={imgURL} height="200px" style={{objectFit:"cover"}} />
             <Card.Body className='d-flex flex-column'>
                <Card.Title className=' justify-content-space-between align-items-baseline mb-4'>
                    <span className='fs-2'>{name}</span>
                    <span className='ms-2 text-muted'>{formatCurrency(price)}</span>
                </Card.Title>
                <div className="mt-auto">
                  {quantity === 0 ? (
                      <Button className='w-100' onClick={() => increaseCartQuantity(id)}>+ Add To Cart</Button>
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