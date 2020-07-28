import * as PropTypes from 'prop-types';
import * as React from 'react';
import Label from '../label/label';
import { uuid4 } from '../../../utils/utils';

const uuid = uuid4();
/**
 * @uxpincomponent
 */
export default class TextInput extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      const textInput = document.getElementById(`${uuid}`);
      const self = this;

      textInput.addEventListener('chiFocus', () => {
        self.props.focus();
      });
      textInput.addEventListener('chiBlur', () => {
        self.props.focusLost();
      });
      textInput.addEventListener('chiInput', () => {
        self.props.input();
      });
      textInput.addEventListener('chiChange', () => {
        self.props.valueChange();
      });
    }, 1000);
  }

  render() {
    const label = this.props.label
      ? (
        <Label
          htmlFor="number-input"
          className={uuid}
          required={this.props.required}
          label={this.props.label}>
        </Label>
      )
      : null;

    return (
      <div className="chi-form__item">
        {label}
        <chi-text-input
          id={uuid}
          disabled={this.props.disabled}
          size={this.props.size}
          state={['success', 'warning', 'danger'].includes(this.props.state) ? this.props.state : ''}
          icon-left={this.props.iconLeft}
          icon-left-color={this.props.iconLeftColor}
          icon-right={this.props.iconRight}
          icon-right-color={this.props.iconRightColor}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onClick={this.props.click}
          onMouseEnter={this.props.mouseOver}
          onMouseLeave={this.props.mouseLeave}
          onMouseDown={this.props.mouseDown}
          onMouseUp={this.props.mouseUp}>
        </chi-text-input>
      </div>
    );
  }
}

/* eslint-disable */
TextInput.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  label: PropTypes.string,
  required: PropTypes.oneOf(['none', 'required', 'optional']),
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  iconLeft: PropTypes.string,
  iconLeftColor: PropTypes.oneOf(['', 'primary', 'secondary', 'dark', 'light', 'danger', 'grey', 'muted']),
  iconRight: PropTypes.string,
  iconRightColor: PropTypes.oneOf(['', 'primary', 'secondary', 'dark', 'light', 'danger', 'grey', 'muted']),
  state: PropTypes.oneOf(['default', 'success', 'warning', 'danger']),
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

TextInput.defaultProps = {
  disabled: false,
  label: 'Label',
  required: 'none',
  size: 'md',
  state: 'default',
  placeholder: '',
};
