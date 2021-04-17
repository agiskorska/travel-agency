import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from 'react-flexbox-grid';
import pricing from '../../../data/pricing.json';

import Button from '../../common/Button/Button';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';


export class OrderForm extends React.Component {
  render() {
    const {options, tripCost, setOrderOption} = this.props;
    return (
      <div>
        <Row>
          {pricing.map((option) =>
            <Col md={4} key={option.id}>
              <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption} />
            </Col>
          )}
          <Col md={4} key='button'>
            <Button>Submit your order</Button>
          </Col>
          <Col xs={12}>
            <OrderSummary options={options} price={tripCost}/>
          </Col>
        </Row>
      </div>
    );
  }
}
OrderForm.propTypes = {
  options: PropTypes.object,
  tripCost: PropTypes.string,
  setOrderOption: PropTypes.func,
};


// gdzie jest jakis submit? moze byc jako input/przycisk

//jak zrobic zeby zapamietalo opcje?

export default OrderForm;
