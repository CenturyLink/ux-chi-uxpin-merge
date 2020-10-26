import * as PropTypes from 'prop-types';
import * as React from 'react';
import './Tooltip.css';
import { uuid4 } from '../../utils/utils';

const uuid = uuid4();

/**
 * @uxpincomponent
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export default class Tooltip extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      window.chi.tooltip(document.getElementById(uuid));
    }, 2000);
  }

  render() {
    return (
      <button
        type="button"
        id={uuid}
        data-tooltip={this.props.message}
        data-position={this.props.position}
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
Tooltip.propTypes = {
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  click: PropTypes.func,
  flat: PropTypes.bool,
  mouseDown: PropTypes.func,
  mouseUp: PropTypes.func,
  mouseOver: PropTypes.func,
  mouseLeave: PropTypes.func,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  message: PropTypes.string,
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
};
/* eslint-enable */

Tooltip.defaultProps = {
  disabled: false,
  icon: 'atom',
  size: 'md',
  message: 'Tooltip message goes here',
  position: 'top',
};
