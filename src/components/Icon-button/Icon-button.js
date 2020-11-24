import * as PropTypes from 'prop-types';
import * as React from 'react';
import { uuid4 } from '../../utils/utils';
import './IconButton.css';

/**
 * @uxpincomponent
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export default function IconButton(props) {
  const uuid = uuid4();

  setTimeout(() => {
    window.chi.tooltip(document.getElementById(uuid));
  }, 2000);

  return (
    <button
      type="button"
      id={uuid}
      className={`
        chi-button -icon -flat -bg--none -opacity-hover--80
        ${props.size ? `-${props.size}` : ''}
        `}
      data-tooltip={props.tooltipMessage}
      data-position={props.tooltipPosition}
      disabled={props.disabled}
      onClick={props.click}
      onMouseEnter={props.mouseOver}
      onMouseLeave={props.mouseLeave}
      onMouseDown={props.mouseDown}
      onMouseUp={props.mouseUp}>
      <div className="chi-button__content">
        <i className={`chi-icon icon-${props.icon}`}></i>
      </div>
    </button>
  );
}

/* eslint-disable */
IconButton.propTypes = {
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  click: PropTypes.func,
  mouseDown: PropTypes.func,
  mouseUp: PropTypes.func,
  mouseOver: PropTypes.func,
  mouseLeave: PropTypes.func,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  tooltipMessage: PropTypes.string,
  tooltipPosition: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
};
/* eslint-enable */

IconButton.defaultProps = {
  disabled: false,
  icon: 'atom',
  size: 'md',
  tooltipMessage: 'Tooltip Message',
  tooltipPosition: 'top',
};
