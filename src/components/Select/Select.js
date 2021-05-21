import * as PropTypes from 'prop-types';
import * as React from 'react';
import Label from '../Label/Label';
import { uuid4 } from '../../utils/utils';
import './select.css';

/* eslint-disable */
/**
 * @uxpincomponent
 */
export default class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: uuid4() };
  }

  render() {
    let optionsToRender = [];
    const label = this.props.label
      ? (
        <Label
          className="chi-label"
          htmlFor={this.state.id}
          required={this.props.required}
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
          id={this.state.id}
          className={`chi-select ${this.props.size ? `-${this.props.size}` : ''}`}
          disabled={this.props.disabled}>
          {optionsToRender}
        </select>
      </div>
    );
  }
}

Select.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  label: PropTypes.string,
  required: PropTypes.oneOf(['none', 'required', 'optional']),
  disabled: PropTypes.bool,
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
  size: 'lg',
  option1: 'Option 1',
  option2: 'Option 2',
  option3: 'Option 3',
  required: 'none',
};
