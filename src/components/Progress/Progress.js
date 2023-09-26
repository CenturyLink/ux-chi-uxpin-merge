import * as PropTypes from 'prop-types';
import * as React from 'react';
import { uuid4 } from '../../utils/utils';

const uuid = uuid4();
/* eslint-disable */
/**
 * @uxpincomponent
 */
const Progress = (props) => (
  <div>
    <div className="chi-label" id={uuid}>{props.label} {props.progress}%</div>
    <progress aria-labelledby={uuid} value={props.progress} max="100"> </progress>
  </div>
  );

Progress.propTypes = {
  label: PropTypes.string,
  progress: PropTypes.string,
};
/* eslint-enable */

export default Progress;
