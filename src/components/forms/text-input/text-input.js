import * as PropTypes from 'prop-types';
import * as React from 'react';
import Label from '../label/label';
import { uuid4 } from '../../../utils/utils';

const uuid = uuid4();
export default class TextInput extends React.Component {
  componentDidMount() {
    const textInput = document.getElementById(`${uuid}`);

    textInput.addEventListener('chiFocus', () => {
      this.props.focus();
    });
    textInput.addEventListener('chiBlur', () => {
      this.props.focusLost();
    });
    textInput.addEventListener('chiInput', () => {
      this.props.input();
    });
    textInput.addEventListener('chiChange', () => {
      this.props.valueChange();
    });
  }

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
        <chi-text-input
          id={uuid}
          disabled={this.props.disabled}
          size={this.props.size}
          state={this.props.state}
          icon-left={this.props.iconLeft}
          icon-left-color={this.props.iconLeftColor}
          icon-right={this.props.iconRight}
          icon-right-color={this.props.iconRightColor}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onMouseEnter={this.props.mouseOver}
          onMouseLeave={this.props.mouseLeave}
          onMouseDown={this.props.mouseDown}
          onMouseUp={this.props.mouseUp}>
        </chi-text-input>
      </div>
    );
  }
}

/* eslint-disable sort-keys */
TextInput.propTypes = {
  disabled: PropTypes.bool,
  iconLeft: PropTypes.string,
  iconLeftColor: PropTypes.oneOf(['', 'primary', 'secondary', 'dark', 'light', 'danger', 'grey', 'muted']),
  iconRight: PropTypes.string,
  iconRightColor: PropTypes.oneOf(['', 'primary', 'secondary', 'dark', 'light', 'danger', 'grey', 'muted']),
  focus: PropTypes.func,
  focusLost: PropTypes.func,
  input: PropTypes.func,
  valueChange: PropTypes.func,
  mouseDown: PropTypes.func,
  mouseUp: PropTypes.func,
  mouseOver: PropTypes.func,
  mouseLeave: PropTypes.func,
  label: PropTypes.string,
  labelRequired: PropTypes.bool,
  labelOptional: PropTypes.bool,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  state: PropTypes.oneOf(['success', 'warning', 'danger']),
  value: PropTypes.string,
};
/* eslint-enable sort-keys */

TextInput.defaultProps = {
  disabled: false,
  label: 'Label',
  size: 'md',
  state: '',
  placeholder: 'Placeholder',
};
