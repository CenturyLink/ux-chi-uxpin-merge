import * as PropTypes from 'prop-types';
import * as React from 'react';
import PrimaryButton from '../Primary-button/Primary-button';

/**
 * @uxpincomponent
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export default function FlatButton({
  disabled,
  leftIcon,
  rightIcon,
  size,
  value,
  click,
  mouseDown,
  mouseUp,
  mouseOver,
  mouseLeave,
  uxpinRef,
  spinner
}) {
  return (
    <PrimaryButton
      disabled={disabled}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      spinner={spinner}
      size={size}
      value={value}
      flat
      click={click}
      mouseDown={mouseDown}
      mouseUp={mouseUp}
      mouseOver={mouseOver}
      mouseLeave={mouseLeave}
      uxpinRef={uxpinRef}
    />
  );
}

/* eslint-disable */
FlatButton.propTypes = {
  disabled: PropTypes.bool,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  spinner: PropTypes.bool,
  size: PropTypes.oneOf(['xs','md']),
  value: PropTypes.string,
  click: PropTypes.func,
  mouseDown: PropTypes.func,
  mouseUp: PropTypes.func,
  mouseOver: PropTypes.func,
  mouseLeave: PropTypes.func,
};
/* eslint-enable */

FlatButton.defaultProps = {
  disabled: false,
  size: 'md',
};
