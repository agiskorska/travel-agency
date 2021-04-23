import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from 'react-flexbox-grid';
import pricing from '../../../data/pricing.json';
import settings from '../../../data/settings';
import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';

import Button from '../../common/Button/Button';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';

const sendOrder = (options, tripCost) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));
  const payload = {
    ...options,
    totalCost,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};

const evaluateOrder = (options, id, country, tripCost) => {
  if (options.name === '') {
    alert('Please provide your name');
  } else if (options.contact === '') {
    alert('Please provide your contact details');
  } else {
    options.tripId = id;
    options.country = country;
    sendOrder(options, tripCost);
    alert('Thanks for your order. We received it!');
  }
};

export class OrderForm extends React.Component {
  render() {
    const {options, tripCost, setOrderOption, id, country} = this.props;
    return (
      <div>
        <Row>
          {pricing.map((option) =>
            <Col md={4} key={option.id}>
              <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption} />
            </Col>
          )}
          <Col md={4} key='button'>
            <Button onClick={() => evaluateOrder(options, id, country, tripCost) }>Order now!</Button>
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
  id: PropTypes.string,
  country: PropTypes.string,
};


export default OrderForm;
