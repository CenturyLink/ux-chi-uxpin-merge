import React from 'react';
import DatePicker from '../Date-picker';

export default (
  <DatePicker
    uxpId="date-picker"
    disabled={false}
    label="Label"
    required="none"
    mode="date"
    format="MM/DD/YYYY"
    min=""
    max=""
    selected=""
    info={false}
    infoPopoverTitle="Popover Title"
    infoPopoverDescription={`Line 1
Line 2
Line 3`}
    infoPopoverPosition="right-start"
    mo
    tu
    we
    th
    fr
    sa
    su
    dates=""
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
