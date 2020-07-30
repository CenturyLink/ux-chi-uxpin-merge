import * as PropTypes from 'prop-types';
import * as React from 'react';

export default class Alert extends React.Component {
  render() {
    const closeButton = (
      <button type="button" className="chi-alert__close-button chi-button -icon -close" aria-label="Close">
        <div className="chi-btn__content">
          <i className="chi-icon icon-x"></i>
        </div>
      </button>
    );
    const iconToRender = this.props.icon ? this.props.icon : 'circle-check';

    return (
      <div className={`chi-alert
      ${this.props.state ? `-${this.props.state}` : ''}
      ${this.props.size ? `-${this.props.size}` : ''}
      ${this.props.type ? `-${this.props.type}` : ''}
    `}>
        <i className={`chi-alert__icon chi-icon icon-${iconToRender}`}></i>
        <div className="chi-alert__content">
          {this.props.title ? <p className="chi-alert__title">{this.props.title}</p> : ''}
          <p className="chi-alert__text">{this.props.text}</p>
        </div>
        {this.props.closable ? closeButton : ''}
      </div>
    );
  }
}

/* eslint-disable */
Alert.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  state: PropTypes.oneOf(['success', 'warning', 'danger', 'info', 'muted']),
  text: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
  type: PropTypes.oneOf(['banner', 'toast']),
  closable: PropTypes.bool,
};
/* eslint-enable */

Alert.defaultProps = {
  size: 'md',
  state: '',
  text: 'This is an alert component',
};
