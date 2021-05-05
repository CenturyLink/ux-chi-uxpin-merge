import * as PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import Label from '../Label/Label';
import { uuid4 } from '../../utils/utils';

/* eslint-disable */
/**
 * @uxpincomponent
 */
export default function TimePicker(props) {
  const uuid = `time-picker-${uuid4()}`;
  const label = props.label
      ? (
          <Label
              htmlFor={`${uuid}-control`}
              className="chi-label"
              required={props.required}
              label={props.label}>
          </Label>
      )
      : null;

  useEffect(() => {
    const chiTimePicker = document.getElementById(uuid);

    const eventListenerInterval = setInterval(() => {
      if (chiTimePicker.classList.contains('hydrated')) {
        const inputElement = chiTimePicker.querySelector('input');

        inputElement.addEventListener('focus', () => props.focus());
        inputElement.addEventListener('blur', () => props.focusLost());
        inputElement.addEventListener('input', () => props.input());
        window.clearInterval(eventListenerInterval);
      }
    }, 1000);
    chiTimePicker.addEventListener('click', () => props.click());
    chiTimePicker.addEventListener('chiTimeChange', () => props.timeChange());
  });

  return (
      <div className="chi-form__item" style={{width: '14rem'}}>
        {label}
        <chi-time-picker
            active={props.active}
            display-seconds={props.displaySeconds}
            format={props.format}
            disabled={props.disabled}
            value={props.value}
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
