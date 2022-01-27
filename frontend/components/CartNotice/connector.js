import { connect } from 'react-redux';
import { getOrderableStatus } from '@shopgate/engage/cart';

const mapStateToProps = (state) => ({
  isOrderable: getOrderableStatus(state),
});

export default connect(mapStateToProps);
