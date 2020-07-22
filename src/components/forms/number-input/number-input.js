import * as PropTypes from 'prop-types';
import * as React from 'react';
import Label from '../label/label';
import { uuid4 } from '../../../utils/utils';

const uuid = uuid4();
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
    const label = this.props.label
      ? (
        <Label
          htmlFor={uuid}
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
          id={uuid}
          disabled={this.props.disabled}
          expanded={this.props.expanded}
          size={size}
          onClick={this.props.click}
          onMouseEnter={this.props.mouseOver}
          onMouseLeave={this.props.mouseLeave}
          onMouseDown={this.props.mouseDown}
          onMouseUp={this.props.mouseUp}>
        </chi-number-input>
      </div>
    );
  }
}

/* eslint-disable */
NumberInput.propTypes = {
  disabled: PropTypes.bool,
  expanded: PropTypes.bool,
  label: PropTypes.string,
  labelRequired: PropTypes.bool,
  labelOptional: PropTypes.bool,
  size: PropTypes.oneOf(['sm (24px)', 'md (32px)', 'lg (40px)', 'xl (48px)']),
  click: PropTypes.func,
  focus: PropTypes.func,
  focusLost: PropTypes.func,
  input: PropTypes.func,
  valueChange: PropTypes.func,
  mouseDown: PropTypes.func,
  mouseUp: PropTypes.func,
  mouseOver: PropTypes.func,
  mouseLeave: PropTypes.func,
};
/* eslint-enable */

NumberInput.defaultProps = {
  disabled: false,
  expanded: false,
  size: 'md',
  label: 'Label',
};
