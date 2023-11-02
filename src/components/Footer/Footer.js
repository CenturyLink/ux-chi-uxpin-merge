/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { uuid4 } from '../../utils/utils';
import {
  BUTTON_CLASSES,
  CHI_BRAND,
  CHI_INPUT,
  DROPDOWN_CLASSES,
  FOOTER_CLASSES,
  FORM_CLASSES,
  GENERIC_SIZES,
  ICON_CLASS,
  LIGHT_CLASS,
  LABEL_CLASSES,
  UTILITY_CLASSES,
} from '../../constants/classes';

const SOCIAL_MEDIA = [
  { link: 'https://www.twitter.com/lumentechco', label: 'Lumen on Twitter', icon: 'chi-icon icon-logo-twitter -md' },
  { link: 'https://www.linkedin.com/company/lumen-tech', label: 'Lumen on LinkedIn', icon: 'chi-icon icon-logo-linkedin -md' },
  { link: 'https://www.facebook.com/lumentechnologies', label: 'Lumen on Facebook', icon: 'chi-icon icon-logo-facebook -md' },
  { link: 'https://www.youtube.com/lumentechnologies', label: 'Lumen on YouTube', icon: 'chi-icon chi-icon icon-logo-youtube -md' }
];

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
      <div className={`${DROPDOWN_CLASSES.MENU}  ${UTILITY_CLASSES.TYPOGRAPHY.TEXT_BODY}`}>
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

  renderSocialMedia() {
    return (
      <div className={FOOTER_CLASSES.FOOTER_SOCIAL}>
        {SOCIAL_MEDIA.map(media => (
          <a key={media.link} href={media.link} aria-label={media.label} rel="noopener" target="_blank">
            <i className={media.icon} aria-hidden="true"></i>
          </a>
        ))}
      </div>
    );
  }

  render() {
    const { id } = this.state;
    const buttonId = `${id}-language-dropdown-button`;
    const isTabletSize = this.props.footerSize === 'Portrait tablet';
    const isDesktopSize =
      this.props.footerSize === "Desktop" ||
      this.props.footerSize === "Unauthenticated desktop";
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
    const unauthenticatedLinksGroups = [
      [
        { text: 'Contact Us', url: 'https://www.lumen.com/en-us/contact-us.html', newTab: false },
        { text: 'Sign in / Pay bill', url: 'https://www.centurylink.com/business/login/', newTab: true },
        { text: 'Support', url: 'https://www.lumen.com/help/en-us/home.html', newTab: true },
      ],
      [
        { text: 'About Us', url: 'https://www.lumen.com/en-us/about.html', newTab: false },
        { text: 'Investors', url: 'https://ir.lumen.com', newTab: true },
        { text: 'Newsroom', url: 'https://news.lumen.com', newTab: true },
        { text: 'Our Platform', url: 'https://www.lumen.com/en-us/about/our-platform.html', newTab: false },
        { text: 'Public Sector', url: 'https://www.lumen.com/public-sector.html', newTab: true },
        { text: 'Residential', url: 'https://www.centurylink.com/home/', newTab: true },
        { text: 'Wholesale', url: 'https://www.lumen.com/wholesale.html', newTab: true },
      ],
      [
        { text: 'Solutions', url: '#', newTab: false },
        { text: 'Adaptive Networking', url: 'https://www.lumen.com/en-us/solutions/adaptive-networking.html', newTab: false },
        { text: 'Collaboration', url: 'https://www.lumen.com/en-us/solutions/collaboration.html', newTab: false },
        { text: 'Connected Security', url: 'https://www.lumen.com/en-us/solutions/connected-security.html', newTab: false },
        { text: 'Edge Computing', url: 'https://www.lumen.com/en-us/solutions/edge-computing.html', newTab: false },
        { text: 'Hybrid Cloud', url: 'https://www.lumen.com/en-us/solutions/hybrid-cloud.html', newTab: false },
      ],
      [
        { text: 'Resources', url: '#', newTab: false },
        { text: '4th Industrial Revolution', url: 'https://www.lumen.com/en-us/about/4th-industrial-revolution.html', newTab: false },
        { text: 'Blog', url: 'https://blog.lumen.com', newTab: true },
        { text: 'Customer Portals', url: 'https://www.lumen.com/help/en-us/portals.html', newTab: true },
        { text: 'Network Maps', url: 'https://www.lumen.com/en-us/resources/network-maps.html', newTab: false },
        { text: 'Partners', url: 'https://www.lumen.com/en-us/partner.html', newTab: true },
        { text: 'Support', url: 'https://www.lumen.com/help/en-us/home.html', newTab: true },
      ]
    ];

    return (
      <footer
        id={id}
        className={FOOTER_CLASSES.FOOTER}
        style={footerStyle}>
        <div className={FOOTER_CLASSES.FOOTER_CONTENT}>
          {this.props.footerSize === "Unauthenticated desktop" && (
            <div className={FOOTER_CLASSES.FOOTER_EXTERNAL}>
              <div className={FOOTER_CLASSES.FOOTER_EXTERNAL_CONTENT}>
                <div className={FOOTER_CLASSES.FOOTER_HEADER}>
                  <div className={FOOTER_CLASSES.FOOTER_BRAND}>
                    <a href="/" className={CHI_BRAND} aria-label="Lumen">
                    <svg viewBox="0 0 140 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path fill="#000" d="M.27396667 2.00213333V17.8541333c0 .9566667.558 1.395 1.634 1.395H16.8916333c1.0363334 0 1.634-.4383333 1.634-1.395 0-.9163333-.5976666-1.3946666-1.634-1.3946666H4.01996667c-.518 0-.71733334-.239-.71733334-.7173334V2.00213333c0-.797-.59766666-1.39466666-1.51433333-1.39466666-.87666667 0-1.51433333.59766666-1.51433333 1.39466666"/>
                      <path fill="#000" d="M26.0176333 12.2995V2.00216667c0-.797-.5976666-1.395-1.5143333-1.395-.9166667 0-1.5143333.598-1.5143333 1.395V12.5785c0 6.416 3.985 7.1486667 10.8793333 7.1486667 6.894 0 10.8793333-.7326667 10.8793333-7.1486667V2.00216667c0-.797-.598-1.395-1.5143333-1.395-.9166667 0-1.5143333.598-1.5143333 1.395V12.2995c0 5.2203333-2.7896667 4.5186667-7.8506667 4.5186667s-7.8506667.622-7.8506667-4.5186667"/>
                      <path fill="#000" d="M74.2765667 5.2699v12.8236667c0 .8366666.6376666 1.3946666 1.5143333 1.3946666.9166667 0 1.5143333-.558 1.5143333-1.3946666V2.67956667c0-1.15566667-.8126666-2.07233334-1.9126666-2.07233334-1.0423334 0-1.502.59166667-2.5106667 1.51433334l-7.7313333 7.62766666H65.1109l-7.731-7.58766666C56.3882333 1.14123333 55.6362333.60723333 54.7495667.60723333c-.8863334 0-1.9526667.91666667-1.9526667 2.07233334V18.0935667c0 .8366666.6376667 1.3946666 1.5143333 1.3946666.9166667 0 1.5143334-.558 1.5143334-1.3946666V5.2299H55.9849l7.3726667 6.99c.663.6496667 1.1793333 1.1556667 1.7133333 1.1556667.671 0 1.0156667-.5276667 1.754-1.1556667l7.3323333-6.95h.1193334z"/>
                      <path fill="#0C9ED9" d="M103.845933 2.28113333c0-.91666666-.558-1.43466666-1.634-1.43466666H87.0686c-1.076 0-1.6336667.518-1.6336667 1.43466666V3.6698l16.8169997-.03366667c1.036 0 1.594-.47833333 1.594-1.355"/>
                      <path fill="#000" d="M85.4348 8.71616667v9.13800003c0 .9563333.558 1.3946666 1.634 1.3946666h15.303c1.035667 0 1.593667-.4383333 1.593667-1.3946666 0-.9166667-.558-1.3946667-1.593667-1.3946667h-13.191c-.5176667 0-.7173333-.2393333-.7173333-.7173333V11.5425h9.963c1.0756666 0 1.6336663-.4783333 1.6336663-1.395 0-.87666667-.5579997-1.39466667-1.6336663-1.39466667L85.4348 8.71616667z"/>
                      <path fill="#000" d="M132.8176 17.6948667V2.0022c0-.797-.637667-1.395-1.514667-1.395-.916666 0-1.514333.598-1.514333 1.395v12.704L114.804933 2.12153333C113.773267 1.2562 113.1996.6072 112.214267.6072c-1.080667 0-1.792667.71733333-1.792667 2.07233333V18.0935333c0 .797.637333 1.3946667 1.514 1.3946667.916667 0 1.514333-.5976667 1.514333-1.3946667V5.11053333L128.274267 17.8542c.993333.8433333 1.681666 1.634 2.710333 1.634 1.037 0 1.833-.7573333 1.833-1.7933333"/>
                      <path fill="#000" d="M137.447467 3.0801c.316333 0 .495333-.165.495333-.399 0-.26166667-.179-.39933333-.495333-.39933333h-.591667V3.0801h.591667zm-1.06-1.211h1.101333c.536667 0 .936.26133333.936.77066667 0 .399-.234333.64666666-.564667.743l.647.922h-.564333l-.578-.83933334h-.509v.83933334h-.468333V1.8691zm3.055333 1.266v-.01366667c0-1.17-.908-2.133-2.119333-2.133-1.197334 0-2.119334.977-2.119334 2.14666667v.014c0 1.16966667.908 2.133 2.119334 2.133 1.197333 0 2.119333-.97733333 2.119333-2.147zm-4.514.014v-.014c0-1.30733333 1.06-2.40833333 2.394667-2.40833333 1.349 0 2.394666 1.08733333 2.394666 2.39466666V3.1351c0 1.30733333-1.059333 2.40866667-2.394666 2.40866667-1.348667 0-2.394667-1.08766667-2.394667-2.39466667z"/>
                    </svg>
                    </a>
                  </div>
                  <div className={FOOTER_CLASSES.FOOTER_SEARCH}>
                    <div className={FORM_CLASSES.ITEM}>
                      <label className={`${LABEL_CLASSES.LABEL}} ${UTILITY_CLASSES.DISPLAY.NONE}`}  htmlFor={FOOTER_CLASSES.FOOTER_SEARCH_INPUT}>
                        Search Lumen
                      </label>
                      <input className={CHI_INPUT} type="text" placeholder="Search" id={FOOTER_CLASSES.FOOTER_SEARCH_INPUT} />
                    </div>
                  </div>
                </div>

                <div className={`${FOOTER_CLASSES.FOOTER_LINKS} ${UTILITY_CLASSES.GRID}`} >
                  {unauthenticatedLinksGroups.map((group, idx) => (
                    <div key={idx} className={`${UTILITY_CLASSES.COLUMN} -w--12 -w-md--6 -w-lg--3`}>
                      <ul className={idx === 0 || idx === 1 ? `${UTILITY_CLASSES.TYPOGRAPHY.TEXT_BOLD}` : ""}>
                        {group.map(link => (
                         <li key={link.url} className={["Solutions", "Resources"].includes(link.text) ? `${FOOTER_CLASSES.FOOTER_LINKS_TITLE}` : ""}>
                            <a href={link.url} target={link.newTab ? '_blank' : undefined}>
                              {link.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                      {idx === 0 && this.renderSocialMedia()}
                      {idx === 2 && (
                        <ul>
                          <li className={FOOTER_CLASSES.FOOTER_LINKS_TITLE}>SHOP</li>
                          <li>
                            <a href="/marketplace" target="_blank">
                              Marketplace
                            </a>
                          </li>
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

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
                        target={link.newTab ? '_blank' : undefined}
                        rel="noreferrer">
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
  footerSize: PropTypes.oneOf([
    'Desktop',
    'Portrait phone',
    'Portrait tablet',
    'Unauthenticated desktop',
  ]),
};

Footer.defaultProps = {
  footerSize: 'Desktop',
};
