import React from 'react';
import './UXPinWrapper.css';
import { setChi } from '../../utils/utils';

export default function UXPinWrapper({ children }) {
  setChi(process.env.CHI_REBRAND_VERSION);

  return (
    <div className="chi" style={{ resize: 'both' }}>
      {children}
    </div>
  );
}
