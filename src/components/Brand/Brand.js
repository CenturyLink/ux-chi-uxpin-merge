import * as PropTypes from 'prop-types';
import * as React from 'react';

/* eslint-disable */
/**
 * @uxpincomponent
 */
export default class Brand extends React.Component {
  render() {
    const size = this.props.size.split(' ')[0];

    return (
      <div
        onClick={this.props.click}
        onMouseEnter={this.props.mouseOver}
        onMouseLeave={this.props.mouseLeave}
        onMouseDown={this.props.mouseDown}
        onMouseUp={this.props.mouseUp}>
        <chi-brand
          color={this.props.color}
          size={size}>
          <span className="-sr--only">
            i
          </span>
        </chi-brand>
      </div>
    );
  }
}

Brand.propTypes = {
  size: PropTypes.oneOf(['xs (12px)', 'sm (16px)', 'sm--2 (20px)', 'sm--3 (24px)', 'md (32px)', 'lg (64px)', 'xl (96px)', 'xxl (128px)']),
  color: PropTypes.oneOf(['black', 'inverse', 'white']),
  click: PropTypes.func,
  mouseDown: PropTypes.func,
  mouseLeave: PropTypes.func,
  mouseOver: PropTypes.func,
  mouseUp: PropTypes.func,
};
/* eslint-enable */

Brand.defaultProps = {
  size: 'md (32px)',
};
