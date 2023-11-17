import React from 'react';
import './UXPinWrapper.css';
import { CHI_VERSION } from '../../constants/constants';
import { CHI, MOUSE_CONTROL } from '../../constants/classes';

export default function UXPinWrapper({ children }) {
  if (!document.getElementById('chi-css')) {
    const head = document.head || document.getElementsByTagName('head')[0];
    const chiCss = document.createElement('link');

    chiCss.setAttribute('rel', 'stylesheet');
    chiCss.setAttribute(
      'href',
      `https://assets.ctl.io/chi/${CHI_VERSION}/chi-portal.css`
    );
    chiCss.setAttribute('id', 'chi-css');
    head.appendChild(chiCss);

    const workAreaWrapper = document.getElementById('workbench-wrapper');

    if (workAreaWrapper) {
      workAreaWrapper.classList.add(CHI);
    } else {
      const body = document.body || document.getElementsByTagName('body')[0];

      body.classList.add(CHI);
    }
  }

  if (!document.getElementById('chi-js')) {
    const head = document.head || document.getElementsByTagName('head')[0];
    const chiJs = document.createElement('script');

    chiJs.setAttribute(
      'src',
      `https://assets.ctl.io/chi/${CHI_VERSION}/js/chi.js`
    );
    chiJs.setAttribute('id', 'chi-js');
    head.appendChild(chiJs);
  }

  if (!document.getElementById('chi-ce-module')) {
    const head = document.head || document.getElementsByTagName('head')[0];
    const chiCeModule = document.createElement('script');

    chiCeModule.setAttribute(
      'src',
      `https://assets.ctl.io/chi/${CHI_VERSION}/js/ce/ux-chi-ce/ux-chi-ce.esm.js`
    );
    chiCeModule.setAttribute('type', 'module');
    chiCeModule.setAttribute('id', 'chi-ce-module');

    head.appendChild(chiCeModule);
  }

  if (!document.getElementById('chi-ce-nomodule')) {
    const chiCeNomodule = document.createElement('script');
    const head = document.head || document.getElementsByTagName('head')[0];

    chiCeNomodule.setAttribute(
      'src',
      `https://assets.ctl.io/chi/${CHI_VERSION}/js/ce/ux-chi-ce/ux-chi-ce.js`
    );
    chiCeNomodule.setAttribute('nomodule', '');
    chiCeNomodule.setAttribute('id', 'chi-ce-nomodule');

    head.appendChild(chiCeNomodule);
  }

  return (
    <div className={MOUSE_CONTROL} style={{ resize: 'both' }}>
      {children}
    </div>
  );
}
