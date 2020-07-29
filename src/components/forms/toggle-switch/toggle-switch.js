import * as PropTypes from 'prop-types';
import * as React from 'react';

/* eslint-disable */
/**
 * @uxpincomponent
 */
const ToggleSwitch = (props) => (
  <div className="chi-form__item"
       onMouseEnter={props.mouseOver}
       onMouseLeave={props.mouseLeave}
       onMouseDown={props.mouseDown}
       onMouseUp={props.mouseUp}>
    <label className="chi-switch">
      <input
          type="checkbox"
          className="chi-switch__input"
          disabled={props.disabled}
          onChange={(e) => {
            if (e.target.checked) {
              props.turnOn();
            } else {
              props.turnOff();
            }
          }} />
      <span className="chi-switch__content">
        <span className="chi-switch__thumb"></span>
      </span>
      {props.label ? <span className="chi-switch__label">{props.label}</span> : ''}
    </label>
  </div>
);

ToggleSwitch.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  turnOn: PropTypes.func,
  turnOff: PropTypes.func,
};
/* eslint-enable */

ToggleSwitch.defaultProps = {
  disabled: false,
  label: 'Label',
};

export { ToggleSwitch as default };
