import React from 'react';
import ToggleSwitch from '../Toggle-switch';

export default (
  <ToggleSwitch
    uxpId="toggle-switch"
    size="sm"
    label="Label"
    toggleLabel="Toggle Label"
    on={false}
    infoPopoverTitle="Popover Title"
    infoPopoverDescription={`Line 1
Line 2
Line 3`}
    infoPopoverPosition="right-start"
    required="none"
    disabled={false}
    info={false}
  />
);
