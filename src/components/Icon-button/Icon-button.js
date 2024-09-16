import * as PropTypes from 'prop-types';
import * as React from 'react';
import { uuid4 } from '../../utils/utils';
import './IconButton.css';

/**
 * @uxpincomponent
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export default function IconButton({ tooltipMessage, tooltipPosition, tooltipColor, disabled, click, icon, uxpinRef }) {
  const uuid = uuid4();

  if (tooltipMessage) {
    const initialize = setInterval(() => {
      if (window.chi && document.getElementById(uuid)) {
        window.chi.tooltip(document.getElementById(uuid));
        clearInterval(initialize);
      }
    }, 1000);
  }

  return (
    <chi-button
      ref={uxpinRef}
      id={uuid}
      data-tooltip={tooltipMessage}
      data-position={tooltipPosition}
      data-tooltip-color={tooltipColor}
      aria-label={icon}
      variant="flat"
      onClick={click}
      disabled={disabled}
      type="icon"
      alternative-text="Button action"
    >
      <chi-icon icon={icon}></chi-icon>
    </chi-button>
  );
}

/* eslint-disable */
IconButton.propTypes = {
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  click: PropTypes.func,
  tooltipMessage: PropTypes.string,
  tooltipPosition: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  /** @uxpinignoreprop */
  tooltipColor: PropTypes.oneOf(['base', 'light']),
};
/* eslint-enable */

IconButton.defaultProps = {
  disabled: false,
  icon: 'atom',
  tooltipPosition: 'top',
};
