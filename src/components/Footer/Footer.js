/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { uuid4 } from '../../utils/utils';
import Brand from '../Brand/Brand';
import Icon from '../Icon/Icon';
import SearchInput from '../Search-input/Search-input';
import Text from '../Text/Text';
import {
  BUTTON_CLASSES,
  DROPDOWN_CLASSES,
  FOOTER_CLASSES,
  FORM_CLASSES,
  GENERIC_SIZES,
  LIGHT_CLASS,
  UTILITY_CLASSES,
} from '../../constants/classes';

const SOCIAL_MEDIA = [
  { link: 'https://www.twitter.com/lumentechco', label: 'Lumen on Twitter', icon: 'logo-twitter' },
  { link: 'https://www.linkedin.com/company/lumen-tech', label: 'Lumen on LinkedIn', icon: 'logo-linkedin' },
  { link: 'https://www.facebook.com/lumentechnologies', label: 'Lumen on Facebook', icon: 'logo-facebook' },
  { link: 'https://www.youtube.com/lumentechnologies', label: 'Lumen on YouTube', icon: 'logo-youtube' }
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
          <Icon
            icon="globe-network-outline"
            color="light"
          >
          </Icon>
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

  renderFooterHeader() {
    return (
      <div className={FOOTER_CLASSES.FOOTER_HEADER}>
        <Brand 
          size="md (20px)"
          color="default"
        />
        <div className={FOOTER_CLASSES.FOOTER_SEARCH}>
          <div className={FORM_CLASSES.ITEM}>
            <SearchInput placeholder="Search"></SearchInput>
          </div>
        </div>
      </div>
    );
  }

  renderSocialMedia() {
    return (
      <div className={FOOTER_CLASSES.FOOTER_SOCIAL}>
        {SOCIAL_MEDIA.map(media => (
          <a key={media.link} href={media.link} aria-label={media.label} rel="noopener" target="_blank">
            <Icon
              icon={media.icon}
              size="md"
            />
          </a>
        ))}
      </div>
    );
  }

  renderShopSection() {
    const marketplaceLink = "https://www.lumen.com/en-us/marketplace.html";
    return (
      <ul>
        <li className={FOOTER_CLASSES.FOOTER_LINKS_TITLE}>SHOP</li>
        <li>
          <chi-link href={marketplaceLink} target="_blank">
            Marketplace
          </chi-link>
        </li>
      </ul>
    );
  }

  renderLinkItem(link, index) {
    const isHeading = link.isHeading || ["Solutions", "Resources"].includes(link.text);
    return (
      <li
        key={link.url + index}
        className={isHeading ? FOOTER_CLASSES.FOOTER_LINKS_TITLE : ""}
      >
        {isHeading ? (
          <Text
            text={link.text}
            weight="bold"
          >
          </Text>
        ) : (
          <chi-link
            href={link.url}
            target={link.newTab ? '_blank' : undefined}
            rel={link.newTab ? 'noopener noreferrer' : undefined}
          >
            {link.text}
          </chi-link>
        )}
      </li>
    );
  }

  render() {
    const { id } = this.state;
    const buttonId = `${id}-language-dropdown-button`;
    const isTabletSize = this.props.footerSize === 'Portrait tablet';
    const isDesktopSize =
      this.props.footerSize === "Desktop" ||
      this.props.footerSize === "Desktop - Unauthenticated";
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
        { text: 'Solutions', isHeading: true },,
        { text: 'Adaptive Networking', url: 'https://www.lumen.com/en-us/solutions/adaptive-networking.html', newTab: false },
        { text: 'Collaboration', url: 'https://www.lumen.com/en-us/solutions/collaboration.html', newTab: false },
        { text: 'Connected Security', url: 'https://www.lumen.com/en-us/solutions/connected-security.html', newTab: false },
        { text: 'Edge Computing', url: 'https://www.lumen.com/en-us/solutions/edge-computing.html', newTab: false },
        { text: 'Hybrid Cloud', url: 'https://www.lumen.com/en-us/solutions/hybrid-cloud.html', newTab: false },
      ],
      [
        { text: 'Resources', isHeading: true },
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
          {this.props.footerSize === "Desktop - Unauthenticated" && (
            <div className={FOOTER_CLASSES.FOOTER_EXTERNAL}>
              <div className={FOOTER_CLASSES.FOOTER_EXTERNAL_CONTENT}>
                {this.renderFooterHeader()}
                <div className={`${FOOTER_CLASSES.FOOTER_LINKS} ${UTILITY_CLASSES.GRID}`} >
                  {unauthenticatedLinksGroups.map((group, idx) => (
                    <div key={idx} className={`${UTILITY_CLASSES.COLUMN} ${UTILITY_CLASSES.WIDTH[12]} ${UTILITY_CLASSES.WIDTH.MD[6]} ${UTILITY_CLASSES.WIDTH.LG[3]}`}>
                      <ul className={idx === 0 || idx === 1 ? UTILITY_CLASSES.TYPOGRAPHY.TEXT_BOLD : ""}>
                        {group.map((link, index) => this.renderLinkItem(link, index))}
                      </ul>
                      {idx === 0 && this.renderSocialMedia()}
                      {idx === 2 && this.renderShopSection()}
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
                      <chi-link
                        href={link.url}
                        target={link.newTab ? '_blank' : undefined}
                        rel="noreferrer"
                      >
                        {link.text}
                      </chi-link>
                    </li>
                  ))}
                </ul>
                <div className={FOOTER_CLASSES.FOOTER_COPYRIGHT}> 
                  <Text
                    text="&copy; 2023 Lumen Technologies. All Rights Reserved. Lumen is a registered trademark in the United States, EU, and certain other countries."
                    color="light"
                    size="xs"
                  >
                  </Text>
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
    'Desktop - Unauthenticated',
  ]),
};

Footer.defaultProps = {
  footerSize: 'Desktop',
};
