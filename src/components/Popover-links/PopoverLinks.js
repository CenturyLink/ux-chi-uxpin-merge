import * as React from 'react';
import * as PropTypes from 'prop-types';
import Popover from '../Popover/Popover';

/**
 * @uxpincomponent
 */
function PopoverLinks(props) {
  return <Popover title={props.title} position={props.position} text={props.text}></Popover>;
}

PopoverLinks.propTypes = {
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

PopoverLinks.defaultProps = {
  position: 'top',
};

export default PopoverLinks;
