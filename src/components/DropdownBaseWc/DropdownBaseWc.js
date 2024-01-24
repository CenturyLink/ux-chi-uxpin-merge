/* eslint-disable */
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Label from '../Label/Label';
import { DROPDOWN_CLASSES, ICON_CLASS, LABEL_CLASSES, RADIO_CLASSES, UTILITY_CLASSES } from '../../constants/classes';

/**
 * @uxpincomponent
 */
function DropdownBaseWc({
  fieldLabel,
  active,
  animateChevron,
  text,
  retainSelection,
  mode,
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
  ...itemProps
}) {
  const dropdownRef = useRef(null);

  const [buttonText, setButtonText] = useState(text);

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

  const renderDropdownItems = () => {
    return Array.from({ length: 10 }, (_, index) => {
      const itemIndex = index + 1;
      const itemKey = `item${itemIndex}`;
      const itemTitle = itemProps[itemKey];
      if (!itemTitle) return null;

      const itemDescription = itemProps[`${itemKey}Description`];
      const iconLeft = itemProps[`iconLeft${itemIndex}`] ? `icon-${itemProps[`iconLeft${itemIndex}`]}` : '';
      const iconRight = itemProps[`iconRight${itemIndex}`] ? `icon-${itemProps[`iconRight${itemIndex}`]}` : '';
      const isActive = retainSelection && selectedItem === itemIndex;
      const activeClass = isActive ? '-active' : '';

      if (mode === 'checkbox') {
        return (
          <div key={`checkbox-wc-${itemKey}`} className={DROPDOWN_CLASSES.ITEM} slot="menu">
            <chi-checkbox id={`checkbox${itemIndex}`} label={itemTitle}></chi-checkbox>
          </div>
        );
      } else if (mode === 'radio') {
        return (
          <div key={`radio-wc-${itemKey}`} className={DROPDOWN_CLASSES.ITEM} slot="menu">
            <div className={RADIO_CLASSES.RADIO}>
              <input
                className={RADIO_CLASSES.INPUT}
                type="radio"
                name="radios"
                id={`radio-wc-${itemIndex}`}
                onClick={handleItemClick(itemTitle, itemDescription)}
              />
              <label className={RADIO_CLASSES.LABEL} htmlFor={`radio-wc-${itemIndex}`}>
                {itemTitle}
              </label>
            </div>
          </div>
        );
      } else {
        // Handling the default mode with and without item descriptions
        if (!itemDescription) {
          return (
            <a
              key={`base-${itemKey}`}
              className={`${DROPDOWN_CLASSES.ITEM} ${activeClass}`}
              href="#"
              slot="menu"
              onClick={handleItemClick(itemTitle, itemDescription)}>
              {iconLeft && <i className={`${ICON_CLASS} ${iconLeft}`} aria-hidden="true"></i>}
              {itemTitle}
              {iconRight && (
                <i className={`${ICON_CLASS} ${iconRight} ${UTILITY_CLASSES.PADDING.LEFT[2]}`} aria-hidden="true"></i>
              )}
            </a>
          );
        } else {
          return (
            <a
              key={`base-desc-${itemKey}`}
              className={`${DROPDOWN_CLASSES.ITEM} ${activeClass}`}
              href="#"
              slot="menu"
              onClick={handleItemClick(itemTitle, itemDescription)}>
              <span className={DROPDOWN_CLASSES.ITEM_TITLE} slot="menu">
                {itemTitle}
              </span>
              <span className={DROPDOWN_CLASSES.ITEM_DESCRIPTION} slot="menu">
                {itemDescription}
              </span>
            </a>
          );
        }
      }
    }).filter(Boolean);
  };

  const hasItemDescription = () => {
    return Array.from({ length: 10 }).some((_, index) => {
      const itemIndex = index + 1;
      const itemDescriptionKey = `item${itemIndex}Description`;
      return Boolean(itemProps[itemDescriptionKey]);
    });
  };

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
        button={buttonText}
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

DropdownBaseWc.propTypes = {
  fieldLabel: PropTypes.string,
  active: PropTypes.bool,
  animateChevron: PropTypes.bool,
  text: PropTypes.string,
  retainSelection: PropTypes.bool,
  mode: PropTypes.oneOf(['base', 'checkbox', 'radio']),
  syncTextWithSelectedItem: PropTypes.bool,
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
  buttonClick: PropTypes.func,
  selectedItem: PropTypes.oneOf(['None', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  item1: PropTypes.string,
  item2: PropTypes.string,
  item3: PropTypes.string,
  item4: PropTypes.string,
  item5: PropTypes.string,
  item6: PropTypes.string,
  item7: PropTypes.string,
  item8: PropTypes.string,
  item9: PropTypes.string,
  item10: PropTypes.string,
  iconLeft1: PropTypes.string,
  iconRight1: PropTypes.string,
  iconLeft2: PropTypes.string,
  iconRight2: PropTypes.string,
  iconLeft3: PropTypes.string,
  iconRight3: PropTypes.string,
  iconLeft4: PropTypes.string,
  iconRight4: PropTypes.string,
  iconLeft5: PropTypes.string,
  iconRight5: PropTypes.string,
  iconLeft6: PropTypes.string,
  iconRight6: PropTypes.string,
  iconLeft7: PropTypes.string,
  iconRight7: PropTypes.string,
  iconLeft8: PropTypes.string,
  iconRight8: PropTypes.string,
  iconLeft9: PropTypes.string,
  iconRight9: PropTypes.string,
  iconLeft10: PropTypes.string,
  iconRight10: PropTypes.string,
  item1Description: PropTypes.string,
  item2Description: PropTypes.string,
  item3Description: PropTypes.string,
  item4Description: PropTypes.string,
  item5Description: PropTypes.string,
  item6Description: PropTypes.string,
  item7Description: PropTypes.string,
  item8Description: PropTypes.string,
  item9Description: PropTypes.string,
  item10Description: PropTypes.string,
};

DropdownBaseWc.defaultProps = {
  active: false,
  mode: 'base',
  syncTextWithSelectedItem: false,
  selectedItem: 1,
  retainSelection: false,
  text: 'Dropdown component',
};

export default DropdownBaseWc;
