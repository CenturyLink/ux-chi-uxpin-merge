import * as PropTypes from 'prop-types';
import * as React from 'react';

export default class Text extends React.Component {
  render() {
    let fontWeight;
    let height;

    switch (this.props.weight) {
      case 'regular':
        fontWeight = 'normal';
        break;
      case 'semi-bold':
        fontWeight = 'bold';
        break;
      case 'bold':
        fontWeight = 'bolder';
        break;
      case 'black':
        fontWeight = 'boldest';
        break;
      default:
        fontWeight = 'normal';
        break;
    }

    switch (this.props.lineHeight) {
    return (
      <p className={`${this.props.size ? `-text--${this.props.size}` : ''}
       ${this.props.lineHeight ? `-lh--${lineHeight === 'default' ? 3 : lineHeight / 8}` : ''}
       ${this.props.transform !== 'no-transform' ? `-text--${this.props.transform}` : ''}
       ${this.props.color ? `-text--${this.props.color}` : ''}
       ${this.props.truncate ? '-text--truncate' : ''}
       ${this.props.weight ? `-text--${fontWeight}` : ''}`}>
        {this.props.text || ''}
      </p>
    );
  }
}

Text.propTypes = {
  text: PropTypes.string,
  color: PropTypes.oneOf(['body', 'primary', 'secondary', 'light', 'success', 'info', 'warning', 'danger', 'muted', 'navy', 'orange']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  weight: PropTypes.oneOf(['regular', 'semi-bold', 'bold', 'black']),
  truncate: PropTypes.bool,
  lineHeight: PropTypes.oneOf(['8', '16', '24 (default)', '32', '40', '48', '56', '64', '72']),
  transform: PropTypes.oneOf(['no-transform', 'lowercase', 'uppercase', 'capitalized']),
};

Text.defaultProps = {
  text: 'Sample text',
  color: 'body',
  size: 'md',
  transform: 'no-transform',
  weight: 'regular',
  lineHeight: '24 (default)',
};
