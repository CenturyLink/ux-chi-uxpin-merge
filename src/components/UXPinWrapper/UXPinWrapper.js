import React from 'react';
import './UXPinWrapper.css';

export default function UXPinWrapper({ children }) {
  const formatVersion = (version) => version.replace(/[';]/g, "");
  const chiVersion = process.env.THEME === 'portal-rebrand' ? formatVersion(process.env.CHI_REBRAND_VERSION) : formatVersion(process.env.CHI_VERSION);

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
