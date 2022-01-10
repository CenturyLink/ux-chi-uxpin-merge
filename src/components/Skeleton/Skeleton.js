import * as PropTypes from 'prop-types';
import * as React from 'react';
import { SKELETON_CLASSES } from '../../constants/classes';

/**
 * @uxpincomponent
 */
const Skeleton = (props) => {
  const skeletonType = () => {
    if (props.type && props.type === 'rounded squared') {
      return '-square -rounded';
    }

    if (props.type) {
      return `-${props.type}`;
    }

    return '';
  };

  return (
    <div className={`
        ${SKELETON_CLASSES.SKELETON} 
        ${skeletonType()}
        ${props.size ? `-${props.size}` : ''}
      `}>
    </div>
  );
};


Skeleton.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  type: PropTypes.oneOf(['circle', 'rounded', 'rounded squared', 'square']),
};

Skeleton.defaultProps = {};

export default Skeleton;
