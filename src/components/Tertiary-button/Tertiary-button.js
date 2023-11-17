import * as PropTypes from 'prop-types';
import * as React from 'react';

/**
 * @uxpincomponent
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export default class TertiaryButton extends React.Component {
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
            ${this.props.size ? `-${this.props.size}` : ''}
            ${this.props.fluid ? '-fluid -justify-content--center' : ''}
            `}
        disabled={this.props.disabled}
        onClick={this.props.click}
        onMouseEnter={this.props.mouseOver}
        onMouseLeave={this.props.mouseLeave}
        onMouseDown={this.props.mouseDown}
        onMouseUp={this.props.mouseUp}
        ref={this.props.uxpinRef}>
        {buttonContent}
      </button>
    );
  }
}

/* eslint-disable */
TertiaryButton.propTypes = {
  disabled: PropTypes.bool,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  size: PropTypes.oneOf(['xs']),
  value: PropTypes.string,
  fluid: PropTypes.bool,
  click: PropTypes.func,
  mouseDown: PropTypes.func,
  mouseUp: PropTypes.func,
  mouseOver: PropTypes.func,
  mouseLeave: PropTypes.func,
};
/* eslint-enable */

TertiaryButton.defaultProps = {
  disabled: false,
  size: 'xs',
};
