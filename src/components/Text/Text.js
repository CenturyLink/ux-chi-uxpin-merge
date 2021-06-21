import * as PropTypes from 'prop-types';
import * as React from 'react';

export default class Text extends React.Component {
  render() {
    return (
      <p className={`${this.props.size ? `-text--${this.props.size}` : ''}
       ${this.props.transform ? `-text--${this.props.transform}` : ''}
       ${this.props.color ? `-text--${this.props.color}` : ''}
       ${this.props.weight ? `-text--${this.props.weight}` : ''}`}>
        {this.props.text || ''}
      </p>
    );
  }
}

Text.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  transform: PropTypes.oneOf(['lowercase', 'uppercase', 'capitalized']),
  color: PropTypes.oneOf(['body', 'primary', 'secondary', 'light', 'success', 'info', 'warning', 'danger', 'muted', 'navy', 'orange']),
  weight: PropTypes.oneOf(['normal', 'bold', 'bolder', 'boldest']),
  text: PropTypes.string,
};

Text.defaultProps = {
  text: 'sample ',
  size: 'md',
  transform: 'capitalized',
  color: 'body',
  weight: 'normal',
};
