import * as PropTypes from 'prop-types';
import * as React from 'react';
import Label from '../label/label';

export default class DatePicker extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      const datePicker = document.getElementById('chi-datepicker-control');
      const self = this;

      if (datePicker) {
        const input = datePicker.querySelector('input');
        input.addEventListener('focus', () => {
          self.props.focus();
        });
        input.addEventListener('blur', () => {
          self.props.focusLost();
        });
        input.addEventListener('input', () => {
          self.props.input();
        });
        input.addEventListener('change', () => {
          self.props.valueChange();
        });
      }
    }, 1000);
  }

  render() {
    const label = this.props.label
      ? (
        <Label
          className="chi-label"
          required={this.props.labelRequired}
          optional={this.props.labelOptional}
          label={this.props.label}>
        </Label>
      )
      : null;

    return (
      <div className="chi-form__item" style={{ width: '14rem' }}>
        {label}
        <chi-date-picker
          id="chi-datepicker-control"
          disabled={this.props.disabled}
          excluded-weekdays={this.props.weekdays}
          excluded-dates={this.props.dates}
          min={this.props.min}
          max={this.props.max}
          value={this.props.value}
          onClick={this.props.click}
          onMouseEnter={this.props.mouseOver}
          onMouseLeave={this.props.mouseLeave}
          onMouseDown={this.props.mouseDown}
          onMouseUp={this.props.mouseUp}>
        </chi-date-picker>
      </div>
    );
  }
}

/* eslint-disable */
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
  click: PropTypes.func,
  focus: PropTypes.func,
  focusLost: PropTypes.func,
  input: PropTypes.func,
  mouseDown: PropTypes.func,
  mouseUp: PropTypes.func,
  mouseOver: PropTypes.func,
  mouseLeave: PropTypes.func,
  valueChange: PropTypes.func,
};
/* eslint-enable */

DatePicker.defaultProps = {
  disabled: false,
  label: 'Label',
};
