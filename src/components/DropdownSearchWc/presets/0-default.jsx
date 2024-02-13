import React from 'react';
import DropdownSearchWc from '../DropdownSearchWc';

export default (
  <DropdownSearchWc
    uxpId="dropdown-search-wc"
    info={false}
    animateChevron={false}
    showSearch={false}
    visibleItems="3"
    selectedItem={1}
    infoPopoverTitle="Popover Title"
    infoPopoverDescription={`Line 1
Line 2
Line 3`}
    infoPopoverPosition="right-start"
    required="none"
    item1="Item 1"
    item2="Item 2"
    item3="Item 3"
    item4="Item 4"
    item5="Item 5"
    dropdownPosition="bottom-start"
    buttonColor="base"
    buttonType="flat"
    buttonSize="md"
  />
);
