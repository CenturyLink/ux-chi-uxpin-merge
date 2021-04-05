import * as PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { uuid4 } from "../../utils/utils";

/* eslint-disable */
/**
 * @uxpincomponent
 */
export default function TimePicker(props) {
  const uuid = `time-picker-${uuid4()}`;

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
      <chi-time-picker
          active={props.active}
          displaySeconds={props.displaySeconds}
          format={props.format}
          disabled={props.disabled}
          value={props.value}
          id={uuid}
      >
        <div className="-sr--only">TP</div>
      </chi-time-picker>
  );
}

TimePicker.propTypes = {
  active: PropTypes.bool,
  displaySeconds: PropTypes.bool,
  format: PropTypes.oneOf(['12hr', '24hr']),
  value: PropTypes.string,
  disabled: PropTypes.bool,
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
  size: 'md',
};
