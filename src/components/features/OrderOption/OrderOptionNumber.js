import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionNumber = ({currentValue, limits, setOptionValue}) => {
  return (
    <div className={styles.number}>
      <input min={limits.min} max={limits.max} value={currentValue} type="number" className={styles.inputSmall}  onChange={event => setOptionValue(event.currentTarget.value)}></input>
    </div>
  );
};

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.any,
  limits: PropTypes.object,
  setOptionValue: PropTypes.func,

};

export default OrderOptionNumber;
