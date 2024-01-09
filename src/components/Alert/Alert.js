import * as PropTypes from 'prop-types';
import * as React from 'react';
import { ALERT_CLASSES, DROPDOWN_CLASSES, UTILITY_CLASSES } from '../../constants/classes';

export default class Alert extends React.Component {
  alertRef = React.createRef();

  componentDidMount() {
    const alertElement = this.alertRef.current;

    alertElement?.addEventListener('dismissAlert', this.handleClick);
  }

  componentWillUnmount() {
    const alertElement = this.alertRef.current;

    alertElement?.removeEventListener('dismissAlert', this.handleClick);
  }

  handleClick = () => this.props.click?.();

  renderAlertContent(defaultIconName, color, alertSize, alertType, title, defaultText) {
    const isClosable = this.props.closable && ['bubble', 'toast'].includes(this.props.type);

    return (
      <chi-alert
        ref={this.alertRef}
        color={color}
        icon={defaultIconName}
        size={alertSize}
        type={alertType}
        closable={isClosable}
        spinner={this.props.animateSpinner}
        title={`${title}\n`}
        class={UTILITY_CLASSES.WIDTH[100]}>
        <span style={{ whiteSpace: 'pre-wrap' }}>{defaultText}</span>
        {this.props.type === 'clickable' && (
          <chi-icon icon={DROPDOWN_CLASSES.ICON_CHEVRON_RIGHT} slot={ALERT_CLASSES.CLICKABLE_ICON}></chi-icon>
        )}
      </chi-alert>
    );
  }

  _handleStates(stateIncoming) {
    const states = {
      success: {
        icon: 'circle-check',
        text: 'This is a success alert',
      },
      warning: {
        icon: 'warning',
        text: 'This is a warning alert',
      },
      danger: {
        icon: 'circle-x',
        text: 'This is a danger alert',
      },
      info: {
        icon: 'circle-info',
        text: 'This is an info alert',
      },
      muted: {
        icon: 'flag',
        text: 'This is a muted alert',
      },
      base: {
        icon: 'flag',
        text: 'This is a base alert',
      },
    };

    return states[stateIncoming];
  }

  render() {
    const {
      size, state, title, icon, type, active, text,
    } = this.props;

    const newState = this._handleStates(state);
    const defaultIconName = icon || newState.icon;
    const defaultText = text || newState.text;
    const color = state;
    const alertSize = size !== 'md' ? size : undefined;
    const alertType = type !== 'clickable' ? type : undefined;

    if (!active) {
      return null;
    }

    const alertContent = this.renderAlertContent(defaultIconName, color, alertSize, alertType, title, defaultText);

    return type === 'clickable' ? (
      <chi-link href="#" onClick={this.props.click} no-hover-underline class={UTILITY_CLASSES.DISPLAY.BLOCK}>
        {alertContent}
      </chi-link>
    ) : (
      alertContent
    );
  }
}

Alert.propTypes = {
  size: PropTypes.oneOf(['sm', 'md']),
  state: PropTypes.oneOf(['base', 'success', 'warning', 'danger', 'info', 'muted']),
  animateSpinner: PropTypes.bool,
  /**
   * A textArea controller for Text
   * @uxpinpropname text
   * @uxpincontroltype textfield(10)
   * */
  text: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
  active: PropTypes.bool,
  type: PropTypes.oneOf(['bubble', 'toast', 'clickable']),
  closable: PropTypes.bool,
  /**
   * @uxpinpropname On Click
   */
  click: PropTypes.func,
};

Alert.defaultProps = {
  size: 'md',
  title: '',
  state: 'info',
  type: 'bubble',
  active: true,
};
