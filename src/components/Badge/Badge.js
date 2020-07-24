import * as PropTypes from 'prop-types';
import * as React from 'react';

/**
 * @uxpincomponent
 */
const Badge = (props) => (
  <div className={
    `chi-badge
    ${props.color ? `-${props.color}` : ''}
    ${props.size ? `-${props.size}` : ''}
    ${props.variant ? `-${props.variant}` : ''}
    `}>
    <span>{props.text}</span>
  </div>
);

/* eslint-disable sort-keys */
Badge.propTypes = {
  color: PropTypes.oneOf(['primary', 'success', 'warning', 'danger', 'dark', 'muted', 'secondary', 'light']),
  size: PropTypes.oneOf(['xs', 'sm', 'md']),
  variant: PropTypes.oneOf(['outline', 'flat']),
  text: PropTypes.string,
};
/* eslint-enable sort-keys */

Badge.defaultProps = {
  size: 'md',
  text: 'Badge',
};

export { Badge as default };
