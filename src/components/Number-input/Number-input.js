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
/**
 * @uxpincomponent
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export default class NumberInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: uuid4() };
  }

  componentDidMount() {
    const numberInput = document.getElementById(`${this.state.id}`);

    if (numberInput) {
      numberInput.addEventListener('chiChange', () => {
        this.props.valueChange();
      });
      setTimeout(() => {
        const input = numberInput.querySelector('input');
        const self = this;

        if (input) {
          input.addEventListener('focus', () => {
            self.props.focus();
          });
          input.addEventListener('blur', () => {
            self.props.focusLost();
          });
          input.addEventListener('input', () => {
            self.props.input();
          });
        }
      }, 1000);
    }
  }

  render() {
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
          htmlFor={this.state.id}
          className="chi-label"
          required={this.props.required}
          label={this.props.label}>
        </Label>
      )
      : null;

    const size = this.props.size ? this.props.size.split(' ')[0] : null;

    return (
      <div ref={this.props.uxpinRef} className="chi-form__item" style={{ width: '14rem' }}>
        <div className={`${LABEL_CLASSES.WRAPPER}`}>
          {label}
          {info}
        </div>
        <chi-number-input
          id={this.state.id}
          disabled={this.props.disabled}
          expanded={this.props.expanded}
          size={size}
          min={this.props.min}
          max={this.props.max}
          onClick={this.props.click}
          onMouseEnter={this.props.mouseOver}
          onMouseLeave={this.props.mouseLeave}
          onMouseDown={this.props.mouseDown}
          onMouseUp={this.props.mouseUp}
          value={this.props.startValue}>
        </chi-number-input>
      </div>
    );
  }
}

/* eslint-disable */
NumberInput.propTypes = {
  size: PropTypes.oneOf(['sm (24px)', 'md (32px)', 'lg (40px)', 'xl (48px)']),
  expanded: PropTypes.bool,
  label: PropTypes.string,
  required: PropTypes.oneOf(['none', 'required', 'optional']),
  disabled: PropTypes.bool,
  startValue: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
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
  mouseDownInfo: PropTypes.func,
  mouseLeaveInfo: PropTypes.func,
};
/* eslint-enable */

NumberInput.defaultProps = {
  disabled: false,
  expanded: false,
  size: 'md',
  label: 'Label',
  required: 'none',
  info: false,
  startValue: '0',
};
