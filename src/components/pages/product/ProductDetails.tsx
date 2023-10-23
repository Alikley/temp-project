import { Carousel, Image } from 'react-bootstrap'
import storeitems from '../../../data/items.json'

type Props = {}

const ProductDetails = (props: Props) => {
    
  return (
    <div>
        
        {storeitems.map((item, idx) => (
        <Carousel key={item.id}>
          <Carousel.Item interval={1000}>
            <Image  src={item.imgURL} />
          </Carousel.Item>
      </Carousel>
          
        
      ))}
    </div>
  )
}

export default ProductDetails