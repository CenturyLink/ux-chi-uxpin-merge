import * as PropTypes from 'prop-types';
import * as React from 'react';
import { uuid4 } from '../../../utils/utils';

const uuid = uuid4();
/* eslint-disable */
const FileInput = (props) => (
  <div className="chi-form__item"
       onMouseEnter={props.mouseOver}
       onMouseLeave={props.mouseLeave}
       onMouseDown={props.mouseDown}
       onMouseUp={props.mouseUp}>
    <input
      id={uuid}
      type="file"
      className={`chi-input -${props.size}`}
      aria-label="Choose file"
      onClick={props.click}
      onFocus={props.focus}
      onBlur={props.focusLost} />
    <label htmlFor={uuid}>{props.label}</label>
  </div>
  );

FileInput.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  click: PropTypes.func,
  focus: PropTypes.func,
  focusLost: PropTypes.func,
  mouseDown: PropTypes.func,
  mouseUp: PropTypes.func,
  mouseOver: PropTypes.func,
  mouseLeave: PropTypes.func,
};
/* eslint-enable */

FileInput.defaultProps = {
  label: 'No file chosen',
  size: 'md',
};

export default FileInput;
