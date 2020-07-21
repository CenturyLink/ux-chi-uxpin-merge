import * as PropTypes from 'prop-types';
import * as React from 'react';
import './button.css';

export default class Button extends React.Component {
  render() {
    const buttonContent = this.props.leftIcon || this.props.rightIcon ? (
      <div className="chi-button__content">
        {this.props.leftIcon ? <i style={{ display: 'flex' }} className={`chi-icon icon-${this.props.leftIcon}`}></i> : null}
        <span>{this.props.value}</span>
        {this.props.rightIcon ? <i style={{ display: 'flex' }} className={`chi-icon icon-${this.props.rightIcon}`}></i> : null}
      </div>
    ) : this.props.value;

    return (
      <button
        onClick={this.props.onClick}
        type="button"
        className={`
          chi-button 
          ${this.props.color ? `-${this.props.color}` : ''}
          ${this.props.size ? `-${this.props.size}` : ''}
          `}
        disabled={this.props.disabled}>
        {buttonContent}
      </button>
    );
  }
}

/* eslint-disable */
Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  color: PropTypes.oneOf(['primary', 'secondary', 'dark', 'light', 'danger']),
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  value: PropTypes.string,
};
/* eslint-enable */

Button.defaultProps = {
  disabled: false,
  size: 'md',
  color: 'primary',
  value: 'Button',
};
