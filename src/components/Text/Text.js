import * as PropTypes from 'prop-types';
import * as React from 'react';

export default class Text extends React.Component {
  render() {
    return (
      <p className={`-text--${this.props.size}`}>
        {this.props.text ? this.props.text : ''}
      </p>
    );
  }
}

Text.propTypes = {
  size: PropTypes.oneOf(['xl', 'lg', 'md', 'sm', 'xs']),
  text: PropTypes.string,
};

Text.defaultProps = {
  text: 'Text',
  size: 'md',
};
