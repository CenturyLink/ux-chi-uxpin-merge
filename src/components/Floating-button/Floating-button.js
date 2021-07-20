import * as PropTypes from 'prop-types';
import * as React from 'react';
/* eslint-disable */

export default class FloatingButton extends React.Component {
  render() {
    
    return (
      <button className={`chi-button -${this.props.background} -float`} aria-label="Button action">
        <div className="chi-button__content">
          <i className={`chi-icon icon-${this.props.icon}`}></i>
        </div>
      </button>
    );
  }
}

FloatingButton.propTypes = {
  background: PropTypes.oneOf(['primary', 'dark', 'secondary', 'light']),
  icon: PropTypes.string,
};

FloatingButton.defaultProps = {
  icon: 'atom',
  background: 'primary',
};
