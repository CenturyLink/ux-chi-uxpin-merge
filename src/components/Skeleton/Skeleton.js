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

const getStyles = (size, type, customSize) => {
  if (size !== 'custom') return {};

  const typesWithWidth = ['circle', 'rounded squared', 'square'];

  return {
    height: `${customSize}px`,
    width: typesWithWidth.includes(type) ? `${customSize}px` : undefined,
    borderRadius: type === 'circle' ? '50%' : undefined,
  };
};

function Skeleton({ size, type, customSize, uxpinRef }) {
  return (
    <div ref={uxpinRef}>
      <div
        style={getStyles(size, type, customSize)}
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
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'custom']),
  type: PropTypes.oneOf(['circle', 'rounded', 'rounded squared', 'square']),
  /**
   * @uxpinpropname Custom Size
   * */
  customSize: PropTypes.number,
};

Skeleton.defaultProps = {
  size: 'md',
  type: 'default',
  customSize: 50,
};

export default Skeleton;
