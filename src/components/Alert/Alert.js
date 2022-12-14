/* eslint-disable jsx-a11y/anchor-is-valid */
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {
  ALERT_CLASSES,
  BUTTON_CLASSES,
  CLOSE_CLASS,
  ICON_CHEVRON_RIGHT,
  ICON_CLASS,
  INFO_CLASS,
  LINK_CLASSES,
  NO_HOVER_UNDERLINE,
  SPINNER_CLASSES,
  UTILITY_CLASSES,
} from '../../constants/classes';

export default class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultIcon: 'circle-info',
      defaultText: 'This is a base alert',
    };
  }

  _setIconAndText() {
    switch (this.props.state) {
      case 'success':
        this.state.defaultIcon = 'circle-check';
        this.state.defaultText = 'This is a success alert';
        break;
      case 'warning':
        this.state.defaultIcon = 'warning';
        this.state.defaultText = 'This is a warning alert';
        break;
      case 'danger':
        this.state.defaultIcon = 'circle-warning';
        this.state.defaultText = 'This is a danger alert';
        break;
      case 'info':
        this.state.defaultIcon = 'circle-info';
        this.state.defaultText = 'This is a info alert';
        break;
      case 'muted':
        this.state.defaultIcon = 'circle-info';
        this.state.defaultText = 'This is a muted alert';
        break;
      case 'inprogress':
        this.state.defaultText = 'This is a test in progress alert';
        break;
      default:
        this.state.defaultIcon = 'circle-info';
        this.state.defaultText = 'This is a base alert';
        break;
    }
  }

  _iconToRender() {
    return this.props.icon ? this.props.icon : this.state.defaultIcon;
  }

  _textToRender() {
    return this.props.text ? this.props.text : this.state.defaultText;
  }

  _alertTitle() {
    return (
      <p className={`${ALERT_CLASSES.TITLE} ${UTILITY_CLASSES.TEXT.LG}`}>
        {this.props.title}
      </p>
    );
  }

  _closableButton() {
    return (
      <button
        type="button"
        className={`
          ${ALERT_CLASSES.CLOSE_BUTTON} 
          ${BUTTON_CLASSES.BUTTON} 
          ${BUTTON_CLASSES.ICON_BUTTON} 
          ${CLOSE_CLASS}`}
        aria-label="Close">
        <div className={BUTTON_CLASSES.CONTENT}>
          <i className={`${ICON_CLASS} icon-x`}></i>
        </div>
      </button>
    );
  }

  _progressIcon() {
    return (
      <div className={ALERT_CLASSES.ICON}>
        <svg
          className={`${SPINNER_CLASSES.SPINNER} ${INFO_CLASS} -sm--2`}
          viewBox="0 0 66 66">
          <title>Loading</title>
          <circle
            className="path"
            cx="33"
            cy="33"
            r="30"
            fill="none"
            strokeWidth="6">
          </circle>
        </svg>
      </div>
    );
  }

  _alert() {
    const state = this.props.state && this.props.state !== 'base'
      ? `-${this.props.state}`
      : '';
    const type = this.props.type ? `-${this.props.type}` : '';
    const size = this.props.size ? `-${this.props.size}` : '';
    const iconName = `icon-${this._iconToRender()}`;
    const icon = this.props.inProgress ? (
      this._progressIcon()
    ) : (
      <i
        className={`${ALERT_CLASSES.ICON} ${ICON_CLASS} ${iconName}`}
        aria-hidden="true">
      </i>
    );
    const title = this.props.title ? this._alertTitle() : null;
    const alertContent = (
      <>
        {icon}
        <div className={ALERT_CLASSES.CONTENT}>
          {title}
          <p
            style={{ whiteSpace: 'pre-line' }}>
            {this._textToRender()}
          </p>
        </div>
      </>
    );
    const chevronRight = (
      <div className={ALERT_CLASSES.CLICKABLE_ICON}>
        <i className={`${ICON_CLASS} ${ICON_CHEVRON_RIGHT}`}></i>
      </div>
    );
    const closeButton = this.props.closable ? this._closableButton() : null;
    const rightIcon = this.props.type !== 'clickable' ? closeButton : chevronRight;
    const alert = (
      <div
        className={`${ALERT_CLASSES.ALERT} ${state} ${size} ${type}`}
        role="alert">
        {alertContent}
        {rightIcon}
      </div>
    );
    const clickableAlert = (
      <a
        href="#"
        onClick={this.props.click}
        className={`${LINK_CLASSES.LINK} ${NO_HOVER_UNDERLINE}`}>
        {alert}
      </a>
    );

    return this.props.type !== 'clickable' ? alert : clickableAlert;
  }

  render() {
    this._setIconAndText();

    return <div ref={this.props.uxpinRef}>{this._alert()}</div>;
  }
}

Alert.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  state: PropTypes.oneOf([
    'base',
    'success',
    'warning',
    'danger',
    'info',
    'muted',
  ]),
  inProgress: PropTypes.bool,
  /**
   * A textArea controller for Text
   * @uxpinpropname text
   * @uxpincontroltype textfield(10)
   * */
  text: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
  type: PropTypes.oneOf(['bubble', 'banner', 'toast', 'clickable']),
  closable: PropTypes.bool,
  click: PropTypes.func,
};

Alert.defaultProps = {
  size: 'md',
  state: 'base',
  type: 'bubble',
  text: 'This is an alert message',
};
