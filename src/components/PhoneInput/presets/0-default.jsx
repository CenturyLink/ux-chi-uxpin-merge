import React from 'react';
import PhoneInput from '../PhoneInput';

export default (
  <PhoneInput
    uxpId="phoneInput"
    countryCode="1"
    click={() => {}}
    info={false}
    infoPopoverTitle="Popover Title"
    infoPopoverDescription={`Line 1
Line 2
Line 3`}
    infoPopoverPosition="right-start"
    label="Phone Number"
    mouseLeave={() => {}}
    mouseOver={() => {}}
    input={() => {}}
    required="none"
    size="md"
    valueChange={() => {}}
  />
);
