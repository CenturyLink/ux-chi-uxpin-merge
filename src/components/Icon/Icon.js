import * as PropTypes from 'prop-types';
import * as React from 'react';

/* eslint-disable */
/**
 * @uxpincomponent
 * @uxpinwrappers
 * SkipContainerWrapper
 */
const Icon = ({click, mouseDown, mouseUp, mouseLeave, mouseOver, icon, color, size, uxpinRef}) => (
  <div
    onClick={click}
    onMouseEnter={mouseOver}
    onMouseLeave={mouseLeave}
    onMouseDown={mouseDown}
    onMouseUp={mouseUp}>
    <span className="-sr--only">
      i
    </span>
    <i className={`
      chi-icon
      icon-${icon}
      ${color ? `-icon--${color}` : ''}
      ${size ? `-${size}` : ''}
    `}
      ref={uxpinRef}>
    </i>
  </div>
);

Icon.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'sm--2', 'sm--3', 'md', 'lg', 'xl', 'xxl']),
  icon: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'dark', 'light', 'info', 'grey', 'muted', 'success', 'warning', 'danger']),
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
