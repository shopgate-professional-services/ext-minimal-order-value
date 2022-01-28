import { connect } from 'react-redux';
import { getOrderableStatus, getCurrency } from '@shopgate/engage/cart';

const mapStateToProps = (state) => ({
  isOrderable: getOrderableStatus(state),
  currency: getCurrency(state),
});

export default connect(mapStateToProps);
