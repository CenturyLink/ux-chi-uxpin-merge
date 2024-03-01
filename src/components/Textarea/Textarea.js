import * as PropTypes from 'prop-types';
import * as React from 'react';
import Label from '../Label/Label';
import Icon from '../Icon/Icon';
import { uuid4 } from '../../utils/utils';
import {
  LABEL_CLASSES,
  STAT_CLASSES,
} from '../../constants/classes';

/**
 * @uxpincomponent
 * @uxpinwrappers
 * SkipContainerWrapper
 */

/* eslint-disable */
export default class Textarea extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: uuid4() };
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (this.props.value !== prevProps.value) {
      const textareaElement = document.getElementById(this.state.id);

      textareaElement.value = this.props.value;
    }
  }

  render() {
    const info = this.props.info
      ? (
        <div className={`${STAT_CLASSES.TITLE_HELP}`}>
          <Icon
            uxpId={`infoIcon-${this.state.id}`}
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
          htmlFor={this.state.id}
          className="chi-label"
          required={this.props.required}
          label={this.props.label}>
        </Label>
      )
      : null
    const value = this.props.value ? this.props.value : '';

    return (
      <div className="chi-form__item">
        <div className={`${LABEL_CLASSES.WRAPPER}`}>
          {label}
          {info}
        </div>
        <textarea
          id={this.state.id}
          className={`
            chi-input
            ${['success', 'warning', 'danger'].includes(this.props.state) ? `-${this.props.state}` : ''}
            ${this.props.size ? `-${this.props.size}` : ''}
            `}
          disabled={this.props.disabled}
          placeholder={this.props.placeholder}
          onClick={this.props.click}
          onFocus={this.props.focus}
          onBlur={this.props.focusLost}
          onInput={this.props.input}
          onChange={this.props.change}
          onMouseEnter={this.props.mouseOver}
          onMouseLeave={this.props.mouseLeave}
          onMouseDown={this.props.mouseDown}
          onMouseUp={this.props.mouseUp}
          style={{
            height: this.props.height ? `${this.props.height}px` : '',
          }}
          >
            {value}
        </textarea>
      </div>
    );
  }
}

Textarea.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  height: PropTypes.number,
  label: PropTypes.string,
  required: PropTypes.oneOf(['none', 'required', 'optional']),
  info: PropTypes.bool,
  infoPopoverTitle: PropTypes.string,
  /**
    * @uxpinpropname info popover text
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
  disabled: PropTypes.bool,
  /**
    * A textArea controller for Text
    * @uxpinpropname text
    * @uxpincontroltype textfield(10)
    * */
  value: PropTypes.string,
  placeholder: PropTypes.string,
  state: PropTypes.oneOf(['default', 'success', 'warning', 'danger']),
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
/* eslint-enable */

Textarea.defaultProps = {
  disabled: false,
  size: 'md',
  state: 'default',
  required: 'none',
  placeholder: '',
  value: '',
};
