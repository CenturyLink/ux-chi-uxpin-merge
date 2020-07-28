import * as PropTypes from 'prop-types';
import * as React from 'react';
import Label from '../label/label';
import { uuid4 } from '../../../utils/utils';

const uuid = uuid4();
/**
 * @uxpincomponent
 * @uxpinwrappers
 * SkipContainerWrapper
 */

/* eslint-disable */
export default class Textarea extends React.Component {
  constructor(props, { uxpinRef }) {
    super(props);
    this.state = {
      value: '',
      uxpinRef: uxpinRef,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      const textArea = document.getElementById(`${uuid}`);
      const self = this;

      if (textArea) {
        textArea.addEventListener('chiFocus', () => {
          self.props.focus();
        });
        textArea.addEventListener('chiBlur', () => {
          self.props.focusLost();
        });
        textArea.addEventListener('chiInput', () => {
          self.props.input();
        });
        textArea.addEventListener('chiChange', () => {
          self.props.valueChange();
        });
      }
    }, 1000);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value,
    });
    this.state.value = nextProps.value;
  }

  render() {
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

    setTimeout(() => {
      const textarea = document.getElementById(uuid);
      const textareaElement = textarea.querySelector('textarea');

      textareaElement.style['width'] = `${this.props.width}px`;
      textareaElement.style['height'] = `${this.props.height}px`;
      console.log(textareaElement);
      textareaElement.innerText = this.state.value ? this.state.value : '';
    }, 750);

    return (
      <div className="chi-form__item" ref={this.state.uxpinRef}>
        {label}
        <chi-textarea
          id={uuid}
          icon-left={this.props.iconLeft}
          icon-right={this.props.iconRight}
          icon-left-color={this.props.iconLeftColor}
          icon-right-color={this.props.iconRightColor}
          disabled={this.props.disabled}
          state={['success', 'warning', 'danger'].includes(this.props.state) ? this.props.state : ''}
          size={this.props.size}
          onClick={this.props.click}
          onMouseEnter={this.props.mouseOver}
          onMouseLeave={this.props.mouseLeave}
          onMouseDown={this.props.mouseDown}
          onMouseUp={this.props.mouseUp}>
        </chi-textarea>
      </div>
    );
  }
}

Textarea.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  label: PropTypes.string,
  required: PropTypes.oneOf(['none', 'required', 'optional']),
  disabled: PropTypes.bool,
  // iconLeft: PropTypes.string,
  // iconLeftColor: PropTypes.oneOf(['', 'primary', 'secondary', 'dark', 'light', 'danger', 'grey', 'muted']),
  // iconRight: PropTypes.string,
  // iconRightColor: PropTypes.oneOf(['', 'primary', 'secondary', 'dark', 'light', 'danger', 'grey', 'muted']),
  value: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  state: PropTypes.oneOf(['default', 'success', 'warning', 'danger']),
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

Textarea.defaultProps = {
  disabled: false,
  label: 'Label',
  size: 'md',
  state: 'default',
  required: 'none',
};
