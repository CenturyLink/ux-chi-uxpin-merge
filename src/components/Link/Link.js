/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as PropTypes from 'prop-types';
import * as React from 'react';

export default class Link extends React.Component {
  render() {
    // let help = '';
    // if (this.props.helpIcon) {
    //   help = <chi-icon icon="circle-question-outline"></chi-icon>;
    // }
    return (
      <chi-link href="#" disabled={this.props.disabled} cta={this.props.cta}>
        {this.props.title ? this.props.title : ''}
      </chi-link>
    );
  }
}

Link.propTypes = {
  disabled: PropTypes.bool,
  cta: PropTypes.bool,
  title: PropTypes.string,
};

Link.defaultProps = {
  disabled: false,
  cta: false,
  title: 'Link',
};
