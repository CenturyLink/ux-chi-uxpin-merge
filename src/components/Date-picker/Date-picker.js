import * as PropTypes from 'prop-types';
import * as React from 'react';
import Label from '../Label/Label';
import { uuid4 } from '../../utils/utils';
import Icon from '../Icon/Icon';
import {
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
  dateModes = {
    "datetime - 12hr": { timeFormat: "12hr", dateMode: "datetime" },
    "datetime - 24hr": { timeFormat: "24hr", dateMode: "datetime" }
  };

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
    const uuid = uuid4();
    const dpId = `dp-${uuid}`;
    const info = this.props.info
      ? (
        <div className={`${STAT_CLASSES.TITLE_HELP}`}>
          <Icon
            uxpId={`infoIcon-${uuid}`}
            icon={'circle-info-outline'}
            size="xs"
            color="primary"
            mode="button"
            popover={true}
            popoverTitle={this.props.infoPopoverTitle}
            popoverDescription={this.props.infoPopoverDescription}
            popoverPosition={this.props.infoPopoverPosition}
          />
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
    const { timeFormat, dateMode } = this.dateModes[this.props.mode] || {
      timeFormat: null,
      dateMode: null
    };

    return (
      <div className="chi-form__item">
        <div className={`${LABEL_CLASSES.WRAPPER}`}>
          {label}
          {info}
        </div>
        <div style={{ width: '14rem' }}>
          <chi-date-picker
            id={dpId}
            disabled={this.props.disabled}
            excluded-weekdays={excludedDays}
            excluded-dates={this.props.dates}
            min={this.props.min}
            max={this.props.max}
            value={this.props.selected}
            onClick={this.props.click}
            mode={dateMode}
            format={this.props.format}
            minutes-step={this.props.minutesStep}
            time-format={timeFormat}
            onMouseEnter={this.props.mouseOver}
            onMouseLeave={this.props.mouseLeave}
            onMouseDown={this.props.mouseDown}
            onMouseUp={this.props.mouseUp}>
          </chi-date-picker>
        </div>
      </div>
    );
  }
}

DatePicker.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  required: PropTypes.oneOf(['none', 'required', 'optional']),
  info: PropTypes.bool,
  infoPopoverTitle: PropTypes.string,
  /**
    * A textArea controller for Text
    * @uxpinpropname text
    * @uxpincontroltype textfield(10)
    * */
  infoPopoverDescription: PropTypes.string,
  infoPopoverPosition: PropTypes.oneOf(['right-start', 'top']),
  /** @uxpinignoreprop */
  clickInfo: PropTypes.func,
  /** @uxpinignoreprop */
  mouseOverInfo: PropTypes.func,
  /** @uxpinignoreprop */
  mouseLeaveInfo: PropTypes.func,
  mode: PropTypes.oneOf(['date', 'datetime - 12hr', 'datetime - 24hr']),
  /**
   * @uxpinpropname Date format
   */
  format: PropTypes.oneOf(['MM/DD/YYYY', 'DD/MM/YYYY', 'YYYY/MM/DD']),
  /**
   * @uxpinpropname Time Step (Minutes)
   */
  minutesStep: PropTypes.oneOf(['5', '10', '15', '20', '30']),
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
};
/* eslint-enable */

DatePicker.defaultProps = {
  disabled: false,
  required: 'none',
  mode: 'date',
  format: 'MM/DD/YYYY',
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
