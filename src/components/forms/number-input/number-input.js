import * as PropTypes from 'prop-types';
import * as React from 'react';

export default class NumberInput extends React.Component {
  render() {
    const size = this.props.size ? this.props.size.split(' ')[0] : null;

    return <chi-number-input
      disabled={this.props.disabled}
      expanded={this.props.expanded}
      size={size}
    ></chi-number-input>;
  }
}

/* eslint-disable sort-keys */
NumberInput.propTypes = {
  disabled: PropTypes.bool,
  expanded: PropTypes.bool,
  size: PropTypes.oneOf(['sm (24px)', 'md (32px)', 'lg (40px)', 'xl (48px)']),
};
/* eslint-enable sort-keys */

NumberInput.defaultProps = {
  disabled: false,
  expanded: false,
  size: 'md'
};
