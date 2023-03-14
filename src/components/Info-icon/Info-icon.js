import * as PropTypes from 'prop-types';
import * as React from 'react';
import Icon from '../Icon/Icon';

/* eslint-disable */
/**
 * @uxpincomponent
 * @uxpinwrappers
 * SkipContainerWrapper
 */
const InfoIcon = ({popoverTitle, popoverDescription}) => {
  
  return (
    <Icon
      icon={'circle-info-outline'}
      color={'primary'}
      size={'xs'}
      popover={true}
      popoverTitle={popoverTitle}
      popoverDescription={popoverDescription}>
    </Icon>
  )
};

InfoIcon.propTypes = {
  popoverTitle: PropTypes.string,
  popoverDescription: PropTypes.string,
};

/* eslint-enable */

InfoIcon.defaultProps = {
  popoverTitle: 'Popover Title',
  popoverDescription: 'Popover Description',
};

export { InfoIcon as default };
