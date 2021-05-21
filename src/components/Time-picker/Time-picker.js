import * as PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import Label from '../Label/Label';
import { uuid4 } from '../../utils/utils';

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
  format,
  value,
  click,
  focus,
  focusLost,
  input,
  timeChange,
  required,
  uxpinRef
}) {
  const uuid = `time-picker-${uuid4()}`;
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
      {labelElement}
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
    </div>
  );
}

TimePicker.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  active: PropTypes.bool,
  displaySeconds: PropTypes.bool,
  format: PropTypes.oneOf(['12hr', '24hr']),
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
  label: 'Label',
  format: '12hr',
};
