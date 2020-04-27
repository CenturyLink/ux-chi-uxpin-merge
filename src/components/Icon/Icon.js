import * as PropTypes from 'prop-types';
import * as React from 'react';

const Icon = (props) => (
  <i class="chi-icon icon-atom"></i>
);

/* eslint-disable sort-keys */
Icon.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'dark', 'light', 'danger']),
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  icon: PropTypes.string,
};
/* eslint-enable sort-keys */

Icon.defaultProps = {
  size: 'md',
  color: 'primary',
  icon: 'atom',
};

export { Icon as default };
