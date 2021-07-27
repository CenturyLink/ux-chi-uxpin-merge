import * as PropTypes from 'prop-types';
import * as React from 'react';
import Label from '../Label/Label';
import { uuid4 } from '../../utils/utils';
import {
  BUTTON_CLASSES,
  ICON_CLASS,
  LABEL_CLASSES,
  STAT_CLASSES,
} from '../../constants/classes';

/* eslint-disable */
const selected = function() {
  const todayDate = new Date();
  var mm = todayDate.getMonth() + 1;
  var dd = todayDate.getDate();

  return [(mm>9 ? '' : '0') + mm,
    (dd>9 ? '' : '0') + dd,
    todayDate.getFullYear()
    ].join('/').toString();
  
};

/**
 * @uxpincomponent
 * @uxpinwrappers
 * SkipContainerWrapper
 */
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
    const dpId = `dp-${uuid4()}`;
    const info = this.props.info
      ? (
        <div
          className={`${STAT_CLASSES.TITLE_HELP}`}
          onClick={this.props.clickInfo}
          onMouseEnter={this.props.mouseOverInfo}
          onMouseLeave={this.props.mouseLeaveInfo}>
          <button className={`${BUTTON_CLASSES.BUTTON} -icon -sm -flat`} aria-label="Help">
            <i className={`${ICON_CLASS} chi-icon icon-circle-info-outline -icon--primary`}></i>
          </button>
        </div>
      ) : '';
    const label = this.props.label
      ? (
        <Label
          htmlFor={`${dpId}-control`}
          className={`${LABEL_CLASSES.LABEL}`}
          required={this.props.required}
          label={this.props.label}>
        </Label>
      )
      : null;
    const excludedDays = `
        ${!this.props.su ? '0,' : ''}
        ${!this.props.mo ? '1,' : ''}
        ${!this.props.tu ? '2,' : ''}
        ${!this.props.we ? '3,' : ''}
        ${!this.props.th ? '4,' : ''}
        ${!this.props.fr ? '5,' : ''}
        ${!this.props.sa ? '6' : ''}
    `;

    return (
      <div ref={this.props.uxpinRef} className="chi-form__item" style={{ width: '14rem' }}>
        <div className={`${LABEL_CLASSES.WRAPPER}`}>
          {label}
          {info}
        </div>
        <chi-date-picker
          id={dpId}
          disabled={this.props.disabled}
          excluded-weekdays={excludedDays}
          excluded-dates={this.props.dates}
          min={this.props.min}
          max={this.props.max}
          value={this.props.selected}
          onClick={this.props.click}
          mode={this.props.mode}
          onMouseEnter={this.props.mouseOver}
          onMouseLeave={this.props.mouseLeave}
          onMouseDown={this.props.mouseDown}
          onMouseUp={this.props.mouseUp}>
        </chi-date-picker>
      </div>
    );
  }
}

DatePicker.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  required: PropTypes.oneOf(['none', 'required', 'optional']),
  info: PropTypes.bool,
  clickInfo: PropTypes.func,
  mouseOverInfo: PropTypes.func,
  mouseLeaveInfo: PropTypes.func,
  mode: PropTypes.oneOf(['date', 'datetime']),
  min: PropTypes.string,
  max: PropTypes.string,
  selected: PropTypes.string,
  mo: PropTypes.bool,
  tu: PropTypes.bool,
  we: PropTypes.bool,
  th: PropTypes.bool,
  fr: PropTypes.bool,
  sa: PropTypes.bool,
  su: PropTypes.bool,
  dates: PropTypes.string,
  click: PropTypes.func,
  focus: PropTypes.func,
  focusLost: PropTypes.func,
  input: PropTypes.func,
  mouseDown: PropTypes.func,
  mouseLeave: PropTypes.func,
  mouseOver: PropTypes.func,
  mouseUp: PropTypes.func,
  valueChange: PropTypes.func,
  info: PropTypes.bool,
  clickInfo: PropTypes.func,
  mouseOverInfo: PropTypes.func,
  mouseLeaveInfo: PropTypes.func,
};
/* eslint-enable */

DatePicker.defaultProps = {
  disabled: false,
  label: 'Label',
  required: 'none',
  mode: 'date',
  selected: selected(),
  info: false,
  mo: true,
  tu: true,
  we: true,
  th: true,
  fr: true,
  sa: true,
  su: true,
};
