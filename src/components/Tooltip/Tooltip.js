import * as PropTypes from 'prop-types';
import * as React from 'react';
import './Tooltip.css';
import { uuid4 } from '../../utils/utils';

/**
 * @uxpincomponent
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export default function Tooltip(props) {
  const uuid = uuid4();

  const initialize = setInterval(() => {
    if (window.chi && document.getElementById(uuid)) {
      window.chi.tooltip(document.getElementById(uuid));
      clearInterval(initialize);
    }
  }, 100);

  return (
    <button
      type="button"
      id={uuid}
      data-tooltip={props.message}
      data-position={props.position}
      className={`
        chi-button
        -icon
        ${props.size ? `-${props.size}` : ''}
        ${props.flat ? '-flat' : ''}
        `}
      disabled={props.disabled}
      onClick={props.click}
      onMouseEnter={props.mouseOver}
      onMouseLeave={props.mouseLeave}
      onMouseDown={props.mouseDown}
      onMouseUp={props.mouseUp}
      aria-label={props.icon}>
      <div className="chi-button__content">
        <i className={`chi-icon icon-${props.icon}`}></i>
      </div>
    </button>
  );
}

/* eslint-disable */
Tooltip.propTypes = {
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  click: PropTypes.func,
  flat: PropTypes.bool,
  mouseDown: PropTypes.func,
  mouseUp: PropTypes.func,
  mouseOver: PropTypes.func,
  mouseLeave: PropTypes.func,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  message: PropTypes.string,
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
};
/* eslint-enable */

Tooltip.defaultProps = {
  disabled: false,
  icon: 'atom',
  size: 'md',
  message: 'Tooltip message goes here',
  position: 'top',
};
