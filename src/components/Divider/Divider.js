import * as PropTypes from 'prop-types';
import * as React from 'react';

export default class Divider extends React.Component {
  render () {
    return (
      <div
      class={`
        chi-divider
        ${this.props.colorbar ? '-colorbar' : ''}
        ${this.props.label ? '-label' : ''}
        ${this.props.size ? `-bt--${this.props.size}` : ''}
      `}>
        {this.props.label ? this.props.label : ''}
      </div>
    );
  }
}

/* eslint-disable sort-keys */
Divider.propTypes = {
  colorbar: PropTypes.bool,
  label: PropTypes.string,
  size: PropTypes.oneOf(['1', '2', '3', '4'])
};
/* eslint-enable sort-keys */

Divider.defaultProps = {
  colorbar: true,
};
