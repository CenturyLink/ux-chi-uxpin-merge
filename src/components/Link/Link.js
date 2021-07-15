/* eslint-disable*/
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { ICON_CLASS } from '../../constants/classes';

export default class Link extends React.Component {
  render() {
    const help = this.props.helpIcon
      ? (
        <i
          className={`${ICON_CLASS} icon-circle-question-outline`}
          onClick={this.props.clickHelp}
          onMouseEnter={this.props.mouseoverHelp}
          onMouseLeave={this.props.mouseleaveHelp}>
        </i>
      )
      : '';
    return (
      <chi-link
        className="chi-link"
        href="#"
        disabled={this.props.disabled}
        cta={this.props.cta}
        size={this.props.size}
        onClick={this.props.clickLink}
        onMouseEnter={this.props.mouseoverLink}
        onMouseLeave={this.props.mouseleaveLink}>
        <div className="chi-link__content">
          {help}
          <span>{this.props.title ? this.props.title : ''}</span>
        </div>
      </chi-link>
    );
  }
}

Link.propTypes = {
  title: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  disabled: PropTypes.bool,
  /**
   * Icon that goes after the children
   * @uxpinpropname  CTA
   * */
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
