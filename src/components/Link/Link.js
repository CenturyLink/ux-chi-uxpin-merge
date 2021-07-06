/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as PropTypes from 'prop-types';
import * as React from 'react';

export default class Link extends React.Component {
  render() {
    const help = this.props.helpIcon
      ? (
        <chi-icon
          icon="circle-question-outline"
          onClick={this.props.clickHelp}
          onMouseEnter={this.props.mouseoverHelp}
          onMouseLeave={this.props.mouseleaveHelp}>
        </chi-icon>
      )
      : <chi-icon></chi-icon>;
    return (
      <chi-link
        href="#"
        disabled={this.props.disabled}
        cta={this.props.cta}
        target={this.props.target}
        rel={this.props.rel}
        hreflang={this.props.hreflang}
        size={this.props.size}
        alternative-text={this.props.alternativeText}
        onClick={this.props.click}>
        {help}
        <span>{this.props.title ? this.props.title : ''}</span>
      </chi-link>
    );
  }
}

Link.propTypes = {
  disabled: PropTypes.bool,
  cta: PropTypes.bool,
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top', 'framename']),
  click: PropTypes.func,
  rel: PropTypes.oneOf(['alternate', 'external', 'next', 'nofollow', 'noreferrer', 'noopener', 'prev']),
  hreflang: PropTypes.oneOf(['en']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  title: PropTypes.string,
  helpIcon: PropTypes.bool,
  clickHelp: PropTypes.func,
  mouseoverHelp: PropTypes.func,
  mouseleaveHelp: PropTypes.func,
  alternativeText: PropTypes.string,
};

Link.defaultProps = {
  disabled: false,
  cta: false,
  helpIcon: false,
  title: 'Link',
  size: 'md',
};
