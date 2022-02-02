import * as PropTypes from 'prop-types';
import * as React from 'react';

/* eslint-disable */
/**
 * @uxpincomponent
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export default class MarketingIcon extends React.Component {
  key = 0;

  constructor(props) {
    super(props);
  }

  render() {
    this.key += 1;

    return (<div
      key={this.key}
      style={{
        width: this.props.size === 'xs' ? 72 :
          this.props.size === 'sm' ? 80 :
            this.props.size === 'md' ? 90 :
              this.props.size === 'lg' ? 128 : '100%'
      }}
      onClick={this.props.click}
      onMouseEnter={this.props.mouseOver}
      onMouseLeave={this.props.mouseLeave}
      onMouseDown={this.props.mouseDown}
      onMouseUp={this.props.mouseUp}
      ref={this.props.uxpinRef}>
      <chi-marketing-icon
        icon={this.props.icon}
        size={this.props.size}
        variant={`${this.props.style === 'base' ? 'filled' : 'outline'}`}>
        <span className="-sr--only">
          i
        </span>
      </chi-marketing-icon>
    </div>);
  }
}

MarketingIcon.propTypes = {
  style: PropTypes.oneOf(['base', 'outline']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  icon: PropTypes.string,
  click: PropTypes.func,
  mouseDown: PropTypes.func,
  mouseLeave: PropTypes.func,
  mouseOver: PropTypes.func,
  mouseUp: PropTypes.func,
};
/* eslint-enable */

MarketingIcon.defaultProps = {
  size: 'sm',
  style: 'base',
  icon: 'business-big-data',
};
