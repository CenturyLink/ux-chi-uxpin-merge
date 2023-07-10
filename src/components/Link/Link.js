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
    const textRender = () => ({ __html: this.props.title.replaceAll('\n', '<br />') });

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
        no-hover-underline={this.props.noHoverUnderline}
        ref={this.linkElement}>
        <div className="chi-link__content">
          {this.props.iconPosition === 'left' ? help : null}
          <span
            className={`${this.props.lineHeight ? `-lh--${this.props.lineHeight === '24 (default)' ? 3 : this.props.lineHeight / 8}` : ''}`}
            dangerouslySetInnerHTML={textRender()}>
          </span>
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
  lineHeight: PropTypes.oneOf([8, 16, '24 (default)', 32, 40, 48, 56, 64, 72]),
  iconPosition: PropTypes.oneOf(['left', 'right']),
  noHoverUnderline: PropTypes.bool,
};

Link.defaultProps = {
  disabled: false,
  cta: false,
  title: 'Link',
  size: 'md',
  iconPosition:'left',
  lineHeight: '24 (default)',
};
