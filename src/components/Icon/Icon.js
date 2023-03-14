import * as PropTypes from 'prop-types';
import * as React from 'react';
import { UTILITY_CLASSES } from '../../constants/classes';
import { uuid4 } from '../../utils/utils';
import './Icon.css';

/* eslint-disable */
/**
 * @uxpincomponent
 * @uxpinwrappers
 * SkipContainerWrapper
 */
const Icon = ({tooltipMessage, tooltipPosition, popover, popoverTitle, popoverDescription, click, mouseDown, mouseUp, mouseLeave, mouseOver, icon, color, size, uxpinRef}) => {
  const uuid = uuid4();
  const popOverRef = React.createRef();

  if (tooltipMessage) {
    const initialize = setInterval(() => {
      if (window.chi && document.getElementById(uuid)) {
        window.chi.tooltip(document.getElementById(uuid));
        clearInterval(initialize);
      }
    }, 1000);
  }

  const handleClick = React.useCallback(() => {
    if (popover) {
      popOverRef.current.classList.remove(`${UTILITY_CLASSES.DISPLAY.NONE}`);
      popOverRef.current.toggle();
    }
    click();
  }, [uuid, click]);

  React.useEffect(() => {
    if (popOverRef && popOverRef.current && !popOverRef.current.classList.contains(`${UTILITY_CLASSES.DISPLAY.NONE}`)) {
      popOverRef.current.classList.add(`${UTILITY_CLASSES.DISPLAY.NONE}`);
    }
  }, [popoverDescription])

  return (
    <>
      <chi-icon
        id={uuid}
        icon={icon}
        color={color}
        size={size}
        onClick={handleClick}
        data-tooltip={popover ? '' : tooltipMessage}
        data-position={tooltipPosition}
        onMouseEnter={mouseOver}
        onMouseLeave={mouseLeave}
        onMouseDown={mouseDown}
        onMouseUp={mouseUp}>
        <span className="-sr--only">
          i
        </span>
      </chi-icon>
      {popover && (
        <>
          <span id={`popover-hook-${uuid}`}></span>
          <chi-popover
            id={`${uuid}-popover`}
            ref={popOverRef}
            position="right-start"
            title={popoverTitle}
            variant="text"
            reference={`#popover-hook-${uuid}`}
            arrow
          >
            {popoverDescription}
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
  popoverTitle: PropTypes.string,
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
  popoverDescription: 'Popover Description',
  tooltipMessage: '',
  tooltipPosition: 'top',
};

export { Icon as default };
