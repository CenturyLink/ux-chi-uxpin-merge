/* eslint-disable */
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Label from '../Label/Label';
import { DROPDOWN_CLASSES, ICON_CLASS, LABEL_CLASSES, RADIO_CLASSES } from '../../constants/classes';

export default function CommonDropdownMenu({
  fieldLabel,
  active,
  animateChevron,
  text,
  retainSelection = true,
  mode,
  showButton = true,
  preventAutoHide,
  buttonColor,
  buttonType,
  buttonSize,
  disabled,
  dropdownPosition,
  required,
  info,
  infoPopoverTitle,
  infoPopoverDescription,
  infoPopoverPosition,
  selectedItem,
  syncTextWithSelectedItem,
  items,
}) {
  const dropdownRef = useRef(null);

  const [buttonText, setButtonText] = useState(text);

  // #region Methods
  const handleItemClick = (itemTitle, itemDescription) => {
    return (e) => {
      e.preventDefault();

      if (syncTextWithSelectedItem && !itemDescription) {
        setButtonText(itemTitle);
      }

      if (mode === 'base' && dropdownRef.current) {
        dropdownRef.current.hide();
      }
    };
  };

  const renderBaseItem = (item, index, isActive) => {
    const baseItemClass = `${DROPDOWN_CLASSES.ITEM} ${isActive ? '-active' : ''}`;

    if (item.description) {
      return (
        <a
          key={`base-desc-${index}`}
          className={baseItemClass}
          href="#"
          slot="menu"
          onClick={() => handleItemClick(item.title, item.description)}>
          <span className={DROPDOWN_CLASSES.ITEM_TITLE} slot="menu">
            {item.title}
          </span>
          <span className={DROPDOWN_CLASSES.ITEM_DESCRIPTION} slot="menu">
            {item.description}
          </span>
        </a>
      );
    } else {
      return (
        <a
          key={`base-${index}`}
          className={baseItemClass}
          href="#"
          slot="menu"
          onClick={() => handleItemClick(item.title, item.description)}>
          {item.iconLeft && <i className={`${ICON_CLASS} icon-${item.iconLeft}`} aria-hidden="true"></i>}
          {item.title}
          {item.iconRight && <i className={`${ICON_CLASS} icon-${item.iconRight}`} aria-hidden="true"></i>}
        </a>
      );
    }
  };

  const renderCheckboxItem = (item, index) => (
    <div key={`checkbox-${index}`} className={DROPDOWN_CLASSES.ITEM} slot="menu">
      <chi-checkbox id={`checkbox-${index}`} label={item.title}></chi-checkbox>
    </div>
  );

  const renderRadioItem = (item, index) => (
    <div key={`radio-${index}`} className={DROPDOWN_CLASSES.ITEM} slot="menu">
      <div className={RADIO_CLASSES.RADIO}>
        <input
          type="radio"
          name="radios"
          id={`radio-${index}`}
          className={RADIO_CLASSES.INPUT}
          onClick={() => handleItemClick(item)}
        />
        <label className={RADIO_CLASSES.LABEL} htmlFor={`radio-${index}`}>
          {item.title}
        </label>
      </div>
    </div>
  );

  const renderDropdownItems = () => {
    return items.map((item, index) => {
      const isActive = mode === 'base' && retainSelection && selectedItem === index + 1;

      switch (mode) {
        case 'base':
          return renderBaseItem(item, index, isActive);
        case 'checkbox':
          return renderCheckboxItem(item, index);
        case 'radio':
          return renderRadioItem(item, index);
        default:
          return null;
      }
    });
  };

  const hasItemDescription = () => {
    return items.some((item) => item.description);
  };
  // #endregion

  useEffect(() => {
    if (!syncTextWithSelectedItem) {
      setButtonText(text);
    }
  }, [text, syncTextWithSelectedItem]);

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

  return (
    <div className={DROPDOWN_CLASSES.DROPDOWN}>
      <div className={LABEL_CLASSES.WRAPPER}>{labelElement}</div>
      <chi-dropdown
        id={`dropdown-${active ? 'active' : 'default'}`}
        ref={dropdownRef}
        key={mode}
        active={active}
        animate-chevron={animateChevron}
        button={showButton ? buttonText : undefined}
        prevent-auto-hide={preventAutoHide}
        color={buttonColor}
        description={hasItemDescription()}
        disabled={disabled}
        position={dropdownPosition}
        size={buttonSize}
        variant={buttonType}>
        {renderDropdownItems()}
      </chi-dropdown>
    </div>
  );
}

// #region PropTypes
CommonDropdownMenu.propTypes = {
  fieldLabel: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      iconLeft: PropTypes.string,
      iconRight: PropTypes.string,
      description: PropTypes.string,
      onSelect: PropTypes.func,
    })
  ),
  active: PropTypes.bool,
  animateChevron: PropTypes.bool,
  text: PropTypes.string,
  retainSelection: PropTypes.bool,
  mode: PropTypes.oneOf(['base', 'checkbox', 'radio']),
  syncTextWithSelectedItem: PropTypes.bool,
  showButton: PropTypes.bool,
  preventAutoHide: PropTypes.bool,
  buttonColor: PropTypes.oneOf(['primary', 'dark', 'secondary', 'light']),
  buttonType: PropTypes.oneOf(['solid', 'outline', 'flat']),
  buttonSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  disabled: PropTypes.bool,
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
  required: PropTypes.oneOf(['none', 'required', 'optional']),
  info: PropTypes.bool,
  infoPopoverTitle: PropTypes.string,
  /**
   * @uxpinpropname text
   * @uxpincontroltype textfield(10)
   * */
  infoPopoverDescription: PropTypes.string,
  infoPopoverPosition: PropTypes.oneOf(['right-start', 'top']),
  selectedItem: PropTypes.oneOf(['None', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
};

CommonDropdownMenu.defaultProps = {
  items: [],
  active: false,
  mode: 'base',
  showButton: true,
  preventAutoHide: undefined,
  syncTextWithSelectedItem: false,
  selectedItem: 1,
  text: 'Dropdown component',
};
// #endregion
