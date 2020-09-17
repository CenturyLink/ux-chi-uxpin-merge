import * as PropTypes from 'prop-types';
import * as React from 'react';
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
          ${this.props.size ? `-${this.props.size}` : ''}
          `}
        disabled={this.props.disabled}
        onClick={this.props.click}
        onMouseEnter={this.props.mouseOver}
        onMouseLeave={this.props.mouseLeave}
        onMouseDown={this.props.mouseDown}
        onMouseUp={this.props.mouseUp}>
        <div class="chi-button__content">
          <i class={`chi-icon icon-${this.props.icon}`}></i>
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
