import * as PropTypes from 'prop-types';
import * as React from 'react';

/**
 * @uxpincomponent
 */
export default class Dropdown extends React.Component {
  render() {
    return (
      <div className="chi-dropdown">
        <button
          type="button"
          className={`
            chi-button
            chi-dropdown__trigger
            ${this.props.active ? '-active' : ''}
            ${this.props.animate ? '-animate' : ''}
            ${this.props.disabled ? '-disabled' : ''}
          `}>
          Dropdown component
        </button>
        <div
          className={`
          chi-dropdown__menu
          ${this.props.active ? '-active' : ''}
          `}
          style={{
            height: `${this.props.height ? `${this.props.height}px` : '200px'}`,
          }}>
        </div>
      </div>
    );
  }
}

/* eslint-disable sort-keys */
Dropdown.propTypes = {
  active: PropTypes.bool,
  animate: PropTypes.bool,
  height: PropTypes.number,
  disabled: PropTypes.bool,
};
/* eslint-enable sort-keys */

Dropdown.defaultProps = {
  animate: true,
};
