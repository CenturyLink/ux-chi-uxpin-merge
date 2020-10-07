import * as PropTypes from 'prop-types';
import * as React from 'react';

/**
 * @uxpincomponent
 */
export default class Spinner extends React.Component {
  render() {
    return (
      <chi-spinner
        color={this.props.color}
        size={this.props.size}>
        <span className="-sr--only">
          i
        </span>
      </chi-spinner>
    );
  }
}

/* eslint-disable sort-keys */
Spinner.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'sm--2', 'sm--3', 'md', 'lg', 'xl', 'xxl']),
  color: PropTypes.oneOf(['primary', 'light', 'secondary', 'success', 'danger', 'warning', 'muted']),
};
/* eslint-enable sort-keys */

Spinner.defaultProps = {
  color: 'primary',
  size: 'sm',
};
