import * as PropTypes from 'prop-types';
import * as React from 'react';

/**
 * @uxpincomponent
 */
export default class Brand extends React.Component {
  render() {
    const size = this.props.size.split(' ')[0];

    return (
      <chi-brand
        color={this.props.color}
        size={size}
        onClick={this.props.click}
        onMouseEnter={this.props.mouseOver}
        onMouseLeave={this.props.mouseLeave}
        onMouseDown={this.props.mouseDown}
        onMouseUp={this.props.mouseUp}>
      </chi-brand>
    );
  }
}

/* eslint-disable sort-keys */
Brand.propTypes = {
  color: PropTypes.oneOf(['black', 'inverse', 'white']),
  size: PropTypes.oneOf(['xs (12px)', 'sm (16px)', 'sm--2 (20px)', 'sm--3 (24px)', 'md (32px)', 'lg (64px)', 'xl (96px)', 'xxl (128px)']),
  click: PropTypes.func,
  mouseDown: PropTypes.func,
  mouseUp: PropTypes.func,
  mouseOver: PropTypes.func,
  mouseLeave: PropTypes.func,
};
/* eslint-enable sort-keys */

Brand.defaultProps = {
  size: 'md (32px)',
};
