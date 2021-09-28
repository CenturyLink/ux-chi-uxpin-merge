import * as PropTypes from 'prop-types';
import * as React from 'react';
import { uuid4 } from '../../utils/utils';
import {
  BUTTON_CLASSES,
  ICON_CLASS,
  LABEL_CLASSES,
  STAT_CLASSES,
} from '../../constants/classes';

/* eslint-disable */
/**
 * @uxpincomponent
 */
export default class Label extends React.Component {
  render() {
    const uuid = uuid4();
    const required = <abbr className={`${LABEL_CLASSES.REQUIRED}`} title="Required field">*</abbr>;
    const optional = <abbr className={`${LABEL_CLASSES.OPTIONAL}`} title="Optional field">(optional)</abbr>;
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
        <div className={`${STAT_CLASSES.TITLE_HELP}`}
        onClick={this.props.clickInfo}
        onMouseEnter={this.props.mouseOverInfo}
        onMouseLeave={this.props.mouseLeaveInfo}>
          <button className={`${BUTTON_CLASSES.BUTTON} -icon -xs -flat`} aria-label="Help">
            <i className={`${ICON_CLASS} icon-circle-info-outline -icon--primary`}></i>
          </button>
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
