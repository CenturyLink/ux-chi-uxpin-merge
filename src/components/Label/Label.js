import * as PropTypes from 'prop-types';
import * as React from 'react';
import './Label.css';
import { uuid4 } from '../../utils/utils';

/* eslint-disable */
/**
 * @uxpincomponent
 */
export default class Label extends React.Component {

  render() {
    const uuid = uuid4();
    const required = <abbr className="chi-label__required" title="Required field">*</abbr>;
    const optional = <abbr className="chi-label__optional" title="Optional field">(optional)</abbr>;
    let message = '';

    if (!(this.props.required && this.props.optional)) {
      if (this.props.required && this.props.required === 'required') {
        message = required;
      } else if (this.props.required && this.props.required === 'optional')  {
        message = optional;
      }
    }

    const info = this.props.info
      ? (
        <div className="chi-label__help"
        onClick={this.props.clickInfo}
        onMouseEnter={this.props.mouseOverInfo}
        onMouseLeave={this.props.mouseLeaveInfo}>
          <chi-button id={"example__help-button"} type="icon" color="primary" size="sm" variant="flat" alternative-text="Help">
            <chi-icon icon="circle-info-outline"></chi-icon>
          </chi-button>
        </div>
      )
      : null;

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
        {info}
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
  info: PropTypes.bool,
  clickInfo: PropTypes.func,
  mouseOverInfo: PropTypes.func,
  mouseLeaveInfo: PropTypes.func,
};
/* eslint-enable */

Label.defaultProps = {
  label: 'Label',
  size: 'md',
  required: 'none',
  info: false,
};
