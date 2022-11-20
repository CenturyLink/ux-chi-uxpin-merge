import * as PropTypes from 'prop-types';
import * as React from 'react';
import { uuid4 } from '../../utils/utils';
import {
  BUTTON_CLASSES,
  FORM_CLASSES,
  GENERIC_SIZES,
  ICON_CLASS,
  ICON_CLASSES,
  LABEL_CLASSES,
  PICKER_CLASSES,
  PICKER_TYPES,
  STAT_CLASSES,
  UTILITY_CLASSES,
} from '../../constants/classes';

/* eslint-disable */

export default class PickerBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedItems: this._getCheckedItems(this.props),
    };
    this._changeActivePicker = this._changeActivePicker.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ checkedItems: this._getCheckedItems(nextProps) });
  }

  _getCheckedItems(props) {
    let updatedItems = []
    for (let i = 1; i< 11; i++) {
      if (props[`checked${i}`]) {
        updatedItems.push(i);
      }
    }
    return updatedItems;
  }

  _changeActivePicker(pickerIndex) {
    const updatedItems = this.state.checkedItems.includes(pickerIndex) ?
      this.state.checkedItems.filter(item => item !== pickerIndex) :
      [...this.state.checkedItems, pickerIndex];
    this.setState({
      checkedItems: updatedItems
    })
  }

  _setMessage(requiredProp) {
    const required = (
      <abbr className={`${LABEL_CLASSES.REQUIRED}`} title="Required field">
        *
      </abbr>
    );
    const optional = (
      <abbr className={`${LABEL_CLASSES.OPTIONAL}`} title="Optional field">
        (optional)
      </abbr>
    );
  
    if (requiredProp !== "none") {
      return requiredProp === "required" ? required : optional;
    }
    return "";
  }

  _handlerPickerClick(pickerIndex, selectPickerFunc) {
    this.props.changeActivePicker ? this.props.changeActivePicker(pickerIndex) : this._changeActivePicker(pickerIndex);
    if (selectPickerFunc) {
      selectPickerFunc();
    }
  }

  _createInfo(info, clickInfo, mouseOverInfo, mouseLeaveInfo) {
    return info ?
      <div className={`${STAT_CLASSES.TITLE_HELP}`}
        onClick={clickInfo}
        onMouseEnter={mouseOverInfo}
        onMouseLeave={mouseLeaveInfo}>
        <button className={`${BUTTON_CLASSES.BUTTON} ${BUTTON_CLASSES.ICON_BUTTON} ${BUTTON_CLASSES.FLAT} ${GENERIC_SIZES.XS}`} aria-label="Help">
          <i className={`${ICON_CLASS} ${ICON_CLASSES.ICON_CIRCLE_INFO} ${ICON_CLASSES.ICON_PRIMARY}`}></i>
        </button>
      </div> : '';
  }

  _createFieldLabel(
    fieldLabel,
    required,
    info,
    clickInfo,
    mouseOverInfo,
    mouseLeaveInfo
  ) {
    return fieldLabel ?
      <legend className={`${LABEL_CLASSES.LABEL}`}>
        {fieldLabel}
        {this._setMessage(required)}
        {this._createInfo(info, clickInfo, mouseOverInfo, mouseLeaveInfo)}
      </legend> : '';
  }

  _createDescription (
    pickerType,
    description,
    pickerLabel,
    contentWidth,
  ) {
    return pickerType === PICKER_TYPES.BASE
      ? <div className={PICKER_CLASSES.CONTENT_START}>
          <div className={`${FORM_CLASSES.ITEM} -row ${UTILITY_CLASSES.MARGIN.LEFT[0]}`}>
            {pickerLabel}
          </div>
          <div className={`${PICKER_CLASSES.DESCRIPTION}${contentWidth ? ` -w--${parseInt(contentWidth.split('%')[0]) - 10}` : ''} ${UTILITY_CLASSES.MARGIN.LEFT[0]}`}>
            {description}
          </div>
        </div>
      : <div className={PICKER_CLASSES.CONTENT_START}>
          <div className={`${FORM_CLASSES.ITEM} -row ${description ? '' : `${UTILITY_CLASSES.MARGIN.TOP[0]}`}`}>
            <span className={pickerType === PICKER_TYPES.RADIO ? PICKER_CLASSES.RADIO : PICKER_CLASSES.CHECKBOX}></span>
            <span className={PICKER_CLASSES.LABEL}>{pickerLabel}</span>
          </div>
          <div className={`${PICKER_CLASSES.DESCRIPTION}${contentWidth ? ` -w--${parseInt(contentWidth.split('%')[0]) - 10}` : ''}`}>
            {description}
          </div>
        </div>
  }

  _createPickerLabel(pickerType, pickerLabel) {
    return pickerType === PICKER_TYPES.BASE ?
      pickerLabel :
      <div className={`${FORM_CLASSES.ITEM} -row`}>
        <span className={`${pickerType === PICKER_TYPES.RADIO ? PICKER_CLASSES.RADIO : PICKER_CLASSES.CHECKBOX} -ml--1`}></span>
        <span className={`${PICKER_CLASSES.LABEL} -ml--2`}>{pickerLabel}</span>
      </div>
  }

  _createPickersToRender(
    pickerType,
    props
  ){
    const uuid = uuid4();
    const pickersToRender = [];
    const PICKERS_TO_RENDER = 11;
  
    Array(PICKERS_TO_RENDER).fill()
      .forEach((_, i) => {
        if (props[`picker${i}`]) {
          pickersToRender.push(
            <div className={`${PICKER_CLASSES.PICKER}`}>
              <input
                readOnly
                className={PICKER_CLASSES.INPUT}
                type={pickerType === PICKER_TYPES.RADIO ? PICKER_TYPES.RADIO : PICKER_TYPES.CHECKBOX}
                name={`picker-${uuid}`}
                id={`picker-${uuid}-${i}`}
                checked={pickerType === PICKER_TYPES.RADIO ? props.selected === i : this.state.checkedItems.includes(i)}
                disabled={props[`disabled${i}`]}
              />
              <label
                htmlFor={`picker-${uuid}-${i}`}
                onClick={() => this._handlerPickerClick(i, props[`select${i}`])}>
                {props[`description${i}`] ?
                  this._createDescription(
                    pickerType,
                    props[`description${i}`],
                    props[`picker${i}`],
                    props['contentWidth']
                  ) :
                  this._createPickerLabel(pickerType, props[`picker${i}`])}
              </label>
            </div>
          );
        }
      });
    return pickersToRender;
  }

  render() {
    return (
      <div ref={this.props.uxpinRef}>
        <fieldset>
          {this._createFieldLabel(
            this.props.fieldLabel,
            this.props.required,
            this.props.info,
            this.props.clickInfo,
            this.props.mouseOverInfo,
            this.props.mouseLeaveInfo
          )}
          {this._createPickersToRender(
            this.props.mode ? this.props.mode : PICKER_TYPES.BASE,
            this.props
          )}
        </fieldset>
      </div>
    );
  }
}

PickerBase.propTypes = {
  fieldLabel: PropTypes.string,
  required: PropTypes.oneOf(['none', 'required', 'optional']),
  /** @uxpinignoreprop */
  mode: PropTypes.oneOf(['radio', 'checkbox']),
  /** @uxpinignoreprop */
  selected: PropTypes.oneOf(['None', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  /** @uxpinignoreprop */
  changeActivePicker: PropTypes.func,
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
PickerBase.defaultProps = {
  fieldLabel: 'Field Label',
  contentWidth: '100%',
  picker1: 'Picker 1',
  picker2: 'Picker 2',
  picker3: 'Picker 3',
  required: 'none',
  info: false,
};
