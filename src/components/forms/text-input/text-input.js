import * as PropTypes from 'prop-types';
import * as React from 'react';

const TextInput = (props) => (
  <div className="chi-form__item">
    <chi-text-input
      disabled={props.disabled}
      size={props.size}
      state={props.state}
      icon-left={props.iconLeft}
      icon-left-color={props.iconLeftColor}
      icon-right={props.iconRight}
      icon-right-color={props.iconRightColor}
      placeholder={props.placeholder}
      value={props.value}>

    </chi-text-input>
  </div>
);

/* eslint-disable sort-keys */
TextInput.propTypes = {
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  state: PropTypes.oneOf(['success', 'warning', 'danger']),
  value: PropTypes.string,
  iconLeft: PropTypes.string,
  iconLeftColor: PropTypes.oneOf(['', 'primary', 'secondary', 'dark', 'light', 'danger', 'grey', 'muted']),
  iconRight: PropTypes.string,
  iconRightColor: PropTypes.oneOf(['', 'primary', 'secondary', 'dark', 'light', 'danger', 'grey', 'muted']),
  placeholder: PropTypes.string,
};
/* eslint-enable sort-keys */

TextInput.defaultProps = {
  disabled: false,
  size: 'md',
  state: '',
  placeholder: 'Placeholder',
};

export { TextInput as default };
