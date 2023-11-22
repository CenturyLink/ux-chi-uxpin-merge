import React from 'react';
import DropdownSearchItems from '../DropdownSearchItems';

export default (
  <DropdownSearchItems
    uxpId="dropdown-search-items"
    active={false}
    showSearch={false}
    animateChevron={false}
    retainSelection={false}
    visibleItems="3"
    selectedItem={1}
    item1="Item 1"
    item2="Item 2"
    item3="Item 3"
    item4="Item 4"
    item5="Item 5"
    text="Dropdown component"
    syncTextWithSelectedItem={false}
    buttonColor="base"
    buttonType="flat"
    buttonSize="md"
    dropdownPosition="bottom-start"
    dropdownHeight="200"
  />
);
