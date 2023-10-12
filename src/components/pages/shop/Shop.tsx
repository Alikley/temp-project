import { Card, Col, Container, Row } from 'react-bootstrap'
import storeitems from '../../../data/items.json'
import StoreItems from './StoreItems'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import './scss/StoreItems.scss'
import { useState } from 'react';

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
                      <span></span>  
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







        <Row md={3} xs={1} lg={3} className='g-3'>
            {storeitems.map(item => (
                <Col key={item.id}>
                    <StoreItems {...item} />
                </Col>
            ))}
        </Row>
    </div>
  )
}

export default Shop