import * as PropTypes from 'prop-types';
import * as React from 'react';
import ReactDOM from 'react-dom';
import Label from '../label/label';
import { uuid4 } from '../../../utils/utils';

const uuid = uuid4();
export default class Textarea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Sample Text',
    };
  }

  componentDidMount() {
    const textArea = document.getElementById(`${uuid}`);

    textArea.addEventListener('chiFocus', () => {
      this.props.focus();
    });
    textArea.addEventListener('chiBlur', () => {
      this.props.focusLost();
    });
    textArea.addEventListener('chiInput', () => {
      this.props.input();
    });
    textArea.addEventListener('chiChange', () => {
      this.props.valueChange();
    });
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
          htmlFor="number-input"
          className="chi-label"
          required={this.props.labelRequired}
          optional={this.props.labelOptional}
          label={this.props.label}>
        </Label>
      )
      : null;

    /* eslint-disable react/no-find-dom-node */
    const chiTextareaNode = ReactDOM.findDOMNode(this);
    /* eslint-enable react/no-find-dom-node */
    setTimeout(() => {
      const textareaElement = chiTextareaNode.querySelector('textarea');

      textareaElement.innerText = this.state.value ? this.state.value : 'Sample Text';
    }, 500);

    return (
      <div className="chi-form__item">
        {label}
        <chi-textarea
          id={uuid}
          icon-left={this.props.iconLeft}
          icon-right={this.props.iconRight}
          icon-left-color={this.props.iconLeftColor}
          icon-right-color={this.props.iconRightColor}
          disabled={this.props.disabled}
          state={this.props.state}
          size={this.props.size}
          placeholder={this.props.placeholder}
          onMouseEnter={this.props.mouseOver}
          onMouseLeave={this.props.mouseLeave}
          onMouseDown={this.props.mouseDown}
          onMouseUp={this.props.mouseUp}>
          Sample Text
        </chi-textarea>
      </div>
    );
  }
}

/* eslint-disable sort-keys */
Textarea.propTypes = {
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
  state: PropTypes.oneOf(['', 'success', 'warning', 'danger']),
  label: PropTypes.string,
  labelRequired: PropTypes.bool,
  labelOptional: PropTypes.bool,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  value: PropTypes.string,
};
/* eslint-enable sort-keys */

Textarea.defaultProps = {
  disabled: false,
  label: 'Label',
  placeholder: 'Placeholder',
  size: 'md',
  state: '',
};
