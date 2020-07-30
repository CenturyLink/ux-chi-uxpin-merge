import * as PropTypes from 'prop-types';
import * as React from 'react';

/* eslint-disable */
/**
 * @uxpincomponent
 */
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
  size: PropTypes.oneOf(['xs', 'sm', 'sm--2', 'sm--3', 'md', 'lg', 'xl', 'xxl']),
  icon: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'dark', 'light', 'danger', 'grey', 'muted']),
  click: PropTypes.func,
  mouseDown: PropTypes.func,
  mouseLeave: PropTypes.func,
  mouseOver: PropTypes.func,
  mouseUp: PropTypes.func,
};
/* eslint-enable */

Icon.defaultProps = {
  size: 'sm',
  color: 'primary',
  icon: 'atom',
};

export { Icon as default };
