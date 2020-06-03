import * as PropTypes from 'prop-types';
import * as React from 'react';
import './button.css';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hitState: false
    };
  }

  render () {
    const hitState = () => {
      if (this.props.hit) {
        this.setState({
          hitState: true
        });
        setTimeout(() => {
          this.setState({
            hitState: false
          });
        }, 100);
      }
    }

    const buttonContent = this.props.leftIcon || this.props.rightIcon ? <div class="chi-button__content">
      {this.props.leftIcon ? <i style={{display: 'flex'}} class={`chi-icon icon-${this.props.leftIcon}`}></i> : null}
      <span>{this.props.value}</span>
      {this.props.rightIcon ? <i style={{display: 'flex'}} class={`chi-icon icon-${this.props.rightIcon}`}></i> : null}
    </div> : this.props.value;

    return (
      <button
        onClick={hitState}
        className={`
          chi-button 
          ${this.props.color ? `-${this.props.color}` : ''}
          ${this.props.size ? `-${this.props.size}` : ''}
          ${this.state.hitState === true ? `-hit` : ''}
          `}
          disabled={this.props.disabled}>
          {buttonContent}
      </button>
    );
  }
}

/* eslint-disable sort-keys */
Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  // hit: PropTypes.bool,
  color: PropTypes.oneOf(['primary', 'secondary', 'dark', 'light', 'danger']),
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  value: PropTypes.string,
};
/* eslint-enable sort-keys */

Button.defaultProps = {
  disabled: false,
  size: 'md',
  color: 'primary',
  value: 'Button',
};
