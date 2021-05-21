import * as PropTypes from 'prop-types';
import * as React from 'react';

/* eslint-disable */
/**
 * @uxpincomponent
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export default class Brand extends React.Component {
  render() {
    const size = this.props.size.split(' ')[0];
    let boundingBoxSize;

    switch (size) {
      case 'xs':
        boundingBoxSize = 84;
        break;
      case 'sm':
        boundingBoxSize = 112;
        break;
      case 'md':
        boundingBoxSize = 140;
        break;
      case 'lg':
        boundingBoxSize = 168;
        break;
      case 'xl':
        boundingBoxSize = 224;
        break;
      case 'xxl':
        boundingBoxSize = 280;
        break;
    }

    return (
        <div
            onClick={this.props.click}
            onMouseEnter={this.props.mouseOver}
            onMouseLeave={this.props.mouseLeave}
            onMouseDown={this.props.mouseDown}
            onMouseUp={this.props.mouseUp}
            style={{width: boundingBoxSize}}
            ref={this.props.uxpinRef}>
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
  size: PropTypes.oneOf(['xs (12px)', 'sm (16px)', 'md (32px)', 'lg (64px)', 'xl (96px)', 'xxl (128px)']),
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
