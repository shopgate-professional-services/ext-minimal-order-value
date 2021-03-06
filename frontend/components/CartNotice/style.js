import { css } from 'glamor';
import { themeConfig } from '@shopgate/pwa-common/helpers/config';

const { colors } = themeConfig;

const notice = css({
  backgroundColor: colors.warning,
  padding: 16,
  width: '100%',
  display: 'inline-block',
  color: colors.light,
}).toString();

export default {
  notice,
};
