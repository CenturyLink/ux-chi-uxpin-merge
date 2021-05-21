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

  if (props.tooltipMessage) {
    const initialize = setInterval(() => {
      if (window.chi && document.getElementById(uuid)) {
        window.chi.tooltip(document.getElementById(uuid));
        clearInterval(initialize);
      }
    }, 100);
  }

  return (
    <button
      type="button"
      id={uuid}
      className={`
        chi-button -portal -icon -primary -flat -bg--none -opacity-hover--80
        ${props.size ? `-${props.size}` : ''}
        `}
      data-tooltip={props.tooltipMessage}
      data-position={props.tooltipPosition}
      data-tooltip-color={props.tooltipColor}
      disabled={props.disabled}
      onClick={props.click}>
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
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  tooltipMessage: PropTypes.string,
  tooltipPosition: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  tooltipColor: PropTypes.oneOf(['base', 'light']),
};
/* eslint-enable */

IconButton.defaultProps = {
  disabled: false,
  icon: 'atom',
  size: 'md',
  tooltipMessage: 'Tooltip message',
  tooltipPosition: 'top',
  tooltipColor: 'base',
};
