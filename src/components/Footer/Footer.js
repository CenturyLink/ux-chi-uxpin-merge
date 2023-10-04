/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { uuid4 } from '../../utils/utils';
import {
  BUTTON_CLASSES, DROPDOWN_CLASSES, FOOTER_CLASSES, GENERIC_SIZES, ICON_CLASS, LIGHT_CLASS, UTILITY_CLASSES,
} from '../../constants/classes';

// eslint-disable-next-line react/prop-types
function LanguageDropdown({ isMobile, buttonId }) {
  const languages = [
    'English',
    'Español',
    'Português',
    'Français',
    'Deutsch',
    '简体中文',
    '日本語',
  ];
  const footerLanguageClass = isMobile
    ? [`${UTILITY_CLASSES.JUSTIFY.CENTER} ${UTILITY_CLASSES.WIDTH[100]} ${UTILITY_CLASSES.PADDING.RIGHT[0]} ${UTILITY_CLASSES.PADDING.BOTTOM[2]}`]
    : [];

  return (
    <div
      className={`${DROPDOWN_CLASSES.DROPDOWN} ${FOOTER_CLASSES.FOOTER_LANGUAGE} ${footerLanguageClass}`}>
      <a
        className={`${BUTTON_CLASSES.BUTTON} ${BUTTON_CLASSES.ICON_BUTTON} ${BUTTON_CLASSES.FLAT} ${LIGHT_CLASS} ${GENERIC_SIZES.SM} ${DROPDOWN_CLASSES.TRIGGER}`}
        id={buttonId}
        data-position="top-start"
        aria-label="Select your preferred language">
        <div className={BUTTON_CLASSES.CONTENT}>
          <i
            className={`${ICON_CLASS} icon-globe-network-outline`}
            aria-hidden="true">
          </i>
          <span>English</span>
        </div>
      </a>
      <div className={`${DROPDOWN_CLASSES.MENU} -w--sm ${UTILITY_CLASSES.TYPOGRAPHY.TEXT_BODY}`}>
        {languages.map((lang) => (
          <a
            key={lang}
            className={`${DROPDOWN_CLASSES.ITEM} ${lang === 'English' ? '-active' : ''}`}
            href="#">
            {lang}
          </a>
        ))}
      </div>
    </div>
  );
}

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { id: uuid4() };
  }

  componentDidMount() {
    const buttonId = `${this.state.id}-language-dropdown-button`;
    const initialize = setInterval(() => {
      if (window.chi && document.getElementById(buttonId)) {
        window.chi.dropdown(document.getElementById(buttonId));
        clearInterval(initialize);
      }
    }, 1000);
  }

  render() {
    const { id } = this.state;
    const buttonId = `${id}-language-dropdown-button`;
    const isTabletSize = this.props.footerSize === 'Portrait tablet';
    const isDesktopSize = this.props.footerSize === 'Desktop';
    const footerStyle = isDesktopSize
      ? { minWidth: '1256px' }
      : { width: isTabletSize ? '736px' : '368px' };
    const footerInternalContentStyle = isDesktopSize ? UTILITY_CLASSES.DISPLAY.FLEX_ROW : UTILITY_CLASSES.DISPLAY.FLEX_COLUMN;
    const links = [
      { url: 'https://www.lumen.com/en-us/about.html', text: 'About Us', newTab: false },
      { url: 'https://www.centurylink.com/aboutus/community/community-development/programs-for-customers-with-disabilities.html', text: 'Accessibility', newTab: false },
      { url: 'https://jobs.lumen.com', text: 'Careers', newTab: true },
      { url: 'https://www.lumen.com/en-us/contact-us.html', text: 'Contact Us', newTab: false },
      { url: '#', text: 'Cookie Settings', newTab: false },
      { url: 'https://www.centurylink.com/aboutus/legal.html', text: 'Legal', newTab: true },
      { url: 'https://www.lumen.com/en-us/about/legal/acceptable-use-policy.html', text: 'Legal Notices', newTab: true },
      { url: 'https://www.lumen.com/en-us/about/legal/privacy-notice.html', text: 'Privacy', newTab: false },
      { url: 'https://www.centurylink.com/aboutus/company-information/public-policy.html', text: 'Public Policy', newTab: true },
      { url: 'https://www.lumen.com/help/en-us/home.html', text: 'Support', newTab: true },
      { url: 'https://www.lumen.com/en-us/about/legal/commission-for-complaints-for-telecom-television-services-ccts', text: 'Canadian Ombudsman', newTab: false },
      { url: 'https://assets.lumen.com/is/content/Lumen/gender-pay-gap-report?Creativeid=b565bf28-6d55-4f86-a245-2f0eb40b91a3', text: 'Gender Pay Gap 2020 (UK)', newTab: false },
      { url: 'https://www.lumen.com/es-ar/about/legal/latam-tariffs-regulatory.html', text: 'Legal (Latin America)', newTab: false },
      { url: 'https://www.lumen.com/en-us/about/legal/de-legal-notices.html', text: 'Legal Notices (Germany)', newTab: false },
      { url: 'https://assets.lumen.com/is/content/Lumen/modern-slavery-statement-1?Creativeid=5dbb9687-e4a8-4a40-ae00-673ce51d6a80', text: 'Modern Slavery Statement 2020 (UK)', newTab: false },
      { url: 'https://www.lumen.com/en-us/about/legal/uk-tax-strategy.html', text: 'UK Tax Strategy', newTab: false },
    ];

    return (
      <footer
        id={id}
        className={FOOTER_CLASSES.FOOTER}
        style={footerStyle}>
        <div className={FOOTER_CLASSES.FOOTER_CONTENT}>
          <div className={FOOTER_CLASSES.FOOTER_INTERNAL}>
            <div
              className={`${FOOTER_CLASSES.FOOTER_INTERNAL_CONTENT} ${footerInternalContentStyle}`}>
              <LanguageDropdown
                isMobile={!isDesktopSize}
                buttonId={buttonId}
              />
              <div className={FOOTER_CLASSES.FOOTER_LINKS}>
                <ul className={footerInternalContentStyle}>
                  {links.map((link) => (
                    <li
                      key={link.url}
                      className={isDesktopSize ? '-p--0' : ''}
                      style={isDesktopSize ? {} : { padding: '0.25rem 0' }}>
                      <a
                        href={link.url}
                        target={link.newTab ? '_blank' : undefined}>
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className={FOOTER_CLASSES.FOOTER_COPYRIGHT}>
                  &copy; 2023 Lumen Technologies. All Rights Reserved. Lumen is a registered trademark in the United States, EU, and certain other countries.
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  footerSize: PropTypes.oneOf(['Desktop', 'Portrait phone', 'Portrait tablet']),
};

Footer.defaultProps = {
  footerSize: 'Desktop',
};
