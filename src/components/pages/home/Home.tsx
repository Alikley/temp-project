import './Home.scss'
import { Card,Col,Container, Row,Button } from 'react-bootstrap'
import Carousel from "react-multi-carousel";
import { Image } from 'react-bootstrap'
import storeitems from '../../../data/items.json'


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30
  }
};


const Home = () => {
  
  return (
    <div className='home'>
      <section>
      {/* <Card.Img  src='../../../../public/image/BG.jpg'/>
                <Card.ImgOverlay>
                  <Card.Title>Card title</Card.Title>
                </Card.ImgOverlay> */}

            <Card className="bg-dark text-white back" >
              <Card.Img
                src="	https://preview.colorlib.com/theme/essence/img/bg-img/bg-1.jpg"
                alt="Card image"
              />
              <Card.ImgOverlay>
                <h6 className='tit1'>asoss</h6>
                <h2 className='tit2'>New Collectionl</h2>
                <Button>view collection</Button>
              </Card.ImgOverlay>
            </Card>
                        
      </section>


       
    <Container>
      <Row className='justify-content-center'>
          <Col className='col-12 col-sm-6 col-md-4'>
          <Card className='d-flex align-items-center justify-content-center CARD'>
              <Card.Img  src="	https://preview.colorlib.com/theme/essence/img/bg-img/bg-2.jpg" className='img'    />
                <Card.ImgOverlay>
                  <Card.Title className='tit'>Clothing</Card.Title>
                </Card.ImgOverlay>
            </Card>
          </Col>
          <Col className='col-12 col-sm-6 col-md-4'>
            <Card className='d-flex align-items-center justify-content-center CARD'>
              <Card.Img  src="	https://preview.colorlib.com/theme/essence/img/bg-img/bg-3.jpg"  className='img'  />
                <Card.ImgOverlay>
                  <Card.Title className='tit'>Shoes</Card.Title>
                </Card.ImgOverlay>
            </Card>
          </Col>
          <Col className='col-12 col-sm-6 col-md-4'>
          <Card className='d-flex align-items-center justify-content-center CARD'>
              <Card.Img  src="	https://preview.colorlib.com/theme/essence/img/bg-img/bg-4.jpg" className='img'  />
                <Card.ImgOverlay>
                  <Card.Title className='tit'>Accessories</Card.Title>
                </Card.ImgOverlay>
            </Card>
          </Col>
      </Row>
    </Container>



      <Container>
        <Row style={{margin:"0 0 85px"}}>
            <Col className='col-12'>
            <Card className='card-sec'>
                <Card.Img  src="	https://preview.colorlib.com/theme/essence/img/bg-img/bg-5.jpg" className='IMG_BG'   />
                  <Card.ImgOverlay>
                    <h6>-60%</h6>
                    <h2>Global Sale</h2>
                    <Button>Buy Now</Button>
                  </Card.ImgOverlay>
              </Card>
            </Col>
        </Row>
      </Container>

        <div>
              <Carousel
              ssr
              partialVisbile
              itemClass="image-item"
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={600}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              
            >
              {storeitems.map(image => {
                return (
                  <Image
                    draggable={false}
                    style={{ width: "70%", height: "100%" }}
                    src={image.imgURL}
                  />
                );
              })}
            </Carousel>
        </div>



    
    </div>
  )
}

export default Home