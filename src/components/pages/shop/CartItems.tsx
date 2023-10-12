import { useShopingCart } from '../../../context/ShopingCartContext';
import storeitems from '../../../data/items.json'
import { Button, Stack } from 'react-bootstrap';
import { formatCurrency } from '../../../utilities/formatCurrency';

interface cartItem{
    id:number;
    quantity:number;
}

const CartItems = ({id,quantity}: cartItem) => {
  const {removeFromCart} = useShopingCart()
  const item =storeitems.find(i => i.id === id)
  if(item == null) return null
  return (
    <Stack direction='horizontal' gap={2} className='d-flex align-items-center'>
        <img src={item.imgURL} alt="" 
            style={{width:"125px",
                    height:"75px",
                    objectFit:"cover"
        }}
        />
        <div className='me-auto'>
            <div>
                {item.name} {quantity > 1 && 
                    <span className='text-muted' style={{fontSize:".65rem"}}>
                        x{quantity}
                    </span>
                }
            </div>
        </div>
        <div className='text-muted' style={{fontSize:".75rem"}}>
                {formatCurrency(item.price)}
        </div>
        <div>{formatCurrency(item.price * quantity)}</div>
        <Button variant='outline-danger' size='sm' onClick={() => removeFromCart(item.id)}>
            &times;
        </Button>
    </Stack>
  )
}

export default CartItems