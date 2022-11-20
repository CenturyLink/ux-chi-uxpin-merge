import * as PropTypes from 'prop-types';
import * as React from 'react';
import { PICKER_TYPES } from '../../constants/classes';
import PickerBase from '../Picker-base/PickerBase';

/* eslint-disable */

export default class PickerCheckbox extends React.Component {
  render() {
    return (
      <PickerBase
        mode = {PICKER_TYPES.CHECKBOX}
        fieldLabel = {this.props.fieldLabel}
        required = {this.props.required}
        contentWidth = {this.props.contentWidth}
        info = {this.props.info}
        clickInfo = {this.props.clickInfo}
        mouseOverInfo = {this.props.mouseOverInfo}
        mouseLeaveInfo = {this.props.mouseLeaveInfo}
        picker1 = {this.props.picker1}
        description1 = {this.props.description1}
        disabled1 = {this.props.disabled1}
        checked1 = {this.props.checked1}
        picker2 = {this.props.picker2}
        description2 = {this.props.description2}
        disabled2 = {this.props.disabled2}
        checked2 = {this.props.checked2}
        picker3 = {this.props.picker3}
        description3 = {this.props.description3}
        disabled3 = {this.props.disabled3}
        checked3 = {this.props.checked3}
        picker4 = {this.props.picker4}
        description4 = {this.props.description4}
        disabled4 = {this.props.disabled4}
        checked4 = {this.props.checked4}
        picker5 = {this.props.picker5}
        description5 = {this.props.description5}
        disabled5 = {this.props.disabled5}
        checked5 = {this.props.checked5}
        picker6 = {this.props.picker6}
        description6 = {this.props.description6}
        disabled6 = {this.props.disabled6}
        checked6 = {this.props.checked6}
        picker7 = {this.props.picker7}
        description7 = {this.props.description7}
        disabled7 = {this.props.disabled7}
        checked7 = {this.props.checked7}
        picker8 = {this.props.picker8}
        description8 = {this.props.description8}
        disabled8 = {this.props.disabled8}
        checked8 = {this.props.checked8}
        picker9 = {this.props.picker9}
        description9 = {this.props.description9}
        disabled9 = {this.props.disabled9}
        checked9 = {this.props.checked9}
        picker10 = {this.props.picker10}
        description10 = {this.props.description10}
        disabled10 = {this.props.disabled10}
        checked10 = {this.props.checked10}
        select1={this.props.select1}
        select2={this.props.select2}
        select3={this.props.select3}
        select4={this.props.select4}
        select5={this.props.select5}
        select6={this.props.select6}
        select7={this.props.select7}
        select8={this.props.select8}
        select9={this.props.select9}
        select10={this.props.select10}>
      </PickerBase>
    );
  }
}

PickerCheckbox.propTypes = {
  fieldLabel: PropTypes.string,
  required: PropTypes.oneOf(['none', 'required', 'optional']),
  contentWidth: PropTypes.oneOf(['20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%']),
  info: PropTypes.bool,
  clickInfo: PropTypes.func,
  mouseOverInfo: PropTypes.func,
  mouseLeaveInfo: PropTypes.func,
  picker1: PropTypes.string,
  description1: PropTypes.string,
  disabled1: PropTypes.bool,
  checked1: PropTypes.bool,
  picker2: PropTypes.string,
  description2: PropTypes.string,
  disabled2: PropTypes.bool,
  checked2: PropTypes.bool,
  picker3: PropTypes.string,
  description3: PropTypes.string,
  disabled3: PropTypes.bool,
  checked3: PropTypes.bool,
  picker4: PropTypes.string,
  description4: PropTypes.string,
  disabled4: PropTypes.bool,
  checked4: PropTypes.bool,
  picker5: PropTypes.string,
  description5: PropTypes.string,
  disabled5: PropTypes.bool,
  checked5: PropTypes.bool,
  picker6: PropTypes.string,
  description6: PropTypes.string,
  disabled6: PropTypes.bool,
  checked6: PropTypes.bool,
  picker7: PropTypes.string,
  description7: PropTypes.string,
  disabled7: PropTypes.bool,
  checked7: PropTypes.bool,
  picker8: PropTypes.string,
  description8: PropTypes.string,
  disabled8: PropTypes.bool,
  checked8: PropTypes.bool,
  picker9: PropTypes.string,
  description9: PropTypes.string,
  disabled9: PropTypes.bool,
  checked9: PropTypes.bool,
  picker10: PropTypes.string,
  description10: PropTypes.string,
  disabled10: PropTypes.bool,
  checked10: PropTypes.bool,
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
PickerCheckbox.defaultProps = {
  fieldLabel: 'Field Label',
  contentWidth: '100%',
  picker1: 'Picker 1',
  picker2: 'Picker 2',
  picker3: 'Picker 3',
  required: 'none',
  info: false,
};
