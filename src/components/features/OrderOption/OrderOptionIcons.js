import React, { useState } from 'react';
import styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice';
import PropTypes from 'prop-types';
import Icon from '../../common/Icon/Icon';




const OrderOptionIcons = ({required, values, setOptionValue, currentValue}) => {
  const [activeId, setActiveId] = useState(null);



  const handleClick = (id) => {
    setOptionValue(id);
    setActiveId(id);
  };

  return (
    <div className={styles.icon}>
      {required ? '' : (
        <div className={styles.i} onClick={() => setOptionValue('')}>none</div>
      )}
      {values.map(value => (
        <div className={activeId === value.id || value.id === currentValue ? styles.iconActive : styles.i} key={value.id} value={value.id} onClick={() => handleClick(value.id)}><Icon name={value.icon} />({formatPrice(value.price)}/pp)</div>
      ))}
    </div>
  );
};






OrderOptionIcons.propTypes = {
  values: PropTypes.any,
  required: PropTypes.any,
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.func,
};

export default OrderOptionIcons;
