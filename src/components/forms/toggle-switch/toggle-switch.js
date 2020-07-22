import * as PropTypes from 'prop-types';
import * as React from 'react';

/* eslint-disable */
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
          onClick={props.click}
          onFocus={props.focus}
          onBlur={props.focusLost} />
      <span className="chi-switch__content">
        <span className="chi-switch__thumb"></span>
      </span>
      {props.label ? <span className="chi-switch__label">{props.label}</span> : ''}
    </label>
  </div>
);

ToggleSwitch.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  click: PropTypes.func,
  focus: PropTypes.func,
  focusLost: PropTypes.func,
  mouseDown: PropTypes.func,
  mouseUp: PropTypes.func,
  mouseOver: PropTypes.func,
  mouseLeave: PropTypes.func,
};
/* eslint-enable */

ToggleSwitch.defaultProps = {
  disabled: false,
  label: 'Label',
};

export { ToggleSwitch as default };
