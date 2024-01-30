import React from 'react';
import CommonDropdownMenu from '../CommonDropdownMenu';

export default (
  <CommonDropdownMenu
    uxpId="commmon-dropdown-wc"
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
    syncTextWithSelectedItem={false}
    dropdownPosition="bottom-start"
    buttonType="flat"
  />
);
