import * as PropTypes from 'prop-types';
import * as React from 'react';
import Label from '../label/label';

export default class NumberInput extends React.Component {
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

    const size = this.props.size ? this.props.size.split(' ')[0] : null;

    return (
      <div className="chi-form__item">
        {label}
        <chi-number-input
          disabled={this.props.disabled}
          expanded={this.props.expanded}
          size={size}>
        </chi-number-input>
      </div>
    );
  }
}

/* eslint-disable sort-keys */
NumberInput.propTypes = {
  disabled: PropTypes.bool,
  expanded: PropTypes.bool,
  label: PropTypes.string,
  labelRequired: PropTypes.bool,
  labelOptional: PropTypes.bool,
  size: PropTypes.oneOf(['sm (24px)', 'md (32px)', 'lg (40px)', 'xl (48px)']),
};
/* eslint-enable sort-keys */

NumberInput.defaultProps = {
  disabled: false,
  expanded: false,
  size: 'md',
  label: 'Label',
};
