import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice';

const newValueSet = (currentValue, id, checked) => {
  if(checked){
    return [
      ...currentValue,
      id,
    ];
  } else {
    return currentValue.filter(value => value != id);
  }
};


const OrderOptionCheckboxes = ({values, setOptionValue, currentValue}) => {
  return (
    <div className={styles.checkboxes}>
      {values.map(value => (
        <label key={value.id}>
          <input type='checkbox' value={value.price} onChange={event => setOptionValue(newValueSet(currentValue, value.id, event.currentTarget.checked))} id={value.id} defaultChecked={currentValue.includes(value.id) ? true : false} />
          {value.name} ({formatPrice(value.price)}/pp)
        </label>
      ))}
    </div>
  );
};

OrderOptionCheckboxes.propTypes = {
  values: PropTypes.any,
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.array,
  options: PropTypes.any,
};

export default OrderOptionCheckboxes;
