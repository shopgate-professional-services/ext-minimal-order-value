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
const CartNotice = ({ isOrderable }) => (
  !isOrderable ? (
    <div className={styles.notice}>
      <I18n.Text string="minimalOrderValue.noticeText">
        <strong forKey="mov">
            <I18n.Price price={minimalOrderValue} currency="EUR" />
        </strong>
      </I18n.Text>
    </div>
  ): null
);

CartNotice.propTypes = {
  points: PropTypes.bool,
};

CartNotice.defaultProps = {
  points: true,
};

export default connect(CartNotice);
