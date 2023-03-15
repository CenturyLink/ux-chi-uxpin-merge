import * as PropTypes from 'prop-types';
import * as React from 'react';
import Icon from '../Icon/Icon';

/* eslint-disable */
/**
 * @uxpincomponent
 * @uxpinwrappers
 * SkipContainerWrapper
 */
const InfoIcon = ({popoverTitle, popoverDescription, popoverPosition}) => {
  
  return (
    <Icon
      icon={'circle-info-outline'}
      color={'primary'}
      size={'xs'}
      popover={true}
      popoverTitle={popoverTitle}
      popoverPosition={popoverPosition}
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
  popoverPosition: PropTypes.oneOf(['top', 'right-start']),
};

/* eslint-enable */

InfoIcon.defaultProps = {
  popoverTitle: 'Popover Title',
  popoverDescription: `Line 1
Line 2
Line 3`,
  popoverPosition: 'right-start',
};

export { InfoIcon as default };
