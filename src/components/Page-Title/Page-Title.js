import * as PropTypes from 'prop-types';
import * as React from 'react';

export default class PageTitle extends React.Component {
  render() {
    /* eslint-disable */
    const help = this.props.helpIcon
      ? (
        <a
          className="chi-button -icon -flat -lg -bg--none -b--transparent -opacity-hover--80"
          onClick={this.props.clickHelp}
          onMouseEnter={this.props.mouseoverHelp}
          onMouseLeave={this.props.mouseleaveHelp}>
          <div className="chi-button__content">
            <i className="chi-icon icon-circle-question-outline"></i>
          </div>
        </a>
      )
      : null;

    const link = this.props.backLink
      ? (
        <a
          className="chi-link"
          onClick={this.props.clickBackLink}>
          <div className="chi-link__content">
            <i className="chi-icon icon-chevron-left -xs"></i>
            <span className="-text--md">{this.props.backLink ? this.props.backLink : ''}</span>
          </div>
        </a>
      )
      : null;

    const subtitle = this.props.subTitle
      ? (
        <div className="-text--md -pl--2">{this.props.subTitle ? this.props.subTitle : ''}</div>
      )
      : null;

    return (
      <div className="-d--flex -flex--column">
        {link }
        <div className="-d--flex -align-items--center -mb--4">
          <div className={`-text--h3 -text--boldest -text--navy -m--0 ${subtitle ? '-br--1' : ''} -pr--2`}>
            {this.props.title ? this.props.title : ''}
            {help}
          </div>
          {subtitle}
        </div>
      </div>
    );
  }
}

PageTitle.propTypes = {
  title: PropTypes.string,
  helpIcon: PropTypes.bool,
  backLink: PropTypes.string,
  subTitle: PropTypes.string,
  clickBackLink: PropTypes.func,
  clickHelp: PropTypes.func,
  mouseoverHelp: PropTypes.func,
  mouseleaveHelp: PropTypes.func,
};

PageTitle.defaultProps = {
  title: 'Page Title',
  subTitle: 'Sub Title',
  backLink: 'Back link',
};
