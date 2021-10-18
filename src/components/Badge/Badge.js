import * as PropTypes from 'prop-types';
import * as React from 'react';

/**
 * @uxpinwrappers
 * SkipContainerWrapper
 */
const Badge = ({
  color, size, variant, text, uxpinRef,
}) => (
  <div
    className={
    `chi-badge
    ${color ? `-${color}` : ''}
    ${size ? `-${size}` : ''}
    ${variant ? `-${variant}` : ''}
    `}
    ref={uxpinRef}>
    <span>{text}</span>
  </div>
);

/* eslint-disable sort-keys */
Badge.propTypes = {
  color: PropTypes.oneOf(['primary', 'success', 'warning', 'danger', 'dark', 'muted', 'secondary', 'light']),
  size: PropTypes.oneOf(['xs', 'sm', 'md']),
  variant: PropTypes.oneOf(['default', 'outline', 'flat']),
  text: PropTypes.string,
};
/* eslint-enable sort-keys */

Badge.defaultProps = {
  size: 'md',
  text: 'Badge',
  variant: 'default',
};

export { Badge as default };
