import * as PropTypes from 'prop-types';
import * as React from 'react';
import Label from '../Label/Label';
import Icon from '../Icon/Icon';
import { uuid4 } from '../../utils/utils';
import {
  LABEL_CLASSES,
  STAT_CLASSES,
} from '../../constants/classes';
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
    const info = this.props.info
      ? (
        <div className={`${STAT_CLASSES.TITLE_HELP}`}>
          <Icon
            uxpId={`infoIcon-${this.state.id}`}
            icon={'circle-info-outline'}
            size="xs"
            color="primary"
            mode="button"
            popover={true}
            popoverTitle={this.props.infoPopoverTitle}
            popoverDescription={this.props.infoPopoverDescription}
            popoverPosition={this.props.infoPopoverPosition}
          />
        </div>
      ) : '';
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

    Array(16).fill()
      .forEach((_, i) => {
        if (this.props[`option${i}`]) {
          optionsToRender.push(
            <option value={i} selected={i === this.props.selectedOption}>{this.props[`option${i}`]}</option>
          );
        }
      });
    const onChange = (e) => {
      if (this.props.valueChange) {
        this.props.valueChange();
      }
      this.props[`selected${e.target.value}`]();
    };

    return (
      <div className="chi-form__item">
        <div className={`${LABEL_CLASSES.WRAPPER}`}>
          {label}
          {info}
        </div>
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
        <chi-helper-message>{this.props.helperMessage}</chi-helper-message>
      </div>
    );
  }
}

Select.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  label: PropTypes.string, 
  helperMessage: PropTypes.string,
  /** @uxpinignoreprop */
  helperMessageState: PropTypes.oneOf(['default', 'danger']),
  required: PropTypes.oneOf(['none', 'required', 'optional']),
  selectedOption: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
  info: PropTypes.bool,
  infoPopoverTitle: PropTypes.string,
  /**
    * A textArea controller for Text
    * @uxpinpropname text
    * @uxpincontroltype textfield(10)
    * */
  infoPopoverDescription: PropTypes.string,
  infoPopoverPosition: PropTypes.oneOf(['right-start', 'top']),
  /** @uxpinignoreprop */
  clickInfo: PropTypes.func,
  /** @uxpinignoreprop */
  mouseOverInfo: PropTypes.func,
  /** @uxpinignoreprop */
  mouseLeaveInfo: PropTypes.func,
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
  option11: PropTypes.string,
  option12: PropTypes.string,
  option13: PropTypes.string,
  option14: PropTypes.string,
  option15: PropTypes.string,
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
  selected11: PropTypes.func,
  selected12: PropTypes.func,
  selected13: PropTypes.func,
  selected14: PropTypes.func,
  selected15: PropTypes.func,
};
/* eslint-enable */

Select.defaultProps = {
  size: 'md',
  required: 'none',
  selectedOption: 1,
  info: false,
  infoPopoverTitle: 'Popover Title',
  infoPopoverDescription: `Line 1
Line 2
Line 3`,
  infoPopoverPosition: 'right-start',
};
