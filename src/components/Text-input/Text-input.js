import * as PropTypes from 'prop-types';
import * as React from 'react';
import Label from '../Label/Label';
import Icon from '../Icon/Icon';
import { uuid4 } from '../../utils/utils';
import {
  LABEL_CLASSES,
  STAT_CLASSES,
} from '../../constants/classes';

/* eslint-disable */
/**
 * @uxpincomponent
 */
export default class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: uuid4() };
  }

  componentDidMount() {
    setTimeout(() => {
      const textInput = document.getElementById(`${this.state.id}`);
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
          htmlFor="number-input"
          className={this.state.id}
          required={this.props.required}
          label={this.props.label}>
        </Label>
      )
      : null;

    return (
      <div className="chi-form__item">
        <div className={`${LABEL_CLASSES.WRAPPER}`}>
          {label}
          {info}
        </div>
        <chi-text-input
          id={this.state.id}
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
        <chi-helper-message>{this.props.helperMessage}</chi-helper-message>
      </div>
    );
  }
}

/* eslint-disable */
TextInput.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  label: PropTypes.string,
  required: PropTypes.oneOf(['none', 'required', 'optional']),
  helperMessage: PropTypes.string,
  /** @uxpinignoreprop */
  helperMessageState: PropTypes.oneOf(['default', 'danger']),
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
  required: 'none',
  info: false,
  infoPopoverTitle: 'Popover Title',
  infoPopoverDescription: `Line 1
Line 2
Line 3`,
  infoPopoverPosition: 'right-start',
  size: 'md',
  state: 'default',
  placeholder: '',
};
