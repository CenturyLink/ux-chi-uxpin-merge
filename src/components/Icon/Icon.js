import * as PropTypes from 'prop-types';
import * as React from 'react';
import { uuid4 } from '../../utils/utils';
import './Icon.css';

/* eslint-disable */
/**
 * @uxpincomponent
 * @uxpinwrappers
 * SkipContainerWrapper
 */
const Icon = ({tooltipMessage, tooltipPosition, click, mouseDown, mouseUp, mouseLeave, mouseOver, icon, color, size, uxpinRef}) => {
  const uuid = uuid4();

  if (tooltipMessage && tooltipPosition !== 'default') {
    const initialize = setInterval(() => {
      if (window.chi && document.getElementById(uuid)) {
        window.chi.tooltip(document.getElementById(uuid));
        clearInterval(initialize);
      }
    }, 1000);
  }

  return (
    <chi-icon
      id={uuid}
      icon={icon}
      color={color}
      size={size}
      onClick={click}
      data-tooltip={tooltipMessage}
      data-position={tooltipPosition}
      onMouseEnter={mouseOver}
      onMouseLeave={mouseLeave}
      onMouseDown={mouseDown}
      onMouseUp={mouseUp}>
      <span className="-sr--only">
        i
      </span>
    </chi-icon>
  )
};

Icon.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'sm--2', 'sm--3', 'md', 'lg', 'xl', 'xxl']),
  icon: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'dark', 'light', 'info', 'grey', 'muted', 'success', 'warning', 'danger', 'navy', 'orange']),
  tooltipMessage: PropTypes.string,
  tooltipPosition: PropTypes.oneOf(['default', 'top', 'right', 'bottom', 'left']),
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
  tooltipMessage: 'Tooltip message',
  tooltipPosition: 'default',
};

export { Icon as default };
