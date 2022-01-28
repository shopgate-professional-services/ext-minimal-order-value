import React from 'react';
import PropTypes from 'prop-types';
import I18n from '@shopgate/pwa-common/components/I18n';
import styles from './style';
import connect from './connector';
import getConfig from '../../helpers/getConfig';

const { minimalOrderValue } = getConfig();

/**
 * The CartNotice component
 */
const CartNotice = ({ 
  isOrderable,
  currency,
}) => (
  !isOrderable ? (
    <div className={styles.notice}>
      <I18n.Text string="minimalOrderValue.noticeText">
        <strong forKey="mov">
            <I18n.Price price={minimalOrderValue} currency={currency} />
        </strong>
      </I18n.Text>
    </div>
  ): null
);

CartNotice.propTypes = {
  isOrderable: PropTypes.bool,
  currency: PropTypes.string,
};

CartNotice.defaultProps = {
  isOrderable: true,
  currency: "",
};

export default connect(CartNotice);
