import * as PropTypes from 'prop-types';
import * as React from 'react';
import Label from '../label/label';
import { uuid4 } from '../../../utils/utils';

const uuid = uuid4();
/**
 * @uxpincomponent
 */
export default class NumberInput extends React.Component {
  componentDidMount() {
    const numberInput = document.getElementById(`${uuid}`);

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
    console.log(this.props.required);
    const label = this.props.label
      ? (
        <Label
          htmlFor={uuid}
          className="chi-label"
          required={this.props.required}
          label={this.props.label}>
        </Label>
      )
      : null;

    const size = this.props.size ? this.props.size.split(' ')[0] : null;

    return (
      <div className="chi-form__item">
        {label}
        <chi-number-input
          id={uuid}
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
};
/* eslint-enable */

NumberInput.defaultProps = {
  disabled: false,
  expanded: false,
  size: 'md',
  label: 'Label',
  required: 'none',
  startValue: '0',
};
