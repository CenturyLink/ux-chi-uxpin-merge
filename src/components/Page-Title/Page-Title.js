import * as PropTypes from 'prop-types';
import * as React from 'react';

export default class PageTitle extends React.Component {
  render() {
    let help = "";
    let link = "";
    let subHeader = "";

   if(this.props.helpIcon){
        help =(
            <a className="chi-button -icon -flat -lg -bg--none -b--transparent -opacity-hover--80">
                    <div className="chi-button__content">
                        <i className="chi-icon icon-circle-question-outline"></i>
                    </div>
            </a>
        );
   }

   if(this.props.backlink){
       link = (
        <a className="chi-link">
            <div className="chi-link__content">
                <i className="chi-icon icon-chevron-left -xs"></i>
                <span className="-text--md">{this.props.backlinkTitle? this.props.backlinkTitle : 'Ticketing'}</span>
            </div>
        </a> 
       );
   } 
    
   if(this.props.subtitle){
       subHeader = (
        <div className="-text--md -pl--2">{this.props.subtitleText? this.props.subtitleText :'1-HB23OP (Arizona State University)'}</div>
       );
   }

    return (
        <div className="-d--flex -flex--column">
            {link}
            <div className="-d--flex -align-items--center -mb--4">
                <div className={`-text--h3 -text--boldest -text--navy -m--0 
                                ${subHeader? '-br--1' : ''} -pr--2`}>              
                {this.props.title? this.props.title : 'Ticketing'}
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
    backlink: PropTypes.bool,
    backlinkTitle: PropTypes.string,
    subtitle: PropTypes.bool,
    subtitleText: PropTypes.string,
};

PageTitle.defaultProps = {
 
};
