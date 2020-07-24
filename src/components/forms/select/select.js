import * as PropTypes from 'prop-types';
import * as React from 'react';
import Label from '../label/label';
import { uuid4 } from '../../../utils/utils';
import './select.css';

const uuid = uuid4();
/* eslint-disable */
/**
 * @uxpincomponent
 */
export default class Select extends React.Component {
  render() {
    let optionsToRender = [];
    const label = this.props.label
      ? (
        <Label
          className="chi-label"
          htmlFor={uuid}
          required={this.props.labelRequired}
          optional={this.props.labelOptional}
          label={this.props.label}>
        </Label>
      )
      : null;

    Array(11).fill()
      .forEach((_, i) => {
        if (this.props[`option${i}`]) {
          optionsToRender.push(
            <option value={(this.props[`option${i}`]).toString().toLowerCase()}>{this.props[`option${i}`]}</option>
          );
        }
      });

    return (
      <div className="chi-form__item css-chi">
        {label}
        <select className={`chi-input ${this.props.size ? `-${this.props.size}` : ''}`} id={uuid}>
          {optionsToRender}
        </select>
      </div>
    );
  }
}

Select.propTypes = {
  label: PropTypes.string,
  labelRequired: PropTypes.bool,
  labelOptional: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  option1: PropTypes.string,
  option2: PropTypes.string,
  option3: PropTypes.string,
  option4: PropTypes.string,
  option5: PropTypes.string,
  option6: PropTypes.string,
  option7: PropTypes.string,
  option8: PropTypes.string,
  option9: PropTypes.string,
  option10: PropTypes.string,
  click: PropTypes.func,
  focus: PropTypes.func,
  focusLost: PropTypes.func,
  input: PropTypes.func,
  valueChange: PropTypes.func,
  mouseDown: PropTypes.func,
  mouseUp: PropTypes.func,
  mouseOver: PropTypes.func,
  mouseLeave: PropTypes.func,
};
/* eslint-enable */

Select.defaultProps = {
  label: 'Label',
  size: 'md',
};
