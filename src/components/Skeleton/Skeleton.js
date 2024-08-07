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

const getStyles = () => {
  switch (type) {
    case 'circle':
      return {
        height: `${height}px`,
        width: `${height}px`,
        borderRadius: '50%',
      };
    case 'rounded':
      return {
        height: `${height}px`,
      };
    case 'rounded squared':
      return {
        height: `${height}px`,
        width: `${height}px`,
      };
    case 'square':
      return {
        height: `${height}px`,
        width: `${height}px`,
      };
    default:
      return {
        height: `${height}px`,
      };
  }
};

function Skeleton({ size, type, height, uxpinRef }) {
  return (
    <div ref={uxpinRef}>
      <div
        style={getStyles()}
        className={`
    ${SKELETON_CLASSES.SKELETON} 
    ${skeletonType(type)}
    ${size ? `-${size}` : ''}
  `}
      ></div>
    </div>
  );
}

Skeleton.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  type: PropTypes.oneOf(['circle', 'rounded', 'rounded squared', 'square']),
  height: PropTypes.number,
};

Skeleton.defaultProps = {
  size: 'md',
  type: 'default',
};

export default Skeleton;
