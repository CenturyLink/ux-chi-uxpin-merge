import * as PropTypes from 'prop-types';
import * as React from 'react';

const Icon = (props) => (
  <i className={`
    chi-icon
    icon-${props.icon}
    ${props.color ? `-text--${props.color}` : ''}
    ${props.size ? `-${props.size}` : ''}
  `}>
  </i>
);

/* eslint-disable */
Icon.propTypes = {
  onClick: PropTypes.func,
  color: PropTypes.oneOf(['primary', 'secondary', 'dark', 'light', 'danger', 'grey', 'muted']),
  size: PropTypes.oneOf(['xs', 'sm', 'sm--2', 'sm--3', 'md', 'lg', 'xl', 'xxl']),
  icon: PropTypes.string,
};
/* eslint-enable */

Icon.defaultProps = {
  size: 'md',
  color: 'primary',
  icon: 'atom',
};

export { Icon as default };
