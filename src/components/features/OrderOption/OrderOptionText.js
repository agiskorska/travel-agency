import React from 'react';
import styles from './OrderOption.scss';
// import PropTypes from 'prop-types';

const OrderOptionText = () => {
  return (
    <div>
      <input type="text" className={styles.input}></input>
    </div>
  );
};

OrderOptionText.propTypes = {
};

export default OrderOptionText;
