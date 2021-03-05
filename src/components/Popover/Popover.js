import * as PropTypes from 'prop-types';
import * as React from 'react';
import { uuid4 } from '../../utils/utils';

/**
 * @uxpincomponent
 */
function Popover(props) {
  const popoverId = `popover-${uuid4()}`;
  const buttonId = `button-${uuid4()}`;

  const initialize = setInterval(() => {
    if (window.chi && document.getElementById(buttonId)) {
      document.querySelector(`#${buttonId}`)
        .addEventListener('click', () => {
          const popoverElem = document.querySelector(`#${popoverId}`);
          popoverElem.toggle();
        });
      clearInterval(initialize);
    }
  }, 100);

  return (
    <>
      <chi-button id={buttonId}>Click me!</chi-button>
      <chi-popover
        active={props.active}
        arrow={props.arrow}
        id={popoverId}
        position={props.position}
        title={props.popover[0].title || null}
        variant="text"
        reference={`#${buttonId}`}>
        {props.popover[0].text || ''}
      </chi-popover>
    </>
  );
}

/* eslint-disable */
Popover.propTypes = {
  active: PropTypes.bool,
  arrow: PropTypes.bool,
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left', 'top-start', 'top-end', 'right-start', 'right-end', 'bottom-start', 'bottom-end', 'left-start', 'left-end']),
  popover: PropTypes.array,
  button: PropTypes.array,
};
/* eslint-enable */

Popover.defaultProps = {
  active: false,
  arrow: true,
  position: 'bottom',
  popover: [{
    title: 'Popover Title',
    text: 'Popover Text',
  }],
};

export default Popover;
