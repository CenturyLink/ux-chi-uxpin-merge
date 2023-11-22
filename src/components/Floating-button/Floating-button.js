/* eslint-disable react/prop-types */
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { uuid4 } from '../../utils/utils';

/**
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export default class FloatingButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: uuid4() };
  }

  componentDidMount() {
    if (this.props.tooltipMessage) {
      const initialize = setInterval(() => {
        if (window.chi && document.getElementById(this.state.id)) {
          window.chi.tooltip(document.getElementById(this.state.id));
          clearInterval(initialize);
        }
      }, 1000);
    }
  }

  render() {
    return (
      <div data-tooltip={this.props.tooltipMessage || null} id={this.state.id}>
        <chi-button
          ref={this.props.uxpinRef}
          type="float"
          color={this.props.color === 'base' ? null : this.props.color}
          size={this.props.size}
          onClick={this.props.click}
          onMouseEnter={this.props.mouseOver}
          onMouseLeave={this.props.mouseLeave}
          onMouseDown={this.props.mouseDown}
          onMouseUp={this.props.mouseUp}
          alternative-text={this.props.tooltipMessage || null}>
          <chi-icon icon={this.props.icon}></chi-icon>
        </chi-button>
      </div>
    );
  }
}

FloatingButton.propTypes = {
  color: PropTypes.oneOf(['base', 'primary', 'dark', 'secondary', 'light']),
  icon: PropTypes.string,
  tooltipMessage: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  click: PropTypes.func,
  mouseDown: PropTypes.func,
  mouseUp: PropTypes.func,
  mouseOver: PropTypes.func,
  mouseLeave: PropTypes.func,
};

FloatingButton.defaultProps = {
  color: 'primary',
  size: 'md',
};
