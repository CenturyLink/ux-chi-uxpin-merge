import * as PropTypes from 'prop-types';
import * as React from 'react';
import { SKELETON_CLASSES } from '../../constants/classes';

/**
 * @uxpincomponent
 * @uxpinwrappers
 * SkipContainerWrapper
 */

const skeletonType = (type) => {
  if (type && type === 'rounded squared') {
    return '-square -rounded';
  }

  if (type) {
    return `-${type}`;
  }

  return '';
};

function Skeleton({ size, type, uxpinRef }) {
  return (
    <div ref={uxpinRef}>
      <div
        className={`
    ${SKELETON_CLASSES.SKELETON} 
    ${skeletonType(type)}
    ${size ? `-${size}` : ''}
  `}>
      </div>
    </div>
  );
}

Skeleton.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  type: PropTypes.oneOf(['circle', 'rounded', 'rounded squared', 'square']),
};

Skeleton.defaultProps = {
  size: 'md',
  type: 'default',
};

export default Skeleton;
