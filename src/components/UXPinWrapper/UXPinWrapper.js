// eslint-disable-next-line no-unused-vars
import React from 'react';
import './UXPinWrapper.css';

export default function UXPinWrapper({ children }) {
  if (!document.getElementById('chi-css')) {
    const chiCss = document.createElement('link');
    chiCss.setAttribute('rel', 'stylesheet');
    chiCss.setAttribute('href', 'https://assets.ctl.io/chi/3.7.0/chi.css');
    chiCss.setAttribute('id', 'chi-css');
    document.head.appendChild(chiCss);
  }

  if (!document.getElementById('chi-js')) {
    const chiJs = document.createElement('script');
    chiJs.setAttribute('src', 'https://assets.ctl.io/chi/3.7.0/js/chi.js');
    chiJs.setAttribute('id', 'chi-js');
    document.head.appendChild(chiJs);
  }

  if (!document.getElementById('chi-ce-module')) {
    const chiCeModule = document.createElement('script');
    chiCeModule.setAttribute('src', 'https://assets.ctl.io/chi/3.7.0/js/ce/ux-chi-ce/ux-chi-ce.esm.js');
    chiCeModule.setAttribute('type', 'module');
    chiCeModule.setAttribute('id', 'chi-ce-module');
    document.head.appendChild(chiCeModule);
  }

  if (!document.getElementById('chi-ce-nomodule')) {
    const chiCeNomodule = document.createElement('script');
    chiCeNomodule.setAttribute('src', 'https://assets.ctl.io/chi/3.7.0/js/ce/ux-chi-ce/ux-chi-ce.js');
    chiCeNomodule.setAttribute('nomodule', '');
    chiCeNomodule.setAttribute('id', 'chi-ce-nomodule');
    document.head.appendChild(chiCeNomodule);
  }

  /* eslint-disable */
  return (
    <div className="chi" style={{resize: 'both'}}>
      {children}
    </div>
  );
  /* eslint-enable */
}
