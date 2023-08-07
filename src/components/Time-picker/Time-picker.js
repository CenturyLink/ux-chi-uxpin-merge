import * as PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import Label from '../Label/Label';
import Icon from '../Icon/Icon';
import { uuid4 } from '../../utils/utils';
import {
  LABEL_CLASSES,
  STAT_CLASSES,
} from '../../constants/classes';

/* eslint-disable */
/**
 * @uxpincomponent
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export default function TimePicker({
  disabled,
  label,
  active,
  displaySeconds,
  helperMessage,
  helperMessageState,
  format,
  value,
  click,
  focus,
  focusLost,
  input,
  timeChange,
  required,
  info,
  infoPopoverTitle,
  infoPopoverDescription,
  infoPopoverPosition,
  clickInfo,
  mouseOverInfo,
  mouseLeaveInfo,
  uxpinRef
}) {

  const uuid = `time-picker-${uuid4()}`;
  const infoElement = info
    ? (
      <div className={`${STAT_CLASSES.TITLE_HELP}`}>
        <Icon
          uxpId={`infoIcon-${uuid}`}
          icon={'circle-info-outline'}
          size="xs"
          color="primary"
          mode="button"
          popover={true}
          popoverTitle={infoPopoverTitle}
          popoverDescription={infoPopoverDescription}
          popoverPosition={infoPopoverPosition}
        />
      </div>
    ) : '';
  const labelElement = label
    ? (
      <Label
        htmlFor={`${uuid}-control`}
        className="chi-label"
        required={required}
        label={label}>
      </Label>
    )
    : null;

  const helperMsg = helperMessage
    ? helperMessageState === 'danger' ? (
    <chi-helper-message state={helperMessageState}>{helperMessage}</chi-helper-message>
  ) : (
    <chi-helper-message>{helperMessage}</chi-helper-message>
  ) : '';

  useEffect(() => {
    const chiTimePicker = document.getElementById(uuid);

    const eventListenerInterval = setInterval(() => {
      if (chiTimePicker.classList.contains('hydrated')) {
        const inputElement = chiTimePicker.querySelector('input');

        inputElement.addEventListener('focus', () => focus());
        inputElement.addEventListener('blur', () => focusLost());
        inputElement.addEventListener('input', () => input());
        window.clearInterval(eventListenerInterval);
      }
    }, 1000);
    chiTimePicker.addEventListener('click', () => click());
    chiTimePicker.addEventListener('chiTimeChange', () => timeChange());
  });

  return (
    <div className="chi-form__item" style={{width: '14rem'}} ref={uxpinRef}>
      <div className={`${LABEL_CLASSES.WRAPPER}`}>
        {labelElement} 
        {infoElement}
      </div>
      <chi-time-picker
        active={active}
        display-seconds={displaySeconds}
        format={format}
        disabled={disabled}
        value={value}
        id={uuid}
      >
        <div className="-sr--only">TP</div>
      </chi-time-picker>
      {helperMsg}
    </div>
  );
}

TimePicker.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  active: PropTypes.bool,
  helperMessage: PropTypes.string,
  helperMessageState: PropTypes.oneOf(['default', 'danger']),
  displaySeconds: PropTypes.bool,
  format: PropTypes.oneOf(['12hr', '24hr']),
  info: PropTypes.bool,
  infoPopoverTitle: PropTypes.string,
  /**
    * A textArea controller for Text
    * @uxpinpropname text
    * @uxpincontroltype textfield(10)
    * */
  infoPopoverDescription: PropTypes.string,
  infoPopoverPosition: PropTypes.oneOf(['right-start', 'top']),
  /** @uxpinignoreprop */
  clickInfo: PropTypes.func,
  /** @uxpinignoreprop */
  mouseOverInfo: PropTypes.func,
  /** @uxpinignoreprop */
  mouseLeaveInfo: PropTypes.func,
  required: PropTypes.oneOf(['none', 'required', 'optional']),
  value: PropTypes.string,
  click: PropTypes.func,
  focus: PropTypes.func,
  focusLost: PropTypes.func,
  input: PropTypes.func,
  timeChange: PropTypes.func,
};
/* eslint-enable */

TimePicker.defaultProps = {
  disabled: false,
  format: '12hr',
  required: 'none',
  helperMessageState: 'default',
  info: false,
  infoPopoverTitle: 'Popover Title',
  infoPopoverDescription: `Line 1
Line 2
Line 3`,
  infoPopoverPosition: 'right-start',
};
