/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { DROPDOWN_CLASSES, ICON_CLASS, RADIO_CLASSES } from '../../constants/classes';

export default function DropdownMenuItems({ retainSelection, mode, selectedItem, items }) {
  // #region Methods
  const renderBaseItem = (item, index, isActive) => {
    const baseItemClass = `${DROPDOWN_CLASSES.ITEM} ${isActive ? '-active' : ''}`;

    if (item.description) {
      return (
        <a key={`base-desc-${index}`} className={baseItemClass} href="#" slot="menu">
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
        <a key={`base-${index}`} className={baseItemClass} href="#" slot="menu">
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
        <input type="radio" name="radios" id={`radio-${index}`} className={RADIO_CLASSES.INPUT} />
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
  // #endregion

  return renderDropdownItems();
}

// #region PropTypes
DropdownMenuItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      iconLeft: PropTypes.string,
      iconRight: PropTypes.string,
      description: PropTypes.string,
      onSelect: PropTypes.func,
    })
  ),
};

DropdownMenuItems.defaultProps = {
  items: [],
};
// #endregion
