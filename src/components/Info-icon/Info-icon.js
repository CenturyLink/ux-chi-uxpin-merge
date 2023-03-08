import * as PropTypes from 'prop-types';
import * as React from 'react';
import Icon from '../Icon/Icon';

/* eslint-disable */
/**
 * @uxpincomponent
 * @uxpinwrappers
 * SkipContainerWrapper
 */
const InfoIcon = ({popoverTitle, popoverDescription, click, mouseDown, mouseUp, mouseLeave, mouseOver}) => {
  
  return (
    <Icon
      icon={'circle-info-outline'}
      color={'primary'}
      size={'sm'}
      popover={true}
      popoverTitle={popoverTitle}
      popoverDescription={popoverDescription}
      onClick={click}
      onMouseEnter={mouseOver}
      onMouseLeave={mouseLeave}
      onMouseDown={mouseDown}
      onMouseUp={mouseUp}>
    </Icon>
  )
};

InfoIcon.propTypes = {
  popoverTitle: PropTypes.string,
  popoverDescription: PropTypes.string,
  click: PropTypes.func,
  mouseDown: PropTypes.func,
  mouseLeave: PropTypes.func,
  mouseOver: PropTypes.func,
  mouseUp: PropTypes.func,
};
/* eslint-enable */

InfoIcon.defaultProps = {};

export { InfoIcon as default };
