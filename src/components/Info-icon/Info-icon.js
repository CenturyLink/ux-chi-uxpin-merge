import * as PropTypes from 'prop-types';
import * as React from 'react';
import Icon from '../Icon/Icon';

/* eslint-disable */
/**
 * @uxpincomponent
 * @uxpinwrappers
 * SkipContainerWrapper
 */
const InfoIcon = ({popoverTitle, popoverDescription, popoverPosition, clickInfo}) => {
  
  return (
    <Icon
      icon={'circle-info-outline'}
      color={'primary'}
      size={'xs'}
      popover={true}
      popoverTitle={popoverTitle}
      popoverPosition={popoverPosition}
      clickInfo={clickInfo}
      popoverDescription={popoverDescription}>
    </Icon>
  )
};

InfoIcon.propTypes = {
  popoverTitle: PropTypes.string,
  /**
    * A textArea controller for Text
    * @uxpinpropname text
    * @uxpincontroltype textfield(10)
    * */
  popoverDescription: PropTypes.string,
  popoverPosition: PropTypes.oneOf(['right-start', 'top']),
  clickInfo: PropTypes.func,
};

/* eslint-enable */

InfoIcon.defaultProps = {};

export { InfoIcon as default };
