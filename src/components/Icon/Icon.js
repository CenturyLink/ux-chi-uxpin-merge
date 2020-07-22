import * as PropTypes from 'prop-types';
import * as React from 'react';

/* eslint-disable */
const Icon = (props) => (
  <i className={`
    chi-icon
    icon-${props.icon}
    ${props.color ? `-text--${props.color}` : ''}
    ${props.size ? `-${props.size}` : ''}
  `}
     onClick={props.click}
     onMouseEnter={props.mouseOver}
     onMouseLeave={props.mouseLeave}
     onMouseDown={props.mouseDown}
     onMouseUp={props.mouseUp}>
  </i>
);

Icon.propTypes = {
  onClick: PropTypes.func,
  color: PropTypes.oneOf(['primary', 'secondary', 'dark', 'light', 'danger', 'grey', 'muted']),
  size: PropTypes.oneOf(['xs', 'sm', 'sm--2', 'sm--3', 'md', 'lg', 'xl', 'xxl']),
  icon: PropTypes.string,
  click: PropTypes.func,
  mouseDown: PropTypes.func,
  mouseUp: PropTypes.func,
  mouseOver: PropTypes.func,
  mouseLeave: PropTypes.func,
};
/* eslint-enable */

Icon.defaultProps = {
  size: 'md',
  color: 'primary',
  icon: 'atom',
};

export { Icon as default };
