import React from 'react';
import NumberInput from '../Number-input';

export default (
  <NumberInput
    uxpId="number-input"
    size="md"
    expanded={false}
    label="Label"
    required="none"
    info={false}
    infoPopoverTitle="Popover Title"
    infoPopoverDescription={`Line 1
Line 2
Line 3`}
    infoPopoverPosition="right-start"
    disabled={false}
    startValue="0"
    min={1}
    max={1}
    click={() => {}}
    focus={() => {}}
    focusLost={() => {}}
    input={() => {}}
    mouseDown={() => {}}
    mouseLeave={() => {}}
    mouseOver={() => {}}
    mouseUp={() => {}}
    valueChange={() => {}}
  />
);
