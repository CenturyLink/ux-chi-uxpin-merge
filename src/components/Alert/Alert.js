/* eslint-disable react/no-unused-prop-types */
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { ALERT_CLASSES, DROPDOWN_CLASSES, UTILITY_CLASSES } from '../../constants/classes';

export default class Alert extends React.Component {
  renderAlertContent(defaultIconName, color, alertSize, alertType, title, defaultText) {
    const isClosable = this.props.closable && ['bubble', 'toast'].includes(this.props.type);

    return (
      <chi-alert
        color={color}
        icon={defaultIconName}
        size={alertSize}
        type={alertType}
        closable={isClosable}
        spinner={this.props.animateSpinner}
        ref={this.props.uxpinRef}
        title={`${title}\n`}
        class={UTILITY_CLASSES.WIDTH[100]}>
        {defaultText}
        {this.props.type === 'clickable' && <chi-icon icon={DROPDOWN_CLASSES.ICON_CHEVRON_RIGHT} slot={ALERT_CLASSES.CLICKABLE_ICON}></chi-icon>}
      </chi-alert>
    );
  }

  render() {
    const {
      size,
      state,
      title,
      icon,
      type,
      active,
      text,
    } = this.props;

    let defaultIconName;
    let defaultText = text;

    switch (state) {
      case 'success':
        defaultIconName = icon || 'circle-check';
        defaultText = defaultText || 'This is a success alert';
        break;
      case 'warning':
        defaultIconName = icon || 'warning';
        defaultText = defaultText || 'This is a warning alert';
        break;
      case 'danger':
        defaultIconName = icon || 'circle-x';
        defaultText = defaultText || 'This is a danger alert';
        break;
      case 'info':
        defaultIconName = icon || 'circle-info';
        defaultText = defaultText || 'This is an info alert';
        break;
      case 'muted':
        defaultIconName = icon || 'flag';
        defaultText = defaultText || 'This is a muted alert';
        break;
      case 'base':
      default:
        defaultIconName = icon || 'flag';
        defaultText = defaultText || 'This is a base alert';
        break;
    }

    const color = state;
    const alertSize = size !== 'md' ? size : undefined;
    const alertType = type !== 'clickable' ? type : undefined;

    if (!active) {
      return null;
    }

    const alertContent = this.renderAlertContent(defaultIconName, color, alertSize, alertType, title, defaultText);

    return type === 'clickable' ? (
      <chi-link href="#" no-hover-underline class={UTILITY_CLASSES.DISPLAY.BLOCK}>
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
   * @uxpinpropname text
   * @uxpincontroltype textfield(10)
   * */
  text: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
  active: PropTypes.bool,
  type: PropTypes.oneOf(['bubble', 'toast', 'clickable']),
  closable: PropTypes.bool,
  click: PropTypes.func,
};

Alert.defaultProps = {
  size: 'md',
  state: 'info',
  type: 'bubble',
  active: true,
};
