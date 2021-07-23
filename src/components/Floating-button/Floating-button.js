import * as PropTypes from 'prop-types';
import * as React from 'react';

/* eslint-disable */

export default class FloatingButton extends React.Component {
  render() {
    
    return (
      <chi-button type="float" color={this.props.color} alternative-text="Button action">
        <chi-icon icon={this.props.icon}></chi-icon>
      </chi-button>
    );
  }
}

FloatingButton.propTypes = {
  color: PropTypes.oneOf(['primary', 'dark', 'secondary', 'light']),
  icon: PropTypes.string,
};

FloatingButton.defaultProps = {
  icon: 'atom',
  color: 'primary',
};
