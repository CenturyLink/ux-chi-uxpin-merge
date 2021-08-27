import * as PropTypes from 'prop-types';
import * as React from 'react';

/**
 * @uxpincomponent
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export default function PrimaryButton({
  disabled,
  leftIcon,
  rightIcon,
  size,
  value,
  fluid,
  click,
  mouseDown,
  mouseUp,
  mouseOver,
  mouseLeave,
  uxpinRef,
}) {
  const buttonContent = leftIcon || rightIcon ? (
    <div className="chi-button__content">
      {leftIcon ? (
        <i
          style={{ display: 'flex' }}
          className={`chi-icon icon-${leftIcon}`}
        />
      ) : null}
      <span>{value}</span>
      {rightIcon ? (
        <i
          style={{ display: 'flex' }}
          className={`chi-icon icon-${rightIcon}`}
        />
      ) : null}
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
        `}
      disabled={disabled}
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
  disabled: PropTypes.bool,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  value: PropTypes.string,
  fluid: PropTypes.bool,
  click: PropTypes.func,
  mouseDown: PropTypes.func,
  mouseUp: PropTypes.func,
  mouseOver: PropTypes.func,
  mouseLeave: PropTypes.func,
};
/* eslint-enable */

PrimaryButton.defaultProps = {
  disabled: false,
  size: 'md',
  value: 'Primary',
};
