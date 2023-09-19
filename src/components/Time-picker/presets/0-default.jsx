import React from 'react';
import TimePicker from '../Time-picker';

export default (
  <TimePicker
    uxpId="time-picker"
    disabled={false}
    label="Label"
    required="none"
    active={false}
    info={false}
    infoPopoverTitle="Popover Title"
    infoPopoverDescription={`Line 1
Line 2
Line 3`}
    infoPopoverPosition="right-start"
    displaySeconds={false}
    format="12hr"
    value=""
    click={() => {}}
    focus={() => {}}
    focusLost={() => {}}
    input={() => {}}
    timeChange={() => {}}
  />
);
