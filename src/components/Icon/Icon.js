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
const Icon = ({tooltipMessage, tooltipPosition, popover, popoverTitle, popoverDescription, popoverPosition, click, mouseDown, mouseUp, mouseLeave, mouseOver, icon, color, size, uxpinRef}) => {
  const uuid = uuid4();
  const popOverRef = React.createRef();

  if (!popover && tooltipMessage) {
    const initialize = setInterval(() => {
      if (window.chi && document.getElementById(uuid)) {
        window.chi.tooltip(document.getElementById(uuid));
        clearInterval(initialize);
      }
    }, 1000);
  }

  const handlerClick = () => {
    if (popover) {
      popOverRef.current.toggle();
    }

    click();
  }

  return (
    <>
      <div id={`popover-hook-${uuid}`} className={`chi-icon -${size}`}>
        <chi-icon
          id={uuid}
          icon={icon}
          color={color}
          size={size}
          onClick={handlerClick}
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
      </div>
      {popover && (
        <>
          <chi-popover
            id={`${uuid}-popover`}
            ref={popOverRef}
            position={popoverPosition}
            title={popoverTitle}
            variant="text"
            reference={`#popover-hook-${uuid}`}
            arrow
          >
            <p style={{ whiteSpace: 'pre-line' }}>{popoverDescription}</p>
          </chi-popover>
        </>
      )}
    </>
  )
};

Icon.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'sm--2', 'sm--3', 'md', 'lg', 'xl', 'xxl']),
  icon: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'dark', 'light', 'info', 'grey', 'muted', 'success', 'warning', 'danger', 'navy', 'orange']),
  tooltipMessage: PropTypes.string,
  tooltipPosition: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  popover: PropTypes.bool,
  popoverPosition: PropTypes.oneOf(['top', 'right', 'bottom', 'left', 'top-start', 'top-end', 'right-start', 'right-end', 'bottom-start', 'bottom-end', 'left-start', 'left-end']),
  popoverTitle: PropTypes.string,
  /**
   * A textArea controller for Text
   * @uxpinpropname text
   * @uxpincontroltype textfield(10)
   * */
  popoverDescription: PropTypes.string,
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
  popoverTitle: 'Popover Title',
  popoverDescription: `Line 1
Line 2
Line 3`,
  popoverPosition: 'right-start',
  tooltipMessage: '',
  tooltipPosition: 'top',
};

export { Icon as default };
