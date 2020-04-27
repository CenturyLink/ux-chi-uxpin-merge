import * as PropTypes from 'prop-types';
import * as React from 'react';

const Checkbox = (props) => (
  <div class="chi-form__item">
    <div class="chi-checkbox">
      <input type="checkbox" class="chi-checkbox__input" disabled={props.disabled} />
      <label class="chi-checkbox__label" for="checkbox1">{props.label}</label>
    </div>
  </div>
);

/* eslint-disable sort-keys */
Checkbox.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
};
/* eslint-enable sort-keys */

Checkbox.defaultProps = {
  disabled: false,
  label: 'Label',
};

export { Checkbox as default };
