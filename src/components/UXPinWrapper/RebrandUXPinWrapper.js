import React from 'react';
import './UXPinWrapper.css';
import { CHI_REBRAND_VERSION } from '../../constants/constants';
import { setChi } from '../../utils/utils';

export default function UXPinWrapper({ children }) {
  setChi(CHI_REBRAND_VERSION);

  return (
    <div className="chi" style={{ resize: 'both' }}>
      {children}
    </div>
  );
}
