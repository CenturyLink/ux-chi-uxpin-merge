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
            <option value={i}>{this.props[`option${i}`]}</option>
          );
        }
      });
    const onChange = (e) => {
      this.props.valueChange();
      this.props[`selected${e.target.value}`]();
    };

    return (
      <div className="chi-form__item css-chi">
        {label}
        <select
          onClick={this.props.click}
          onFocus={this.props.focus}
          onBlur={this.props.focusLost}
          onInput={this.props.input}
          onChange={(e) => onChange(e)}
          onMouseDown={this.props.mouseDown}
          onMouseUp={this.props.mouseUp}
          onMouseOver={this.props.mouseOver}
          onMouseLeave={this.props.mouseLeave}
          id={uuid}
          className={`chi-input ${this.props.size ? `-${this.props.size}` : ''}`}>
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
  mouseLeave: PropTypes.func,
  mouseOver: PropTypes.func,
  mouseUp: PropTypes.func,
  selected1: PropTypes.func,
  selected2: PropTypes.func,
  selected3: PropTypes.func,
  selected4: PropTypes.func,
  selected5: PropTypes.func,
  selected6: PropTypes.func,
  selected7: PropTypes.func,
  selected8: PropTypes.func,
  selected9: PropTypes.func,
  selected10: PropTypes.func,
};
/* eslint-enable */

Select.defaultProps = {
  label: 'Label',
  size: 'md',
};
