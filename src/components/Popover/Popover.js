import * as PropTypes from 'prop-types';
import * as React from 'react';
import { uuid4 } from '../../utils/utils';

/**
 * @uxpincomponent
 */
function Popover(props) {
  const popoverId = `popover-${uuid4()}`;
  const referenceId = `button-${uuid4()}`;
  const textRender = () => ({ __html: props.popover[0].text.replaceAll('\n', '<br />') });
  // eslint-disable-next-line react/no-danger
  const text = <p dangerouslySetInnerHTML={textRender()} />;

  return (
    <>
      <div style={{ border: '1px solid #e9e9e9', height: '16px', width: '16px' }} id={referenceId}>
        <span className="-sr--only">
          i
        </span>
      </div>
      <chi-popover
        active={props.active}
        arrow={props.arrow}
        id={popoverId}
        position={props.position}
        title={props.popover[0].title || null}
        variant="text"
        reference={`#${referenceId}`}
        closable={props.closeButton}
        prevent-auto-hide={props.preventAutoHide}>
        {text || ''}
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
  closeButton: PropTypes.bool,
  preventAutoHide: PropTypes.bool,
};
/* eslint-enable */

Popover.defaultProps = {
  active: true,
  arrow: true,
  position: 'bottom',
  popover: [{
    title: 'Popover Title',
    text: 'Popover Text',
  }],
  closeButton: false,
};

export default Popover;
