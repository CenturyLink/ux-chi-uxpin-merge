import React from 'react';
import TextInput from '../Text-input';

export default (
  <TextInput
    uxpId="text-input"
    size="md"
    label="Label"
    required="none"
    disabled={false}
    info={false}
    infoPopoverTitle="Popover Title"
    infoPopoverDescription={`Line 1
Line 2
Line 3`}
    infoPopoverPosition="right-start"
    helperMessage={false}
    helperMessageText="Optional helper message"
    placeholder=""
    value=""
    iconLeft=""
    iconLeftColor="primary"
    iconRight=""
    iconRightColor="primary"
    state="default"
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
