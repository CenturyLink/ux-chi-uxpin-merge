import * as PropTypes from 'prop-types';
import * as React from 'react';
import './button.css';

/**
 * @uxpincomponent
 */
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
        type="button"
        className={`
          chi-button 
          ${this.props.color ? `-${this.props.color}` : ''}
          ${this.props.size ? `-${this.props.size}` : ''}
          `}
        disabled={this.props.disabled}
        onClick={this.props.click}
        onMouseEnter={this.props.mouseOver}
        onMouseLeave={this.props.mouseLeave}
        onMouseDown={this.props.mouseDown}
        onMouseUp={this.props.mouseUp}>
        {buttonContent}
      </button>
    );
  }
}

/* eslint-disable */
Button.propTypes = {
  disabled: PropTypes.bool,
  color: PropTypes.oneOf(['primary', 'secondary', 'dark', 'light', 'danger']),
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  value: PropTypes.string,
  click: PropTypes.func,
  mouseDown: PropTypes.func,
  mouseUp: PropTypes.func,
  mouseOver: PropTypes.func,
  mouseLeave: PropTypes.func,
};
/* eslint-enable */

Button.defaultProps = {
  disabled: false,
  size: 'md',
  color: 'primary',
  value: 'Button',
};
