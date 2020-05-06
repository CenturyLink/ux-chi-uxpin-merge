import * as PropTypes from 'prop-types';
import * as React from 'react';

export default class Spinner extends React.Component {
  render () {
    const backdropColor = this.props.backdrop === 'Default' ? '' : '-inverse';

    return (
        <div class={`chi-backdrop -center ${backdropColor}`} style={{width: '100%', height: '100vh'}}>
          <div class="chi-backdrop__wrapper">
            <svg class={`chi-spinner -text--${this.props.color}`} viewBox="0 0 66 66">
              <title>Loading</title>
              <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
            </svg>
          </div>
        </div>
    );
  }
}

/* eslint-disable sort-keys */
Spinner.propTypes = {
  color: PropTypes.oneOf(['light', 'primary', 'secondary', 'success', 'danger', 'warning', 'muted']),
  backdrop: PropTypes.oneOf(['Default', 'inverse']),
};
/* eslint-enable sort-keys */

Spinner.defaultProps = {
    color: 'primary',
    backdrop: 'inverse',
};
