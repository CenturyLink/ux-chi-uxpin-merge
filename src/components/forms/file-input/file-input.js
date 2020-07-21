import * as PropTypes from 'prop-types';
import * as React from 'react';
import {uuid4} from '../../../utils/utils';

const uuid = uuid4();
const FileInput = (props) => (
    <div className="chi-form__item">
      <input type="file" className={`chi-input -${props.size}`} id={uuid} aria-label="Choose file" />
      <label htmlFor={uuid}>{props.label}</label>
    </div>
);

/* eslint-disable sort-keys */
FileInput.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
};
/* eslint-enable sort-keys */

FileInput.defaultProps = {
  label: 'No file chosen',
  size: 'md',
};

export default FileInput;