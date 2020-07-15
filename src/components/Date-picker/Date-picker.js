import * as PropTypes from 'prop-types';
import * as React from 'react';
import Label from '../forms/label/label';

export default class DatePicker extends React.Component {
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
        <chi-date-picker
          disabled={this.props.disabled}
          excluded-weekdays={this.props.weekdays}
          excluded-dates={this.props.dates}
          min={this.props.min}
          max={this.props.max}
          value={this.props.value}>
        </chi-date-picker>
      </div>
    );
  }
}

/* eslint-disable sort-keys */
DatePicker.propTypes = {
  disabled: PropTypes.bool,
  weekdays: PropTypes.string,
  dates: PropTypes.string,
  label: PropTypes.string,
  labelRequired: PropTypes.bool,
  labelOptional: PropTypes.bool,
  min: PropTypes.string,
  max: PropTypes.string,
  value: PropTypes.string,
};
/* eslint-enable sort-keys */

DatePicker.defaultProps = {
  disabled: false,
  label: 'Label',
};
