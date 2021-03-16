import * as PropTypes from 'prop-types';
import * as React from 'react';

/* eslint-disable */
/**
 * @uxpincomponent
 */
const MarketingIcon = (props) => (
  <div
    onClick={props.click}
    onMouseEnter={props.mouseOver}
    onMouseLeave={props.mouseLeave}
    onMouseDown={props.mouseDown}
    onMouseUp={props.mouseUp}>
      <chi-marketing-icon icon={props.icon} size={props.size}>
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
