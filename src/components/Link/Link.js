/* eslint-disable*/
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { ICON_CLASS } from '../../constants/classes';

export default class Link extends React.Component {
  render() {
    const help = this.props.showIcon
      ? (
        <i
          className={`${ICON_CLASS} icon-${this.props.icon}`}
          onClick={this.props.clickIcon}
          onMouseEnter={this.props.mouseoverIcon}
          onMouseLeave={this.props.mouseleaveIcon}>
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
          {this.props.iconPosition === 'left' ? help : null}
          <span>{this.props.title ? this.props.title : ''}</span>
          {this.props.iconPosition === 'right' ? help : null}
        </div>
      </chi-link>
    );
  }
}

Link.propTypes = {
  title: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  /**
   * Icon that goes after the children
   * @uxpinpropname  CTA
   * */
  cta: PropTypes.bool,
  clickLink: PropTypes.func,
  mouseoverLink: PropTypes.func,
  mouseleaveLink: PropTypes.func,
  showIcon: PropTypes.bool,
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  disabled: PropTypes.bool,
  clickIcon: PropTypes.func,
  mouseoverIcon: PropTypes.func,
  mouseleaveIcon: PropTypes.func,
};

Link.defaultProps = {
  disabled: false,
  cta: false,
  showIcon: false,
  title: 'Link',
  size: 'md',
  icon:'circle-question-outline',
  iconPosition:'left',
};
