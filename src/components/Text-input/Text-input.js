import * as PropTypes from 'prop-types';
import * as React from 'react';
import Label from '../Label/Label';
import Icon from '../Icon/Icon';
import { uuid4 } from '../../utils/utils';
import { LABEL_CLASSES, STAT_CLASSES } from '../../constants/classes';

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
    const info = this.props.info ? (
      <div className={`${STAT_CLASSES.TITLE_HELP}`}>
        <Icon
          uxpId={`infoIcon-${this.state.id}`}
          icon="circle-info-outline"
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
      <Label htmlFor="text-input" required={this.props.required} label={this.props.label}></Label>
    ) : null;
    const states = ['success', 'warning', 'danger'];
    const state = states.includes(this.props.helperMessageType) ? this.props.helperMessageType : '';

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
          state={state}
          icon-left={this.props.iconLeft}
          icon-left-color={this.props.iconLeftColor}
          icon-right={this.props.iconRight}
          icon-right-color={this.props.iconRightColor}
          placeholder={this.props.placeholder}
          value={this.props.value}
          helper-message={this.props.helperMessageText}
          onClick={this.props.click}
          onMouseEnter={this.props.mouseOver}
          onMouseLeave={this.props.mouseLeave}
          onMouseDown={this.props.mouseDown}
          onMouseUp={this.props.mouseUp}
        ></chi-text-input>
      </div>
    );
  }
}

TextInput.propTypes = {
  /**
   * @uxpinpropname field label
   * */
  label: PropTypes.string,
  required: PropTypes.oneOf(['none', 'required', 'optional']),
  value: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  helperMessageText: PropTypes.string,
  helperMessageType: PropTypes.oneOf(['default', 'success', 'warning', 'danger']),
  /**
   * @uxpinpropname info icon
   * */
  info: PropTypes.bool,
  infoPopoverTitle: PropTypes.string,
  /**
   * @uxpinpropname info popover text
   * @uxpincontroltype textfield(10)
   * */
  infoPopoverDescription: PropTypes.string,
  infoPopoverPosition: PropTypes.oneOf(['right-start', 'top']),
  iconLeft: PropTypes.string,
  iconLeftColor: PropTypes.oneOf(['', 'primary', 'secondary', 'dark', 'light', 'danger', 'grey', 'muted']),
  iconRight: PropTypes.string,
  iconRightColor: PropTypes.oneOf(['', 'primary', 'secondary', 'dark', 'light', 'danger', 'grey', 'muted']),
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  /**
   * @uxpinpropname on click
   * */
  click: PropTypes.func,
  /**
   * @uxpinpropname on input
   * */
  input: PropTypes.func,
  /**
   * @uxpinpropname on value change
   * */
  valueChange: PropTypes.func,
  /**
   * @uxpinpropname on mouse over
   * */
  mouseOver: PropTypes.func,
  /**
   * @uxpinpropname on mouse leave
   * */
  mouseLeave: PropTypes.func,
  /**
   * @uxpinpropname on mouse down
   * */
  mouseDown: PropTypes.func,
  /**
   * @uxpinpropname on mouse up
   * */
  mouseUp: PropTypes.func,
  /**
   * @uxpinpropname on focus
   * */
  focus: PropTypes.func,
  /**
   * @uxpinpropname on focus lost
   * */
  focusLost: PropTypes.func,
  /** @uxpinignoreprop */
  clickInfo: PropTypes.func,
  /** @uxpinignoreprop */
  mouseOverInfo: PropTypes.func,
  /** @uxpinignoreprop */
  mouseLeaveInfo: PropTypes.func,
};

TextInput.defaultProps = {
  disabled: false,
  required: 'none',
  size: 'md',
  helperMessageType: 'default',
  placeholder: '',
};
