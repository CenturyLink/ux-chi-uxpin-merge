import * as PropTypes from 'prop-types';
import * as React from 'react';

export default class Text extends React.Component {
  render() {
    let fontWeight;

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

    return (
      <p className={`${this.props.size ? `-text--${this.props.size}` : ''}
       ${this.props.lineheight ? `-text ${this.props.lineheight}` : ''}
       ${this.props.transform ? `-text--${this.props.transform}` : ''}
       ${this.props.color ? `-text--${this.props.color}` : ''}
       ${this.props.weight ? `-text--${fontWeight}` : ''}`}>
        {this.props.text || ''}
      </p>
    );
  }
}

Text.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  transform: PropTypes.oneOf(['lowercase', 'uppercase', 'capitalized']),
  color: PropTypes.oneOf(['body', 'primary', 'secondary', 'light', 'success', 'info', 'warning', 'danger', 'muted', 'navy', 'orange']),
  weight: PropTypes.oneOf(['regular', 'semi-bold', 'bold', 'black']),
  text: PropTypes.string,
  lineheight: PropTypes.oneOf(['-lh--1', '-lh--2', '-lh--3', '-lh--4', '-lh--5', '-lh--6', '-lh--7', '-lh--8', '-lh--9']),
};

Text.defaultProps = {
  text: 'Sample text',
  size: 'md',
  transform: 'capitalized',
  color: 'body',
  weight: 'regular',
};
