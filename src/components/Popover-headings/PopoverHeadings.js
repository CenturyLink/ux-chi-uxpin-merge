import * as PropTypes from 'prop-types';
import * as React from 'react';
import Popover from '../Popover/Popover';

/**
 * @uxpincomponent
 */
function PopoverHeadings(props) {
  return <Popover title={props.title} position={props.position} text={props.text} stopRepositioning></Popover>;
}

PopoverHeadings.propTypes = {
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
  /**
   * @uxpinpropname text
   * @uxpincontroltype textfield(10)
   * */
  text: PropTypes.string,
};

PopoverHeadings.defaultProps = {
  position: 'top-start',
};

export default PopoverHeadings;
