import * as PropTypes from 'prop-types';
import * as React from 'react';
import PickerBaseMulti from '../Picker-base-multi/PickerBaseMulti';
/* eslint-disable */

export default class PickerBaseSingle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PickerBaseMulti
        mode={'baseSingle'}
        selectedOption={this.props.selectedOption}
        fieldLabel={this.props.fieldLabel}
        required={this.props.required}
        info={this.props.info}
        clickInfo={this.props.clickInfo}
        mouseOverInfo={this.props.mouseOverInfo}
        mouseLeaveInfo={this.props.mouseLeaveInfo}
        picker1={this.props.picker1}
        disabled1={this.props.disabled1}
        picker2={this.props.picker2}
        disabled2={this.props.disabled2}
        picker3={this.props.picker3}
        disabled3={this.props.disabled3}
        picker4={this.props.picker4}
        disabled4={this.props.disabled4}
        picker5={this.props.picker5}
        disabled5={this.props.disabled5}
        picker6={this.props.picker6}
        disabled6={this.props.disabled6}
        picker7={this.props.picker7}
        disabled7={this.props.disabled7}
        picker8={this.props.picker8}
        disabled8={this.props.disabled8}
        picker9={this.props.picker9}
        disabled9={this.props.disabled9}
        picker10={this.props.picker10}
        disabled10={this.props.disabled10}
        select1={this.props.select1}
        select2={this.props.select2}
        select3={this.props.select3}
        select4={this.props.select4}
        select5={this.props.select5}
        select6={this.props.select6}
        select7={this.props.select7}
        select8={this.props.select8}
        select9={this.props.select9}
        select10={this.props.select10}
      ></PickerBaseMulti>
    );
  }
}

PickerBaseSingle.propTypes = {
  fieldLabel: PropTypes.string,
  required: PropTypes.oneOf(['none', 'required', 'optional']),
  selectedOption: PropTypes.oneOf(['None', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  info: PropTypes.bool,
  clickInfo: PropTypes.func,
  mouseOverInfo: PropTypes.func,
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
PickerBaseSingle.defaultProps = {
  fieldLabel: 'Field Label',
  picker1: 'Picker 1',
  picker2: 'Picker 2',
  picker3: 'Picker 3',
  required: 'none',
  selectedOption: 1,
  info: false,
};
