import { Card,Col,Container, Row,Button, Carousel } from 'react-bootstrap'

import './Home.scss'


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
        <Row >
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





    
    </div>
  )
}

export default Home