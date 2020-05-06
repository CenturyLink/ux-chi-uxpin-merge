import * as PropTypes from 'prop-types';
import * as React from 'react';

const Checkbox = (props) => (
  <div className="chi-form__item">
    <div className="chi-checkbox">
      <input type="checkbox" className="chi-checkbox__input" disabled={props.disabled} />
      <label className="chi-checkbox__label" htmlFor="checkbox1">{props.label}</label>
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
