import React from 'react';
import DropdownBaseWc from '../DropdownBaseWc';

export default (
  <DropdownBaseWc
    uxpId="dropdown-base-wc"
    info={false}
    fluid
    selectedItem={1}
    animateChevron={false}
    infoPopoverTitle="Popover Title"
    infoPopoverDescription={`Line 1
Line 2
Line 3`}
    infoPopoverPosition="right-start"
    required="none"
    dropdownPosition="bottom-start"
    buttonColor="base"
    buttonType="flat"
    buttonSize="md"
  />
);
