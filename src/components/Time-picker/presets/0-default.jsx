import React from 'react';
import TimePicker from '../Time-picker';

export default (
  <TimePicker
    uxpId="time-picker"
    disabled={false}
    label="Label"
    required="none"
    active={false}
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
