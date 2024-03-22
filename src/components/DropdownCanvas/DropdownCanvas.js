import React from 'react';
import PropTypes from 'prop-types';
import { ACTIVE_CLASS, DROPDOWN_CLASSES, UTILITY_CLASSES } from '../../constants/classes';

/**
 * @uxpincomponent
 */
export default function DropdownCanvas(props) {
  const { width, height } = props;

  const menuDimensions = {
    width: `${width}px`,
    height: `${height}px`,
  };

  return (
    <div
      className={`${DROPDOWN_CLASSES.MENU} ${ACTIVE_CLASS} ${UTILITY_CLASSES.Z_INDEX.Z_10}`}
      style={menuDimensions}
    ></div>
  );
}

// #region PropTypes
DropdownCanvas.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

DropdownCanvas.defaultProps = {
  width: 300,
  height: 300,
};
// #endregion
