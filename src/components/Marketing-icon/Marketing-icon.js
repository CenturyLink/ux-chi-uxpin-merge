import * as PropTypes from 'prop-types';
import * as React from 'react';

/* eslint-disable */
/**
 * @uxpincomponent
 * @uxpinwrappers
 * SkipContainerWrapper
 */
const MarketingIcon = ({ click, mouseDown, mouseUp, mouseLeave, mouseOver, icon, size, uxpinRef }) => (
  <div
    style={{
      width: size === 'xs' ? 72 :
        size === 'sm' ? 80 :
        size === 'md' ? 90 :
        size === 'lg' ? 128 : '100%'
    }}
    onClick={click}
    onMouseEnter={mouseOver}
    onMouseLeave={mouseLeave}
    onMouseDown={mouseDown}
    onMouseUp={mouseUp}
    ref={uxpinRef}>
      <chi-marketing-icon icon={icon} size={size}>
        <span className="-sr--only">
          i
        </span>
      </chi-marketing-icon>
  </div>
);

MarketingIcon.propTypes = {
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
  icon: 'business-big-data',
};

export { MarketingIcon as default };
