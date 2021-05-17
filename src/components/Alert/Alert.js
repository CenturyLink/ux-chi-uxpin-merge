import * as PropTypes from 'prop-types';
import * as React from 'react';

/* eslint-disable */
export default class Alert extends React.Component {
  render() {
    let iconToRender;
    let textToRender;
    let alertTitle = '';
    let closeButton = '';

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
      alertTitle = <p class="chi-alert__title -text--lg">{this.props.title}</p>;
    }

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
        ${this.props.state && this.props.state !== 'base' ? `-${this.props.state}` : ''}
        ${this.props.state && this.props.state !== 'base' ? `-b--${this.props.state}-light -bg--${this.props.state}-lighter` : ''}
        ${this.props.size ? `-${this.props.size}` : ''}
        ${this.props.type ? `-${this.props.type}` : ''}
        `}
        role="alert">  

        {this.props.state == 'inprogress' ? 
          <div class="chi-alert__icon">
            <svg class="chi-spinner -info -sm--2" viewBox="0 0 66 66">
            <title>Loading</title>
            <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
            </svg>
          </div>:
          <i class={`chi-alert__icon chi-icon icon-${iconToRender}`}></i>
        }
        <div class="chi-alert__content">
          {alertTitle}
          <p class="chi-alert__text">{textToRender}</p>
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
  text: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
  type: PropTypes.oneOf(['bubble', 'banner', 'toast']),
  closable: PropTypes.bool,
};
/* eslint-enable */

Alert.defaultProps = {
  size: 'md',
  state: 'base',
  type: 'bubble',
};
