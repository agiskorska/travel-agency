import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderSummary.scss';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';

class OrderSummary extends React.Component {

  render() {
    const {price, options} = this.props;
    return (
      <div>
        <h2 className={styles.component}>Total: <strong>{formatPrice(calculateTotal(price, options))}</strong></h2>
      </div>

    );
  }
}

OrderSummary.propTypes = {
  options: PropTypes.object,
  price: PropTypes.string,
};

export default OrderSummary;
