/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import DropdownMenuItems from '../DropdownMenuItems/DropdownMenuItems';

/**
 * @uxpincomponent
 */
export default function DropdownMenuWc(props) {
  const { active, retainSelection, scrollItems, selectedItem, mode, preventAutoHide, showButton } = props;

  // #region Methods
  const createDropdownItems = (props) => {
    const items = [];
    for (let i = 1; i <= 10; i++) {
      const title = props[`item${i}`];
      if (title) {
        items.push({
          title,
          iconLeft: props[`iconLeft${i}`],
          iconRight: props[`iconRight${i}`],
          description: props[`item${i}Description`],
          onSelect: props[`select${i}`],
        });
      }
    }
    return items;
  };

  const items = createDropdownItems(props);

  const handleSelect = (item, index) => {
    if (items[index].onSelect) {
      items[index].onSelect(item);
    }
  };
  // #endregion

  return (
    <DropdownMenuItems
      active={active}
      retainSelection={retainSelection}
      selectedItem={selectedItem}
      mode={mode}
      preventAutoHide={preventAutoHide}
      showButton={showButton}
      items={items}
      onSelect={handleSelect}
      scrollItems={scrollItems}
    />
  );
}

// #region PropTypes
DropdownMenuWc.propTypes = {
  active: PropTypes.bool,
  retainSelection: PropTypes.bool,
  scrollItems: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  selectedItem: PropTypes.oneOf(['None', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  mode: PropTypes.oneOf(['base', 'checkbox', 'radio']),
  /** @uxpinignoreprop */
  showButton: PropTypes.bool,
  /** @uxpinignoreprop */
  preventAutoHide: PropTypes.bool,
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
  select1: PropTypes.func,
  select2: PropTypes.func,
  select3: PropTypes.func,
  select4: PropTypes.func,
  select5: PropTypes.func,
  select6: PropTypes.func,
  select7: PropTypes.func,
  select8: PropTypes.func,
  select9: PropTypes.func,
  select10: PropTypes.func,
};

DropdownMenuWc.defaultProps = {
  mode: 'base',
  showButton: false,
  active: true,
  retainSelection: false,
  preventAutoHide: true,
  selectedItem: 1,
};
// #endregion
