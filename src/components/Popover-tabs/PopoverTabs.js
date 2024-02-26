import * as React from 'react';
import * as PropTypes from 'prop-types';
import Popover from '../Popover/Popover';

/**
 * @uxpincomponent
 */
function PopoverTabs(props) {
  return <Popover title={props.title} position={props.position}></Popover>;
}

PopoverTabs.propTypes = {
  position: PropTypes.oneOf([
    'top',
    'right',
    'bottom',
    'left',
    'top-start',
    'top-end',
    'right-start',
    'right-end',
    'bottom-start',
    'bottom-end',
    'left-start',
    'left-end',
  ]),
  title: PropTypes.string,
};

PopoverTabs.defaultProps = {
  position: 'top',
};

export default PopoverTabs;
