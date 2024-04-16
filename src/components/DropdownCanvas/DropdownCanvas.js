import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Label from '../Label/Label';
import { DROPDOWN_CLASSES, LABEL_CLASSES, UTILITY_CLASSES } from '../../constants/classes';

/**
 * @uxpincomponent
 */
export default function DropdownCanvas(props) {
  const {
    width,
    height,
    active,
    animateChevron,
    buttonColor,
    buttonSize,
    buttonType,
    disabled,
    dropdownPosition,
    fieldLabel,
    fluid,
    info,
    infoPopoverTitle,
    infoPopoverDescription,
    infoPopoverPosition,
    required,
    text,
  } = props;

  const color = buttonColor === 'base' ? '' : buttonColor;
  const dropdownRef = useRef(null);
  const labelElement = fieldLabel && (
    <Label
      required={required}
      label={fieldLabel}
      info={info}
      infoPopoverTitle={infoPopoverTitle}
      infoPopoverDescription={infoPopoverDescription}
      infoPopoverPosition={infoPopoverPosition}
    />
  );

  const menuDimensions = {
    width: `${width}px`,
    height: `${height}px`,
  };

  return (
    <div ref={props.uxPinRef} className={`${UTILITY_CLASSES.WIDTH[100]}`}>
      <div className={LABEL_CLASSES.WRAPPER}>{labelElement}</div>
      <chi-dropdown
        ref={dropdownRef}
        active={active}
        animate-chevron={animateChevron}
        button={text}
        color={color}
        disabled={disabled}
        variant={buttonType}
        fluid={fluid}
        position={dropdownPosition}
        size={buttonSize}
      >
        <div
          className={`${DROPDOWN_CLASSES.ITEM} ${UTILITY_CLASSES.Z_INDEX.Z_10}`}
          style={menuDimensions}
          slot="menu"
        ></div>
      </chi-dropdown>
    </div>
  );
}

// #region PropTypes
DropdownCanvas.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fieldLabel: PropTypes.string,
  active: PropTypes.bool,
  animateChevron: PropTypes.bool,
  text: PropTypes.string,
  buttonColor: PropTypes.oneOf(['base', 'primary', 'secondary', 'danger', 'dark', 'light']),
  buttonType: PropTypes.oneOf(['solid', 'outline', 'flat']),
  buttonSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  disabled: PropTypes.bool,
  fluid: PropTypes.bool,
  required: PropTypes.oneOf(['none', 'required', 'optional']),
  info: PropTypes.bool,
  infoPopoverTitle: PropTypes.string,
  /**
   * @uxpinpropname text
   * @uxpincontroltype textfield(10)
   * */
  infoPopoverDescription: PropTypes.string,
  infoPopoverPosition: PropTypes.oneOf(['right-start', 'top']),
  dropdownPosition: PropTypes.oneOf([
    'top-start',
    'top',
    'top-end',
    'left-start',
    'left',
    'left-end',
    'right-start',
    'right',
    'right-end',
    'bottom-start',
    'bottom',
    'bottom-end',
  ]),
  onButtonClick: PropTypes.func,
};

DropdownCanvas.defaultProps = {
  width: 300,
  height: 300,
  active: true,
  text: 'Dropdown component',
  dropdownPosition: 'bottom-start',
  fluid: true,
};
// #endregion
