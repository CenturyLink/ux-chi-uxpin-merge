import React from 'react';
import DropdownBaseWc from '../DropdownBaseWc';

export default (
  <DropdownBaseWc
    uxpId="dropdown-base-wc"
    active={false}
    info={false}
    animateChevron={false}
    retainSelection={false}
    selectedItem={1}
    infoPopoverTitle="Popover Title"
    infoPopoverDescription={`Line 1
Line 2
Line 3`}
    infoPopoverPosition="right-start"
    required="none"
    text="Dropdown component"
    syncTextWithSelectedItem={false}
    dropdownPosition="bottom-start"
    buttonType="flat"
  />
);
