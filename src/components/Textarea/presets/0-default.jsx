import React from 'react';
import Textarea from '../Textarea';

export default (
  <Textarea
    uxpId="textarea"
    size="md"
    height={1}
    label="Label"
    required="none"
    disabled={false}
    info={false}
    infoPopoverTitle="Popover Title"
    infoPopoverDescription={`Line 1
Line 2
Line 3`}
    infoPopoverPosition="right-start"
    value=""
    placeholder=""
    state="default"
    click={() => {}}
    focus={() => {}}
    focusLost={() => {}}
    input={() => {}}
    mouseDown={() => {}}
    mouseUp={() => {}}
    mouseOver={() => {}}
    mouseLeave={() => {}}
    valueChange={() => {}}
  />
);
