import * as PropTypes from 'prop-types';
import * as React from 'react';

const ToggleSwitch = (props) => (
  <div class="chi-form__item">
    <label class="chi-switch">
      <input type="checkbox" class="chi-switch__input" disabled={props.disabled} />
      <span class="chi-switch__content">
        <span class="chi-switch__thumb"></span>
      </span>
        {props.label ? <span class="chi-switch__label">{props.label}</span> : ''}
    </label>
  </div>
);

/* eslint-disable sort-keys */
ToggleSwitch.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
};
/* eslint-enable sort-keys */

ToggleSwitch.defaultProps = {
  disabled: false,
  label: '',
};

export { ToggleSwitch as default };
