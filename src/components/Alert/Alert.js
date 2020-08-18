import * as PropTypes from 'prop-types';
import * as React from 'react';

/* eslint-disable */
export default class Alert extends React.Component {
  render() {
    let iconToRender;

    if (this.props.icon) {
      iconToRender = this.props.icon;
    } else {
      switch(this.props.state) {
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
    let alertTitle = '';
    if (this.props.title) {
      alertTitle = <p class="chi-alert__title">{this.props.title}</p>;
    }
    let closeButton = '';
    if (this.props.closable) {
      closeButton = <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
      <div class="chi-button__content">
        <i class="chi-icon icon-x"></i>
      </div>
    </button>;
    }

    return (
      <div class={`
        chi-alert
        ${this.props.state ? `-${this.props.state}` : ''}
        ${this.props.size ? `-${this.props.size}` : ''}
        ${this.props.type ? `-${this.props.type}` : ''}
        `}
        role="alert">
        <i class={`chi-alert__icon chi-icon icon-${iconToRender}`}></i>
        <div class="chi-alert__content">
          {alertTitle}
          <p class="chi-alert__text">{this.props.text}</p>
        </div>
        {closeButton}
      </div>
    );
  }
}

Alert.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  state: PropTypes.oneOf(['success', 'warning', 'danger', 'info', 'muted']),
  text: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
  type: PropTypes.oneOf(['bubble', 'banner', 'toast']),
  closable: PropTypes.bool,
};
/* eslint-enable */

Alert.defaultProps = {
  size: 'md',
  state: '',
  type: 'bubble',
  text: 'This is an alert component',
};
