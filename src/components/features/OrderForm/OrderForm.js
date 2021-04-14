import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from 'react-flexbox-grid';

import OrderSummary from '../OrderSummary/OrderSummary';

export class OrderForm extends React.Component {
  render() {
    const {options, tripCost} = this.props;
    console.log(this.props);
    return (
      <div>
        <Row>
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
};
export default OrderForm;
