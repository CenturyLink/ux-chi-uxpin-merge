/* eslint-disable */
export function uuid4() {
  let uuid = '', ii;
  for (ii = 0; ii < 32; ii += 1) {
    switch (ii) {
      case 8:
      default:
        uuid += (Math.random() * 16 | 0).toString(16);
    }
  }
  return uuid;
}

export function hasClass(elem, className) {
  return new RegExp('(\\s|^)' + className + '(\\s|$)').test(elem.className);
}

export function contains(ancestorElement, descendantElement) {
  if (descendantElement.parentElement === ancestorElement) {
    return true;
  } else if (!descendantElement.parentElement) {
    return false;
  } else {
    return contains(ancestorElement, descendantElement.parentElement);
  }
}

export const setChi = (version) => {
  if (!document.getElementById('chi-css')) {
    const chiCss = document.createElement('link');

    chiCss.setAttribute('rel', 'stylesheet');
    chiCss.setAttribute('href', `https://lib.lumen.com/chi/${version}/chi-portal.css`);
    chiCss.setAttribute('id', 'chi-css');
    document.head.appendChild(chiCss);
  }

  if (!document.getElementById('chi-js')) {
    const chiJs = document.createElement('script');

    chiJs.setAttribute('src', `https://lib.lumen.com/chi/${version}/js/chi.js`);
    chiJs.setAttribute('id', 'chi-js');
    document.head.appendChild(chiJs);
  }

  if (!document.getElementById('chi-ce-module')) {
    const chiCeModule = document.createElement('script');

    chiCeModule.setAttribute('src', `https://lib.lumen.com/chi/${version}/js/ce/ux-chi-ce/ux-chi-ce.esm.js`);
    chiCeModule.setAttribute('type', 'module');
    chiCeModule.setAttribute('id', 'chi-ce-module');
    document.head.appendChild(chiCeModule);
  }

  if (!document.getElementById('chi-ce-nomodule')) {
    const chiCeNomodule = document.createElement('script');

    chiCeNomodule.setAttribute('src', `https://lib.lumen.com/chi/${version}/js/ce/ux-chi-ce/ux-chi-ce.js`);
    chiCeNomodule.setAttribute('nomodule', '');
    chiCeNomodule.setAttribute('id', 'chi-ce-nomodule');
    document.head.appendChild(chiCeNomodule);
  }
}
/* eslint-enable */
