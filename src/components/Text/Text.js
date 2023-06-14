/* eslint-disable react/no-danger */
import * as PropTypes from 'prop-types';
import * as React from 'react';

export default class Text extends React.Component {
  render() {
    let fontWeight;
    const textRender = () => ({ __html: this.props.text.replaceAll('\n', '<br />') });

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
      <div
        className={`${this.props.size ? `-text--${this.props.size}` : ''}
       ${this.props.lineHeight ? `-text -lh--${this.props.lineHeight === '24 (default)' ? 3 : this.props.lineHeight / 8}` : ''}
       ${this.props.textTransform !== 'no-transform' ? `-text--${this.props.textTransform}` : ''}
       ${this.props.color ? `-text--${this.props.color}` : ''}
       ${this.props.textAlign ? `-text--${this.props.textAlign}` : ''}
       ${this.props.truncate ? '-text--truncate' : ''}
       ${this.props.weight ? `-text--${fontWeight}` : ''}`}
        dangerouslySetInnerHTML={textRender()}>
      </div>
    );
  }
}

Text.propTypes = {
  /**
   * A textArea controller for Text
   * @uxpinpropname text
   * @uxpincontroltype textfield(10)
   * */
  text: PropTypes.string,
  color: PropTypes.oneOf(['body', 'primary', 'secondary', 'light', 'success', 'info', 'warning', 'danger', 'muted', 'navy', 'orange']),
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  weight: PropTypes.oneOf(['regular', 'semi-bold', 'bold', 'black']),
  truncate: PropTypes.bool,
  lineHeight: PropTypes.oneOf([8, 16, '24 (default)', 32, 40, 48, 56, 64, 72]),
  textTransform: PropTypes.oneOf(['no-transform', 'lowercase', 'uppercase', 'capitalized', 'italic']),
};

Text.defaultProps = {
  text: 'Sample text',
  color: 'body',
  textAlign: 'left',
  size: 'md',
  textTransform: 'no-transform',
  weight: 'regular',
  lineHeight: '24 (default)',
};
