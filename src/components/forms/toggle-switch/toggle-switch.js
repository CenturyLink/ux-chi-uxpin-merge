import * as PropTypes from 'prop-types';
import * as React from 'react';

/* eslint-disable */
const ToggleSwitch = (props) => (
  <div className="chi-form__item">
    <label className="chi-switch">
      <input type="checkbox" className="chi-switch__input" disabled={props.disabled} />
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
};
/* eslint-enable */

ToggleSwitch.defaultProps = {
  disabled: false,
  label: 'Label',
};

export { ToggleSwitch as default };
