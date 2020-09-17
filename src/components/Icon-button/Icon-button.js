import * as PropTypes from 'prop-types';
import * as React from 'react';
import './IconButton.css';

/**
 * @uxpincomponent
 */
export default class IconButton extends React.Component {
  render() {
    return (
      <button
        type="button"
        className={`
          chi-button
          -icon
          ${this.props.size ? `-${this.props.size}` : ''}
          ${this.props.flat ? '-flat' : ''}
          `}
        disabled={this.props.disabled}
        onClick={this.props.click}
        onMouseEnter={this.props.mouseOver}
        onMouseLeave={this.props.mouseLeave}
        onMouseDown={this.props.mouseDown}
        onMouseUp={this.props.mouseUp}>
        <div className="chi-button__content">
          <i className={`chi-icon icon-${this.props.icon}`}></i>
        </div>
      </button>
    );
  }
}

/* eslint-disable */
IconButton.propTypes = {
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  click: PropTypes.func,
  flat: PropTypes.bool,
  mouseDown: PropTypes.func,
  mouseUp: PropTypes.func,
  mouseOver: PropTypes.func,
  mouseLeave: PropTypes.func,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
};
/* eslint-enable */

IconButton.defaultProps = {
  disabled: false,
  icon: 'atom',
  size: 'md',
};
