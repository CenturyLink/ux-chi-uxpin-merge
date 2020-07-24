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
    <div className="chi-label" id={uuid}>{props.progress}%</div>
    <progress aria-labelledby={uuid} className={props.state ? `-${props.state}` : ''} value={props.progress} max="100"> </progress>
  </div>
  );

Progress.propTypes = {
  progress: PropTypes.string,
  state: PropTypes.oneOf(['success', 'warning', 'danger']),
};
/* eslint-enable */

Progress.defaultProps = {
  progress: 50,
};

export default Progress;
