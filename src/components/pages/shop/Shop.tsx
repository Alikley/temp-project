import { Card, Col, Container, Nav, Row } from 'react-bootstrap'
import storeitems from '../../../data/items.json'
import StoreItems from './StoreItems'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import './scss/shop.scss'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Slider } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 260,
    },
  },
};

const names = [
  'Newest',
  'Price: $$ - $',
  'Price: $ - $$'
];


function valuetext(value: number) {
  return `${value}$`;
}

const minDistance = 10;

const Shop = () => {

  const [personName, setPersonName] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };




  const [value1, setValue1] = useState<number[]>([20 , 37]);

  const handleChange1 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number,
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

 




  return (
    <div className='shop'>
            <Card  className='CArd'>
                <Card.Img  src="https://preview.colorlib.com/theme/essence/img/bg-img/breadcumb.jpg" className='IMG'/>
                  <Card.ImgOverlay>
                    <h2>Global Sale</h2>
                  </Card.ImgOverlay>
              </Card>




       <Container>
        <Row>
            <Col className='col-12'>
              <div className='d-flex align-items-center justify-content-between product'>
                  <div className='total-products'>
                    <p>
                      <span>200 </span>  
                      products found
                    </p>
                  </div>
                  <div className='Product-sort d-flex'>
                  <FormControl sx={{ m: 1, width: 300 }}>
                      <InputLabel id="demo-multiple-checkbox-label">Highest Rated</InputLabel>
                      <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput label="Highest Rated" />}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                      >
                        {names.map((name) => (
                          <MenuItem key={name} value={name}>
                            <Checkbox checked={personName.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                          </MenuItem>
                        ))}
                      </Select>
                </FormControl>
                  </div>  
              </div>
            </Col>
        </Row>
      </Container>







        <Row md={2} xs={2} lg={3} className='g-0'>
            {storeitems.map(item => (
                <Col key={item.id} className='col-12 col-md-4 col-lg-3 '>
                    <StoreItems {...item} />
              
                </Col>
            ))}
        </Row>

          <div>
            <h6 className='mb-30'style={{position:"absolute",bottom:"38.5rem",left:"50px",fontWeight:"900"}}>Catagories</h6>
            <Nav defaultActiveKey="/home" className="flex-column" style={{position:"absolute",bottom:"11rem",left:"50px"}}>
              <h5 style={{fontSize:"16px"}}>clothing</h5>
                <Nav.Link as={NavLink} to="/home">All</Nav.Link>
                <Nav.Link as={NavLink} to="/home">Bodysuits</Nav.Link>
                <Nav.Link as={NavLink} to="/home">Dresses</Nav.Link>
                <Nav.Link as={NavLink} to="/home">Hoodies & Sweats</Nav.Link>
                <Nav.Link as={NavLink} to="/home">Jackets & Coats</Nav.Link>
                <Nav.Link as={NavLink} to="/home">Jeans</Nav.Link>
                <Nav.Link as={NavLink} to="/home">Pants & Leggings</Nav.Link>
                <Nav.Link as={NavLink} to="/home">Rompers & Jumpsuits</Nav.Link>
                <Nav.Link as={NavLink} to="/home">Shirts & Blouses</Nav.Link>
                <Nav.Link as={NavLink} to="/home">Shirts</Nav.Link>

            </Nav>
          </div>
          <div style={{position:"absolute",bottom:"10rem"}}>
            <Nav defaultActiveKey="/home" className="flex-column" style={{position:"absolute",bottom:"",left:"50px"}}>
              <h5 style={{fontSize:"16px"}}>SHOSE</h5>
                <Nav.Link as={NavLink} to="/home">ACCESSORIES</Nav.Link>
            </Nav>
          </div>

              <Box sx={{ width: 200,marginLeft:"50px",position:"absolute",bottom:"0rem" }}>  
                <Slider
                  getAriaLabel={() => 'Minimum distance'}
                  value={value1}
                  onChange={handleChange1}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                  disableSwap
                />
                ${value1}
              </Box>
    </div>
  )
}

export default Shop