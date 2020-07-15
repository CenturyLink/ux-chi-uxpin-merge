import * as PropTypes from 'prop-types';
import * as React from 'react';
import Label from '../label/label';

export default class TextInput extends React.Component {
  render() {
    const label = this.props.label
      ? (
        <Label
          htmlFor="number-input"
          className="chi-label"
          required={this.props.labelRequired}
          optional={this.props.labelOptional}
          label={this.props.label}>
        </Label>
      )
      : null;

    return (
      <div className="chi-form__item">
        {label}
        <chi-text-input
          disabled={this.props.disabled}
          size={this.props.size}
          state={this.props.state}
          icon-left={this.props.iconLeft}
          icon-left-color={this.props.iconLeftColor}
          icon-right={this.props.iconRight}
          icon-right-color={this.props.iconRightColor}
          placeholder={this.props.placeholder}
          value={this.props.value}>
        </chi-text-input>
      </div>
    );
  }
}

/* eslint-disable sort-keys */
TextInput.propTypes = {
  disabled: PropTypes.bool,
  iconLeft: PropTypes.string,
  iconLeftColor: PropTypes.oneOf(['', 'primary', 'secondary', 'dark', 'light', 'danger', 'grey', 'muted']),
  iconRight: PropTypes.string,
  iconRightColor: PropTypes.oneOf(['', 'primary', 'secondary', 'dark', 'light', 'danger', 'grey', 'muted']),
  label: PropTypes.string,
  labelRequired: PropTypes.bool,
  labelOptional: PropTypes.bool,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  state: PropTypes.oneOf(['success', 'warning', 'danger']),
  value: PropTypes.string,
};
/* eslint-enable sort-keys */

TextInput.defaultProps = {
  disabled: false,
  label: 'Label',
  size: 'md',
  state: '',
  placeholder: 'Placeholder',
};
