/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as PropTypes from 'prop-types';
import * as React from 'react';

export default class LinkComp extends React.Component {
  render() {
    return (
      <chi-link
        href="#"
        disabled={this.props.disabled}
        cta={this.props.cta}
        target={this.props.target}
        rel={this.props.rel}
        hreflang={this.props.hreflang}
        size={this.props.size}>
        {this.props.title ? this.props.title : ''}
      </chi-link>
    );
  }
}

LinkComp.propTypes = {
  disabled: PropTypes.bool,
  cta: PropTypes.bool,
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top', 'framename']),
  rel: PropTypes.oneOf(['alternate', 'external', 'next', 'nofollow', 'noreferrer', 'noopener', 'prev']),
  hreflang: PropTypes.oneOf(['en']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  title: PropTypes.string,
};

LinkComp.defaultProps = {
  disabled: false,
  cta: false,
  title: 'Link',
  size: 'md',
};
