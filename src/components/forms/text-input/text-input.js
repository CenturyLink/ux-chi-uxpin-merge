import * as PropTypes from 'prop-types';
import * as React from 'react';

const TextInput = (props) => (
  <div className="chi-form__item">
    <input
      type="text"
      className={`
      chi-input
      ${props.state ? `-${props.state}` : ''}
      ${props.size ? `-${props.size}` : ''}
      `}
      disabled={props.disabled}
      placeholder={props.placeholder}
      value={props.value} />
  </div>
);

/* eslint-disable sort-keys */
TextInput.propTypes = {
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  state: PropTypes.oneOf(['success', 'warning', 'danger']),
  value: PropTypes.string,
  placeholder: PropTypes.string,
};
/* eslint-enable sort-keys */

TextInput.defaultProps = {
  disabled: false,
  size: 'md',
  state: '',
  value: '',
  placeholder: 'Placeholder',
};

export { TextInput as default };
