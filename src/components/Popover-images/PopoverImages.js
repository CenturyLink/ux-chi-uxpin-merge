import * as React from 'react';
import * as PropTypes from 'prop-types';
import Popover from '../Popover/Popover';

/**
 * @uxpincomponent
 */
function PopoverImages(props) {
  return <Popover title={props.title} position={props.position} text={props.text}></Popover>;
}

PopoverImages.propTypes = {
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

PopoverImages.defaultProps = {
  position: 'top-start',
};

export default PopoverImages;
