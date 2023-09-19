import React from 'react';
import Label from '../Label';

export default (
  <Label
    uxpId="label"
    size="md"
    label="Label"
    required="none"
    info={false}
    infoPopoverTitle="Popover Title"
    infoPopoverDescription={`Line 1
Line 2
Line 3`}
    infoPopoverPosition="right-start"
    click={() => {}}
    mouseDown={() => {}}
    mouseLeave={() => {}}
    mouseOver={() => {}}
    mouseUp={() => {}}
  />
);
