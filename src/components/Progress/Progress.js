import * as PropTypes from 'prop-types';
import * as React from 'react';
import { uuid4 } from '../../utils/utils';

const uuid = uuid4();
/* eslint-disable */
/**
 * @uxpincomponent
 */
const Progress = (props) => {
  const { label, progress } = props;
  const progressDisplay = progress ? `${progress}%` : '';

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
};
/* eslint-enable */

export default Progress;
