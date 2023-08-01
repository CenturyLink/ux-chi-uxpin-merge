import * as PropTypes from 'prop-types';
import * as React from 'react';
import PickerMulti from '../Picker-multi/PickerMulti';

/* eslint-disable */
export default class PickerPillMulti extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PickerMulti
        mode={'pillMulti'}
        selectedOption={this.props.selectedOption}
        fieldLabel={this.props.fieldLabel}
        required={this.props.required}
        contentWidth={this.props.contentWidth}
        size={this.props.size}
        radio={this.props.radio}
        checkbox={this.props.checkbox}
        info={this.props.info}
        pill={this.props.pill}
        pillSize={this.props.pillSize}
        pillLayout={this.props.pillLayout}
        infoPopoverTitle={this.props.infoPopoverTitle}
        infoPopoverDescription={this.props.infoPopoverDescription}
        infoPopoverPosition={this.props.infoPopoverPosition}
        clickInfo={this.props.clickInfo}
        mouseOverInfo={this.props.mouseOverInfo}
        mouseLeaveInfo={this.props.mouseLeaveInfo}
        picker1={this.props.picker1}
        description1={this.props.description1}
        disabled1={this.props.disabled1}
        checked1={this.props.checked1}
        picker2={this.props.picker2}
        description2={this.props.description2}
        disabled2={this.props.disabled2}
        checked2={this.props.checked2}
        picker3={this.props.picker3}
        description3={this.props.description3}
        disabled3={this.props.disabled3}
        checked3={this.props.checked3}
        picker4={this.props.picker4}
        description4={this.props.description4}
        disabled4={this.props.disabled4}
        checked4={this.props.checked4}
        picker5={this.props.picker5}
        description5={this.props.description5}
        disabled5={this.props.disabled5}
        checked5={this.props.checked5}
        picker6={this.props.picker6}
        description6={this.props.description6}
        disabled6={this.props.disabled6}
        checked6={this.props.checked6}
        picker7={this.props.picker7}
        description7={this.props.description7}
        disabled7={this.props.disabled7}
        checked7={this.props.checked7}
        picker8={this.props.picker8}
        description8={this.props.description8}
        disabled8={this.props.disabled8}
        checked8={this.props.checked8}
        picker9={this.props.picker9}
        description9={this.props.description9}
        disabled9={this.props.disabled9}
        checked9={this.props.checked9}
        picker10={this.props.picker10}
        description10={this.props.description10}
        disabled10={this.props.disabled10}
        checked10={this.props.checked10}
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
      ></PickerMulti>
    );
  }
}

PickerPillMulti.propTypes = {
  fieldLabel: PropTypes.string,
  /** @uxpinignoreprop */
  mode: PropTypes.oneOf(['multi', 'single', 'pillMulti', 'pillSingle']),
  /** @uxpinignoreprop */
  radio: PropTypes.bool,
  /** @uxpinignoreprop */
  selectedOption: PropTypes.oneOf(['None', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  required: PropTypes.oneOf(['none', 'required', 'optional']),
  /** @uxpinignoreprop */
  contentWidth: PropTypes.oneOf([
    '100%',
    '90%',
    '80%',
    '70%',
    '60%',
    '50%',
    '40%',
    '30%',
    '20%',
  ]),
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
  pill: PropTypes.bool,
  pillSize: PropTypes.oneOf(['xs', 'sm']),
  pillLayout: PropTypes.oneOf(['inline', 'vertical']),
  checkbox: PropTypes.bool,
  /** @uxpinignoreprop */
  mouseOverInfo: PropTypes.func,
  /** @uxpinignoreprop */
  mouseLeaveInfo: PropTypes.func,
  picker1: PropTypes.string,
  /** @uxpinignoreprop */
  description1: PropTypes.string,
  disabled1: PropTypes.bool,
  checked1: PropTypes.bool,
  picker2: PropTypes.string,
  /** @uxpinignoreprop */
  description2: PropTypes.string,
  disabled2: PropTypes.bool,
  checked2: PropTypes.bool,
  picker3: PropTypes.string,
  /** @uxpinignoreprop */
  description3: PropTypes.string,
  disabled3: PropTypes.bool,
  checked3: PropTypes.bool,
  picker4: PropTypes.string,
  /** @uxpinignoreprop */
  description4: PropTypes.string,
  disabled4: PropTypes.bool,
  checked4: PropTypes.bool,
  picker5: PropTypes.string,
  /** @uxpinignoreprop */
  description5: PropTypes.string,
  disabled5: PropTypes.bool,
  checked5: PropTypes.bool,
  picker6: PropTypes.string,
  /** @uxpinignoreprop */
  description6: PropTypes.string,
  disabled6: PropTypes.bool,
  checked6: PropTypes.bool,
  picker7: PropTypes.string,
  /** @uxpinignoreprop */
  description7: PropTypes.string,
  disabled7: PropTypes.bool,
  checked7: PropTypes.bool,
  picker8: PropTypes.string,
  /** @uxpinignoreprop */
  description8: PropTypes.string,
  disabled8: PropTypes.bool,
  checked8: PropTypes.bool,
  picker9: PropTypes.string,
  /** @uxpinignoreprop */
  description9: PropTypes.string,
  disabled9: PropTypes.bool,
  checked9: PropTypes.bool,
  picker10: PropTypes.string,
  /** @uxpinignoreprop */
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
PickerPillMulti.defaultProps = {
  mode: 'pillMulti',
  pill: true,
  pillSize: 'sm',
  pillLayout: 'inline',
  contentWidth: '100%',
  required: 'none',
  info: false,
  infoPopoverTitle: 'Popover Title',
  infoPopoverDescription: `Line 1
Line 2
Line 3`,
  infoPopoverPosition: 'right-start',
};
