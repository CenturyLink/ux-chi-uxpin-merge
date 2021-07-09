import * as PropTypes from 'prop-types';
import * as React from 'react';
import { uuid4 } from '../../utils/utils';

/* eslint-disable */
/**
 * @uxpincomponent
 */
export default class PickerGroup extends React.Component {
  render() {
    const uuid = uuid4();
    const pickersToRender = [];
    const required = <abbr className="chi-label__required" title="Required field">*</abbr>;
    const optional = <abbr className="chi-label__optional" title="Optional field">(optional)</abbr>;
    let message = '';

    if (this.props.required && this.props.required === 'required') {
      message = required;
    } else if (this.props.required && this.props.required === 'optional')  {
      message = optional;
    }

    const info = this.props.info ?
      <div className="chi-label__help" 
      onClick={this.props.clickInfo}
      onMouseEnter={this.props.mouseOverInfo}
      onMouseLeave={this.props.mouseLeaveInfo}>
        <button className="chi-button -icon -sm -flat">
          <i className="chi-icon icon-circle-info-outline"></i>
        </button>
      </div> : '';
    
    const fieldLabel = this.props.fieldLabel ?
      <legend className="chi-label">
        {this.props.fieldLabel}
        {message}
        {info}
      </legend> : '';

    Array(11).fill()
        .forEach((_, i) => {
          if (this.props[`picker${i}`]) {
            pickersToRender.push(
              <input
                className="chi-picker__input" key={`picker-${i}`}
                type="radio"
                name="radio-base"
                id={`picker-${uuid}-${i}`}
                checked={this.props.selected === i} onChange={(e) => {}}
                disabled={this.props[`disabled${i}`]}
              />
            );
            pickersToRender.push(
            <label
              for={`picker-${uuid}-${i}`}
              onClick={(e) => {
                if (this.props[`select${i}`]) {
                  const clickedLabelId = e.target.getAttribute('for');
                  const currentlyActivePicker = e.target.parentNode.querySelector('input[checked]');
                  const inputToCheck = document.getElementById(clickedLabelId);
                  this.props[`select${i}`]();
                  currentlyActivePicker.checked = false;
                  inputToCheck.checked = true;
                }
              }}
              >{this.props[`picker${i}`]}</label>
            );
          }
        });

    return (
      <fieldset>
        {fieldLabel}
        <div className="chi-picker-group">
          {pickersToRender}
        </div>
      </fieldset>
    );
  }
}

PickerGroup.propTypes = {
  fieldLabel: PropTypes.string,
  required: PropTypes.oneOf(['none', 'required', 'optional']),
  selected: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  info: PropTypes.bool,
  clickInfo: PropTypes.func,
  mouseDownInfo: PropTypes.func,
  mouseLeaveInfo: PropTypes.func,
  picker1: PropTypes.string,
  disabled1: PropTypes.bool,
  picker2: PropTypes.string,
  disabled2: PropTypes.bool,
  picker3: PropTypes.string,
  disabled3: PropTypes.bool,
  picker4: PropTypes.string,
  disabled4: PropTypes.bool,
  picker5: PropTypes.string,
  disabled5: PropTypes.bool,
  picker6: PropTypes.string,
  disabled6: PropTypes.bool,
  picker7: PropTypes.string,
  disabled7: PropTypes.bool,
  picker8: PropTypes.string,
  disabled8: PropTypes.bool,
  picker9: PropTypes.string,
  disabled9: PropTypes.bool,
  picker10: PropTypes.string,
  disabled10: PropTypes.bool,
  select1: PropTypes.func,
  select2: PropTypes.func,
  select3: PropTypes.func,
  select4: PropTypes.func,
  select5: PropTypes.func,
  select6: PropTypes.func,
  select7: PropTypes.func,
  select8: PropTypes.func,
  select9: PropTypes.func,
  select10: PropTypes.func,
};
/* eslint-enable */

PickerGroup.defaultProps = {
  fieldLabel: 'Field Label',
  picker1: 'Picker 1',
  picker2: 'Picker 2',
  picker3: 'Picker 3',
  required: 'none',
  info: false,
};
