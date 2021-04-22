import React from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';

import 'react-datepicker/dist/react-datepicker-cssmodules.css';


const OrderOptionDate = ({setOptionValue, currentValue}) => {
  return (
    <div>
      <DatePicker selected={currentValue} onChange={date => setOptionValue(date)} />
    </div>
  );
};

OrderOptionDate.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.any,
};

export default OrderOptionDate;
