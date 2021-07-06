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
        size={this.props.size}
        onClick={this.props.clickLink}
        onMouseEnter={this.props.mouseoverLink}
        onMouseLeave={this.props.mouseleaveLink}>
        {help}
        <span>{this.props.title ? this.props.title : ''}</span>
      </chi-link>
    );
  }
}

Link.propTypes = {
  title: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  disabled: PropTypes.bool,
  cta: PropTypes.bool,
  clickLink: PropTypes.func,
  mouseoverLink: PropTypes.func,
  mouseleaveLink: PropTypes.func,
  helpIcon: PropTypes.bool,
  clickHelp: PropTypes.func,
  mouseoverHelp: PropTypes.func,
  mouseleaveHelp: PropTypes.func,
};

Link.defaultProps = {
  disabled: false,
  cta: false,
  helpIcon: false,
  title: 'Link',
  size: 'md',
};
