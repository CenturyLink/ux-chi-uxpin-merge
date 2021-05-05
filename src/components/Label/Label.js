import * as PropTypes from 'prop-types';
import * as React from 'react';

/* eslint-disable */
/**
 * @uxpincomponent
 */
export default class Label extends React.Component {
  render() {
    const required = <abbr class="chi-label__required" title="Required field">*</abbr>;
    const optional = <abbr class="chi-label__optional" title="Optional field">(optional)</abbr>;
    let message = '';

    if (!(this.props.required && this.props.optional)) {
      if (this.props.required && this.props.required === 'required') {
        message = required;
      } else if (this.props.required && this.props.required === 'optional')  {
        message = optional;
      }
    }

    return (
      <label
        className={`
          chi-label
          ${this.props.size ? `-${this.props.size}` : ``}
          `}
        htmlFor={`${this.for}-control`}
        onClick={this.props.click}
        onMouseEnter={this.props.mouseOver}
        onMouseLeave={this.props.mouseLeave}
        onMouseDown={this.props.mouseDown}
        onMouseUp={this.props.mouseUp}
      >
        {this.props.label}
        {message}
      </label>
    );
  }
}

Label.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  label: PropTypes.string,
  required: PropTypes.oneOf(['none', 'required', 'optional']),
  click: PropTypes.func,
  mouseDown: PropTypes.func,
  mouseLeave: PropTypes.func,
  mouseOver: PropTypes.func,
  mouseUp: PropTypes.func,
};
/* eslint-enable */

Label.defaultProps = {
  label: 'Label',
  size: 'md',
  required: 'none',
};
