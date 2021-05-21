import * as PropTypes from 'prop-types';
import * as React from 'react';

/**
 * @uxpincomponent
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export default class Spinner extends React.Component {
  render() {
    let boundingBoxWidth;

    switch (this.props.size) {
      case 'xs':
        boundingBoxWidth = 12;
        break;
      case 'sm':
        boundingBoxWidth = 16;
        break;
      case 'sm--2':
        boundingBoxWidth = 20;
        break;
      case 'sm--3':
        boundingBoxWidth = 24;
        break;
      case 'md':
        boundingBoxWidth = 32;
        break;
      case 'lg':
        boundingBoxWidth = 64;
        break;
      case 'xl':
        boundingBoxWidth = 96;
        break;
      case 'xxl':
        boundingBoxWidth = 128;
        break;
      default:
        boundingBoxWidth = 20;
        break;
    }

    return (
      <div style={{ width: boundingBoxWidth }} ref={this.props.uxpinRef}>
        <chi-spinner
          color={this.props.color}
          size={this.props.size}>
          <span className="-sr--only">
            i
          </span>
        </chi-spinner>
      </div>
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
