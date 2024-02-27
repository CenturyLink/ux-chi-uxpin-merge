import * as React from 'react';
import * as PropTypes from 'prop-types';
import Popover from '../Popover/Popover';

/**
 * @uxpincomponent
 */
function PopoverButtons(props) {
  return <Popover title={props.title} position={props.position} text={props.text}></Popover>;
}

PopoverButtons.propTypes = {
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
  /** @uxpinignoreprop */
  title: PropTypes.string,
  /**
   * @uxpinpropname text
   * @uxpincontroltype textfield(10)
   * */
  text: PropTypes.string,
};

PopoverButtons.defaultProps = {
  position: 'top-start',
};

export default PopoverButtons;
