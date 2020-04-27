import * as PropTypes from 'prop-types';
import * as React from 'react';

const Button = (props) => (
  <button className={`
    chi-btn 
    ${props.color ? `-${props.color}` : ''}
    ${props.size ? `-${props.size}` : ''}
    `}
    disabled={props.disabled}>
    {props.value}
  </button>
);

/* eslint-disable sort-keys */
Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  color: PropTypes.oneOf(['primary', 'secondary', 'dark', 'light', 'danger']),
  leftIcon: PropTypes.node,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  value: PropTypes.string,
};
/* eslint-enable sort-keys */

Button.defaultProps = {
  disabled: false,
  size: 'md',
  color: 'primary',
  value: 'Button',
};

export { Button as default };
