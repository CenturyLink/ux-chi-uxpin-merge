/* eslint-disable*/
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { ICON_CLASS } from '../../constants/classes';

export default class Link extends React.Component {
  constructor(props) {
    super(props);
    this.linkElement = React.createRef();
  }

  componentDidMount() {
    setTimeout(() => {
      const anchorElement = this.linkElement.current.querySelector('a');

      anchorElement.removeAttribute('href');
    }, 1000);
  }

  render() {
    const help = this.props.icon
      ? (
        <i
          className={`${ICON_CLASS} icon-${this.props.icon}`}>
        </i>
      )
      : '';
    return (
      <chi-link
        className="chi-link"
        disabled={this.props.disabled}
        cta={this.props.cta}
        size={this.props.size}
        onClick={this.props.clickLink}
        onMouseEnter={this.props.mouseoverLink}
        onMouseLeave={this.props.mouseleaveLink}
        ref={this.linkElement}>
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
  disabled: PropTypes.bool,
  clickLink: PropTypes.func,
  mouseoverLink: PropTypes.func,
  mouseleaveLink: PropTypes.func,
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'right']),
};

Link.defaultProps = {
  disabled: false,
  cta: false,
  title: 'Link',
  size: 'md',
  icon:'circle-question-outline',
  iconPosition:'left',
};
