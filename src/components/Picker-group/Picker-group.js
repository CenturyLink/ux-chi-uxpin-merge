import * as PropTypes from 'prop-types';
import * as React from 'react';

/* eslint-disable */
/**
 * @uxpincomponent
 */
export default class PickerGroup extends React.Component {
  render() {
    const pickersToRender = [];
    const fieldLabel = this.props.fieldLabel ? <legend className="chi-label">{this.props.fieldLabel}</legend> : '';
    console.log(this.props.selected);

    Array(11).fill()
        .forEach((_, i) => {
          if (this.props[`picker${i}`]) {
            pickersToRender.push(
              <input
                class="chi-picker__input"
                type="radio"
                name="radio-base"
                id={`picker${i}`}
                checked={this.props.selected === i}
              />
            );
            pickersToRender.push(
            <label
              for={`picker${i}`}
              onClick={(e) => {
                if (this.props[`select${i}`]) {
                  this.props[`select${i}`]();
                }
              }}>{this.props[`picker${i}`]}</label>
            );
          }
        });

    return (
      <fieldset>
        {fieldLabel}
        <div class="chi-picker-group">
          {pickersToRender}
        </div>
      </fieldset>
    );
  }
}

PickerGroup.propTypes = {
  fieldLabel: PropTypes.string,
  picker1: PropTypes.string,
  selected: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  picker2: PropTypes.string,
  picker3: PropTypes.string,
  picker4: PropTypes.string,
  picker5: PropTypes.string,
  picker6: PropTypes.string,
  picker7: PropTypes.string,
  picker8: PropTypes.string,
  picker9: PropTypes.string,
  picker10: PropTypes.string,
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
  selected: 1,
  picker1: 'Picker 1',
  picker2: 'Picker 2',
  picker3: 'Picker 3',
};
