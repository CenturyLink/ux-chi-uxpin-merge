import * as PropTypes from 'prop-types';
import * as React from 'react';
import {
  ALERT_CLASSES,
  BUTTON_CLASSES,
  CLOSED_CLASS,
  ICON_CLASS,
  INFO_CLASS,
  SPINNER_CLASSES,
} from '../../constants/classes';

export default class Alert extends React.Component {
  render() {
    let iconToRender;
    let textToRender;
    let alertTitle = '';
    let closeButton = '';

    if (this.props.icon) {
      iconToRender = this.props.icon;
    } else {
      switch (this.props.state) {
        case 'success':
          iconToRender = 'circle-check';
          break;
        case 'warning':
          iconToRender = 'warning';
          break;
        case 'danger':
          iconToRender = 'circle-x';
          break;
        default:
          iconToRender = 'circle-info';
          break;
      }
    }

    if (this.props.text) {
      textToRender = this.props.text;
    } else {
      switch (this.props.state) {
        case 'success':
          textToRender = 'This is a success alert';
          break;
        case 'warning':
          textToRender = 'This is a warning alert';
          break;
        case 'danger':
          textToRender = 'This is a danger alert';
          break;
        case 'info':
          textToRender = 'This is an info alert';
          break;
        case 'muted':
          textToRender = 'This is a muted alert';
          break;
        case 'inprogress':
          textToRender = 'This is a test in progress alert';
          break;
        default:
          textToRender = 'This is a base alert';
          break;
      }
    }

    if (this.props.title) {
      alertTitle = <p className={`${ALERT_CLASSES.TITLE} -text--lg`}>{this.props.title}</p>;
    }

    if (this.props.closable) {
      closeButton = (
        <button
          type="button"
          className={`
            ${ALERT_CLASSES.CLOSE_BUTTON} 
            ${BUTTON_CLASSES.BUTTON} 
            ${BUTTON_CLASSES.ICON_BUTTON} 
            ${CLOSED_CLASS}`
          }
          aria-label="Close">
          <div className={BUTTON_CLASSES.CONTENT}>
            <i className={`${ICON_CLASS} icon-x`}></i>
          </div>
        </button>
      );
    }

    return (
      <div
        className={`
        ${ALERT_CLASSES.ALERT}
        ${this.props.state && this.props.state !== 'base' ? `-${this.props.state}` : ''}
        ${this.props.size ? `-${this.props.size}` : ''}
        ${this.props.type ? `-${this.props.type}` : ''}
        `}
        role="alert">
        {this.props.inProgress
          ? (
            <div className={ALERT_CLASSES.ICON}>
              <svg className={`${SPINNER_CLASSES.SPINNER} ${INFO_CLASS} -sm--2`} viewBox="0 0 66 66">
                <title>Loading</title>
                <circle className="path" cx="33" cy="33" r="30" fill="none" strokeWidth="6"></circle>
              </svg>
            </div>
          )
          : <i className={`${ALERT_CLASSES.ICON} ${ICON_CLASS} icon-${iconToRender}`}></i>
        }
        <div className={ALERT_CLASSES.CONTENT}>
          {alertTitle}
          <p className={ALERT_CLASSES.TEXT} style={{ whiteSpace: 'pre-line' }}>{textToRender}</p>
        </div>
        {closeButton}
      </div>
    );
  }
}

Alert.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  state: PropTypes.oneOf(['base', 'success', 'warning', 'danger', 'info', 'muted']),
  inProgress: PropTypes.bool,
  /**
   * A textArea controller for Text
   * @uxpinpropname text
   * @uxpincontroltype textfield(10)
   * */
  text: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
  type: PropTypes.oneOf(['bubble', 'banner', 'toast']),
  closable: PropTypes.bool,
};

Alert.defaultProps = {
  size: 'md',
  state: 'base',
  type: 'bubble',
  text: 'This is an alert message',
};
