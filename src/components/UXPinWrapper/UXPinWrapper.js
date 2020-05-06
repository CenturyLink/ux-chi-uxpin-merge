// eslint-disable-next-line no-unused-vars
import React from 'react';
// import '../../assets/chi/chi.css';
// import '../../assets/chi/js/chi';

export default function UXPinWrapper({ children }) {
  if (!document.head.querySelector('#chi-css')) {
    let chiCss = document.createElement('link');
    chiCss.setAttribute('rel', 'stylesheet');
    chiCss.setAttribute('href', 'https://assets.ctl.io/chi/2.0.0/chi.css');
    chiCss.setAttribute('id', 'chi-css');
    document.head.appendChild(chiCss);
  }

  if (!document.head.querySelector('#chi-js')) {
    let chiJs = document.createElement('script');
    chiJs.setAttribute('src', 'https://assets.ctl.io/chi/2.0.0/js/chi.js');
    chiJs.setAttribute('id', 'chi-js');
    document.head.appendChild(chiJs);
  }

  if (!document.head.querySelector('#chi-ce-module')) {
    let chiCeModule = document.createElement('script');
    chiCeModule.setAttribute('src', 'https://assets.ctl.io/chi/2.0.0/js/ce/ux-chi-ce/ux-chi-ce.esm.js');
    chiCeModule.setAttribute('type', 'module');
    chiCeModule.setAttribute('id', 'chi-ce-module');
    document.head.appendChild(chiCeModule);
  }

  if (!document.head.querySelector('#chi-ce-nomodule')) {
    let chiCeNomodule = document.createElement('script');
    chiCeNomodule.setAttribute('src', 'https://assets.ctl.io/chi/2.0.0/js/ce/ux-chi-ce/ux-chi-ce.js');
    chiCeNomodule.setAttribute('nomodule', '');
    chiCeNomodule.setAttribute('id', 'chi-ce-nomodule');
    document.head.appendChild(chiCeNomodule);
  }

  return (
    <div className="chi">
      {children}
    </div>
  );
}
