import * as PropTypes from 'prop-types';
import * as React from 'react';
import Label from '../Label/Label';
import Icon from '../Icon/Icon';
import { uuid4 } from '../../utils/utils';
import { FORM_CLASSES, ICON_CLASSES, LABEL_CLASSES } from '../../constants/classes';

/**
 * @uxpincomponent
 * @uxpinwrappers
 * SkipContainerWrapper
 */

export default class Textarea extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: uuid4() };
  }

  componentDidMount() {
    const intervalId = setInterval(() => {
      const assignedElement = document.getElementById(`${this.state.id}-control`);
      if (assignedElement) {
        assignedElement.value = this.props.value;
        clearInterval(intervalId);
      }
    }, 250);

    this.cleanupInterval = () => clearInterval(intervalId);
  }

  componentWillUnmount() {
    if (this.cleanupInterval) {
      this.cleanupInterval();
    }
  }

  componentDidUpdate(prevProps) {
    const assignedElement = document.getElementById(`${this.state.id}-control`);
    if (assignedElement) {
      if (this.props.value !== prevProps.value) {
        assignedElement.value = this.props.value;
      } else if (this.props.helperMessageText !== prevProps.helperMessageText) {
        setTimeout(() => {
          // Using direct DOM element, because it was updated after the assignment
          document.getElementById(`${this.state.id}-control`).value = this.props.value;
        }, 200);
      }
    }
  }

  render() {
    const info = this.props.info ? (
      <div className={LABEL_CLASSES.HELP}>
        <Icon
          uxpId={`infoIcon-${this.state.id}`}
          icon={ICON_CLASSES.ICON_CIRCLE_INFO}
          size="xs"
          color="primary"
          mode="button"
          popover
          popoverTitle={this.props.infoPopoverTitle}
          popoverDescription={this.props.infoPopoverDescription}
          popoverPosition={this.props.infoPopoverPosition}
        />
      </div>
    ) : (
      ''
    );
    const label = this.props.label ? (
      <Label
        htmlFor={this.state.id}
        className={LABEL_CLASSES.LABEL}
        required={this.props.required}
        label={this.props.label}
      ></Label>
    ) : null;

    const states = ['success', 'warning', 'danger'];
    const state = states.includes(this.props.helperMessageType) ? this.props.helperMessageType : '';

    return (
      <div className={FORM_CLASSES.ITEM}>
        <div className={LABEL_CLASSES.WRAPPER}>
          {label}
          {info}
        </div>
        <chi-textarea
          id={this.state.id}
          helper-message={this.props.helperMessageText}
          state={state}
          size={this.props.size}
          disabled={this.props.disabled}
          placeholder={this.props.placeholder}
          onClick={this.props.click}
          onFocus={this.props.focus}
          onBlur={this.props.focusLost}
          onInput={this.props.input}
          onChange={this.props.valueChange}
          onMouseEnter={this.props.mouseOver}
          onMouseLeave={this.props.mouseLeave}
          onMouseDown={this.props.mouseDown}
          onMouseUp={this.props.mouseUp}
        ></chi-textarea>
      </div>
    );
  }
}

Textarea.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  label: PropTypes.string,
  required: PropTypes.oneOf(['none', 'required', 'optional']),
  helperMessageText: PropTypes.string,
  helperMessageType: PropTypes.oneOf(['default', 'success', 'warning', 'danger']),
  info: PropTypes.bool,
  infoPopoverTitle: PropTypes.string,
  /**
   * @uxpinpropname info popover text
   * @uxpincontroltype textfield(10)
   * */
  infoPopoverDescription: PropTypes.string,
  infoPopoverPosition: PropTypes.oneOf(['right-start', 'top']),
  disabled: PropTypes.bool,
  /**
   * A textArea controller for Text
   * @uxpinpropname text
   * @uxpincontroltype textfield(10)
   * */
  value: PropTypes.string,
  placeholder: PropTypes.string,
  /**
   * @uxpinpropname on click
   * */
  click: PropTypes.func,
  /**
   * @uxpinpropname on focus
   * */
  focus: PropTypes.func,
  /**
   * @uxpinpropname on focus lost
   * */
  focusLost: PropTypes.func,
  /**
   * @uxpinpropname on input
   * */
  input: PropTypes.func,
  /**
   * @uxpinpropname on mouse down
   * */
  mouseDown: PropTypes.func,
  /**
   * @uxpinpropname on mouse up
   * */
  mouseUp: PropTypes.func,
  /**
   * @uxpinpropname on mouse over
   * */
  mouseOver: PropTypes.func,
  /**
   * @uxpinpropname on mouse leave
   * */
  mouseLeave: PropTypes.func,
  /**
   * @uxpinpropname on value change
   * */
  valueChange: PropTypes.func,
};

Textarea.defaultProps = {
  disabled: false,
  size: 'md',
  required: 'none',
  helperMessageType: 'default',
  placeholder: '',
  value: '',
};
