import * as PropTypes from 'prop-types';
import * as React from 'react';
import { uuid4 } from '../../utils/utils';

const uuid = uuid4();
/* eslint-disable */
/**
 * @uxpincomponent
 */
const Progress = (props) => {
  const { label, progress, showPercentage } = props;
  const progressDisplay = progress && showPercentage ? `${progress}%` : '';

  return (
    <div>
      <div className="chi-label" id={uuid}>
        {label} {progressDisplay}
      </div>
      <progress aria-labelledby={uuid} value={progress} max="100"></progress>
    </div>
  );
};

Progress.propTypes = {
  label: PropTypes.string,
  progress: PropTypes.string,
  showPercentage: PropTypes.bool,
};

Progress.defaultProps = {
  showPercentage: true,
};
/* eslint-enable */

export default Progress;
