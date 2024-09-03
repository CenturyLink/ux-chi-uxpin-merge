import React from 'react';
import './UXPinWrapper.css';
import { CHI_REBRAND_VERSION, CHI_VERSION } from '../../constants/constants';

export default function UXPinWrapper({ children }) {
  const chiVersion = process.env.THEME === 'portal' ? CHI_VERSION : CHI_REBRAND_VERSION ?? CHI_REBRAND_VERSION;

  if (!document.getElementById('chi-css')) {
    const chiCss = document.createElement('link');
    chiCss.setAttribute('rel', 'stylesheet');
    chiCss.setAttribute('href', `https://lib.lumen.com/chi/${chiVersion}/chi-portal.css`);
    chiCss.setAttribute('id', 'chi-css');
    document.head.appendChild(chiCss);
  }

  if (!document.getElementById('chi-js')) {
    const chiJs = document.createElement('script');
    chiJs.setAttribute('src', `https://lib.lumen.com/chi/${chiVersion}/js/chi.js`);
    chiJs.setAttribute('id', 'chi-js');
    document.head.appendChild(chiJs);
  }

  if (!document.getElementById('chi-ce-module')) {
    const chiCeModule = document.createElement('script');
    chiCeModule.setAttribute('src', `https://lib.lumen.com/chi/${chiVersion}/js/ce/ux-chi-ce/ux-chi-ce.esm.js`);
    chiCeModule.setAttribute('type', 'module');
    chiCeModule.setAttribute('id', 'chi-ce-module');
    document.head.appendChild(chiCeModule);
  }

  if (!document.getElementById('chi-ce-nomodule')) {
    const chiCeNomodule = document.createElement('script');
    chiCeNomodule.setAttribute('src', `https://lib.lumen.com/chi/${chiVersion}/js/ce/ux-chi-ce/ux-chi-ce.js`);
    chiCeNomodule.setAttribute('nomodule', '');
    chiCeNomodule.setAttribute('id', 'chi-ce-nomodule');
    document.head.appendChild(chiCeNomodule);
  }

  return (
    <div className="chi" style={{ resize: 'both' }}>
      {children}
    </div>
  );
}
