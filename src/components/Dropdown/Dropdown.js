import * as PropTypes from 'prop-types';
import * as React from 'react';

export default class Dropdown extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      if (chi) {
        chi.dropdown(document.getElementById('dropdown-1'));
      }
    }, 1000);
  }

  render() {
    return (
      <div class="chi-dropdown">
        <button
          id="dropdown-1"
          class={`
            chi-button
            chi-dropdown__trigger
            ${this.props.active ? '-active' : ''}
            ${this.props.animate ? `-animate` : ``}
            ${this.props.disabled ? `-disabled` : ``}
          `}
        >
          Dropdown component
        </button>
        <div class={`
          chi-dropdown__menu
          ${this.props.active ? '-active' : ''}
          `}
          style={{
          height: `${this.props.height ? `${this.props.height}px` : '200px'}`
          }}
          >
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
};
