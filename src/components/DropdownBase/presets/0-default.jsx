import React from 'react';
import DropdownBase from '../DropdownBase';

export default (
  <DropdownBase
    uxpId="dropdown-base"
    active={false}
    animateChevron={false}
    retainSelection={false}
    selectedItem={1}
    label="Label"
    infoPopoverTitle="Popover Title"
    infoPopoverDescription={`Line 1
Line 2
Line 3`}
    infoPopoverPosition="right-start"
    required="none"
    text="Dropdown component"
    syncTextWithSelectedItem={false}
    buttonColor="base"
    buttonType="flat"
    buttonSize="md"
    dropdownPosition="bottom-start"
    dropdownHeight="200"
  />
);
