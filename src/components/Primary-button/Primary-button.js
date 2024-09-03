import * as PropTypes from 'prop-types';
import * as React from 'react';

/**
 * @uxpincomponent
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export default function PrimaryButton({
  leftIcon,
  rightIcon,
  size,
  spinner,
  value,
  fluid,
  flat,
  click,
  mouseDown,
  mouseUp,
  mouseOver,
  mouseLeave,
  uxpinRef,
}) {
  const buttonContent = leftIcon || rightIcon || spinner ? (
    <div className="chi-button__content">
      {leftIcon ? <i style={{ display: 'flex' }} className={`chi-icon icon-${leftIcon}`} /> : null}
      <span>{value}</span>
      {rightIcon ? <i style={{ display: 'flex' }} className={`chi-icon icon-${rightIcon}`} /> : null}
      {spinner ? <chi-spinner color={flat ? '' : 'light'} style={{ display: 'flex' }} /> : null}
    </div>
  ) : (
    value
  );

  return (
    <button
      type="button"
      className={`
        chi-button
        -primary
        ${size ? `-${size}` : ''}
        ${fluid ? '-fluid -justify-content--center' : ''}
        ${flat ? '-flat' : ''}
        `}
      onClick={click}
      onMouseEnter={mouseOver}
      onMouseLeave={mouseLeave}
      onMouseDown={mouseDown}
      onMouseUp={mouseUp}
      ref={uxpinRef}>
      {buttonContent}
    </button>
  );
}

/* eslint-disable */
PrimaryButton.propTypes = {
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  spinner: PropTypes.bool,
  size: PropTypes.oneOf(['xs', 'md']),
  value: PropTypes.string,
  fluid: PropTypes.bool,
  /** @uxpinignoreprop */
  flat: PropTypes.bool,
  click: PropTypes.func,
  mouseDown: PropTypes.func,
  mouseUp: PropTypes.func,
  mouseOver: PropTypes.func,
  mouseLeave: PropTypes.func,
};
/* eslint-enable */

PrimaryButton.defaultProps = {
  size: 'md',
};
