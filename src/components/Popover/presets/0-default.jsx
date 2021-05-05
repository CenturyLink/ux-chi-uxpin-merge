import React from 'react';
import Popover from '../Popover';

export default (
  <Popover
    uxpId="popover"
    active
    arrow
    position="bottom"
    popover={[{ title: 'Popover Title', text: 'Line 1 \nLine 2 \nLine 3' }]}
    closeButton={false}
    preventAutoHide
    portal={false}
  />
);
