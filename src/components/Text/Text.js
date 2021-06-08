import * as PropTypes from 'prop-types';
import * as React from 'react';

export default class Text extends React.Component {
  render() {
    return (
      <p className={`-text--${this.props.size ? `${this.props.size}` : ''}
       -text--${this.props.transform ? `${this.props.transform}` : ''}
       -text--${this.props.color ? `${this.props.color}` : ''}
       -text--${this.props.weight ? `${this.props.weight}` : ''}`}>
        {this.props.text ? this.props.text : ''}
      </p>
    );
  }
}

Text.propTypes = {
  size: PropTypes.oneOf(['xl', 'lg', 'md', 'sm', 'xs']),
  transform: PropTypes.oneOf(['lowercase', 'uppercase', 'capitalized']),
  color: PropTypes.oneOf(['body', 'primary', 'secondary', 'light', 'success', 'info', 'warning', 'danger', 'muted', 'navy', 'orange']),
  weight: PropTypes.oneOf(['thin', 'normal', 'bold', 'bolder', 'boldest']),
  text: PropTypes.string,
};

Text.defaultProps = {
  text: 'Text',
  size: 'md',
  transform: 'capitalized',
  color: 'primary',
  weight: 'normal',
};
