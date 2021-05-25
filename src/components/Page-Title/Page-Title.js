import * as PropTypes from 'prop-types';
import * as React from 'react';

export default class PageTitle extends React.Component {
  render() {
    let help = '';
    let link = '';
    let subHeader = '';

   if (this.props.helpIcon) {
        help =(
            <a className="chi-button -icon -flat -lg -bg--none -b--transparent -opacity-hover--80" 
            onClick={this.props.helpclick}
            onMouseEnter={this.props.helpmouseOver}
            onMouseLeave={this.props.helpmouseLeave}>
                    <div className="chi-button__content">
                        <i className="chi-icon icon-circle-question-outline"></i>
                    </div>
            </a>
        );
   }

   if(this.props.backlink){
       link = (
        <a className="chi-link" 
        onClick={this.props.linkclick}>
            <div className="chi-link__content">
                <i className="chi-icon icon-chevron-left -xs"></i>
                <span className="-text--md">{this.props.backlink? this.props.backlink : ''}</span>
            </div>
        </a> 
       );
   } 
    
   if(this.props.subtitle){
       subHeader = (
        <div className="-text--md -pl--2">{this.props.subtitle? this.props.subtitle :''}</div>
       );
   }

    return (
        <div className="-d--flex -flex--column">
            {link }
            <div className="-d--flex -align-items--center -mb--4">
                <div className={`-text--h3 -text--boldest -text--navy -m--0 
                                ${subHeader? '-br--1' : ''} -pr--2`}>              
                {this.props.title? this.props.title : ''}
                {help}
                </div>                
                {subHeader}
            </div>
        </div>
    );
  }
}

PageTitle.propTypes = {
    title: PropTypes.string,
    helpIcon: PropTypes.bool,
    backlink: PropTypes.string,
    subtitle: PropTypes.string,
    linkclick: PropTypes.func,
    helpclick: PropTypes.func,
    mouseoverhelp: PropTypes.func,
    mouseleavehelp: PropTypes.func,
};
PageTitle.defaultProps = {
    title: 'Page Title',
    subtitle: 'Sub Title',
    backlink: 'back link'
};
