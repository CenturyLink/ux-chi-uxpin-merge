import * as PropTypes from 'prop-types';
import * as React from 'react';

export default class DatePicker extends React.Component {
  render() {
    return (
      <chi-date-picker
        disabled={this.props.disabled}
        excluded-weekdays={this.props.weekdays}
        excluded-dates={this.props.dates}
        min={this.props.min}
        max={this.props.max}
        value={this.props.value}
        >
      </chi-date-picker>
    );
  }
}

/* eslint-disable sort-keys */
DatePicker.propTypes = {
    disabled: PropTypes.bool,
    weekdays: PropTypes.string,
    dates: PropTypes.string,
    min: PropTypes.string,
    max: PropTypes.string,
    value: PropTypes.string,
};
/* eslint-enable sort-keys */

DatePicker.defaultProps = {
    disabled: false
};
