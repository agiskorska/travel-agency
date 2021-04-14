import {connect} from 'react-redux';
import OrderForm from './OrderForm';
import {getOrderOptions} from '../../../redux/orderRedux';

const mapStateToProps = state => ({
  options: getOrderOptions(state),
});

const mapDispatchToProps = dispatch => ({
  getOrderOptions: order => dispatch(getOrderOptions(order)),

});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
