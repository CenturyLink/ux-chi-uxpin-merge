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
  ROW_CLASS,
  STAT_CLASSES,
  UTILITY_CLASSES,
} from '../../constants/classes';

/* eslint-disable */
export default class PickerMulti extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uuid4(),
      checked1: this.props.checked1,
      checked2: this.props.checked2,
      checked3: this.props.checked3,
      checked4: this.props.checked4,
      checked5: this.props.checked5,
      checked6: this.props.checked6,
      checked7: this.props.checked7,
      checked8: this.props.checked8,
      checked9: this.props.checked9,
      checked10: this.props.checked10,
      selectedOption: this.props.selectedOption,
    };
  }

  componentWillReceiveProps(nextProps) {
    for (let i = 1; i < 11; i++) {
      if (nextProps[`checked${i}`] !== this.state[`checked${i}`]) {
        this.setState({ [`checked${i}`]: nextProps[`checked${i}`] });
      }
    }

    if (nextProps.selectedOption !== this.state.selectedOption) {
      this.setState({ selectedOption: nextProps.selectedOption });
    }
  }

  _handlerPickerClick(pickerIndex) {
    this.setState({
      [`checked${pickerIndex}`]: !this.state[`checked${pickerIndex}`],
      selectedOption: pickerIndex,
    });
    this.props[`select${pickerIndex}`]();
  }

  _setMessage() {
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

    if (this.props.required !== "none") {
      return this.props.required === "required" ? required : optional;
    }

    return "";
  }

  _setInfo() {
    return (
      <div
        className={`${STAT_CLASSES.TITLE_HELP}`}
        onClick={this.props.clickInfo}
        onMouseEnter={this.props.mouseOverInfo}
        onMouseLeave={this.props.mouseLeaveInfo}
      >
        <button
          className={`${BUTTON_CLASSES.BUTTON} ${BUTTON_CLASSES.ICON_BUTTON} ${BUTTON_CLASSES.FLAT} ${GENERIC_SIZES.XS}`}
          aria-label="Help"
        >
          <i
            className={`${ICON_CLASS} ${ICON_CLASSES.ICON_CIRCLE_INFO} ${ICON_CLASSES.ICON_PRIMARY}`}
          ></i>
        </button>
      </div>
    );
  }

  _setContent(picker, pickerIndex) {
    const radio = <span className={PICKER_CLASSES.RADIO}></span>;
    const checkbox = <span className={PICKER_CLASSES.CHECKBOX}></span>;
    const content =
      this.props.checkbox || this.props.radio ? (
        <div className={`${FORM_CLASSES.ITEM} ${ROW_CLASS}`}>
          {this.props.checkbox ? checkbox : radio}
          <span className={PICKER_CLASSES.LABEL}>{picker}</span>
        </div>
      ) : (
        <div
          className={`${FORM_CLASSES.ITEM} ${ROW_CLASS} ${UTILITY_CLASSES.MARGIN.LEFT[0]}`}
        >
          <span
            className={`${PICKER_CLASSES.LABEL} ${UTILITY_CLASSES.MARGIN.LEFT[0]} ${UTILITY_CLASSES.PADDING.LEFT[0]}`}
          >
            {picker}
          </span>
        </div>
      );
    const contentWidth = this.props["contentWidth"] && this.props["contentWidth"] !== UTILITY_CLASSES.CONTENT_WIDTH[100]
      ? `-w--${this.props["contentWidth"].split("%")[0]}`
      : "";

    return (
      <label
        htmlFor={`picker-${this.state.id}-${pickerIndex}`}
        onClick={() => this._handlerPickerClick(pickerIndex)}
      >
        {!this.props[`description${pickerIndex}`] ? (
          content
        ) : (
          <div className={PICKER_CLASSES.CONTENT}>
            <div className={PICKER_CLASSES.CONTENT_START}>
              {content}
              <div
                className={`${PICKER_CLASSES.DESCRIPTION} ${contentWidth} ${!(this.props.checkbox || this.props.radio) ? '-ml--0' : ''}`}
              >
                {this.props[`description${pickerIndex}`]}
              </div>
            </div>
          </div>
        )}
      </label>
    );
  }

  _setFieldLabel(info) {
    return (
      <legend className={`${LABEL_CLASSES.LABEL}`}>
        {this.props.fieldLabel}
        {this.props.required ? this._setMessage() : ""}
        {info}
      </legend>
    );
  }

  _setChecked(pickerIndex) {
    if (this.props.mode === "multi") {
      return this.state[`checked${pickerIndex}`];
    } else {
      return pickerIndex === this.state.selectedOption;
    }
  }

  render() {
    const pickersToRender = [];
    const PICKERS_TO_RENDER = 11;
    const info = this.props.info ? this._setInfo() : "";
    const fieldLabel = this.props.fieldLabel ? this._setFieldLabel(info) : "";

    Array(PICKERS_TO_RENDER)
      .fill()
      .forEach((_, i) => {
        if (this.props[`picker${i}`]) {
          pickersToRender.push(
            <div className={`${PICKER_CLASSES.PICKER} -${this.props.size}`}>
              <input
                className={PICKER_CLASSES.INPUT}
                type={this.props.mode === "multi" ? "checkbox" : "radio"}
                id={`picker-${this.state.id}-${i}`}
                disabled={this.props[`disabled${i}`]}
                checked={this._setChecked(i)}
                onChange={(e) => {}}
              />
              {this._setContent(this.props[`picker${i}`], i)}
            </div>
          );
        }
      });

    return (
      <div ref={this.props.uxpinRef}>
        <fieldset>
          {fieldLabel}
          {pickersToRender}
        </fieldset>
      </div>
    );
  }
}

PickerMulti.propTypes = {
  fieldLabel: PropTypes.string,
  /** @uxpinignoreprop */
  mode: PropTypes.oneOf(['multi', 'single']),
  /** @uxpinignoreprop */
  radio: PropTypes.bool,
  /** @uxpinignoreprop */
  selectedOption: PropTypes.oneOf(['None', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  required: PropTypes.oneOf(['none', 'required', 'optional']),
  contentWidth: PropTypes.oneOf([
    '20%',
    '30%',
    '40%',
    '50%',
    '60%',
    '70%',
    '80%',
    '90%',
    '100%',
  ]),
  info: PropTypes.bool,
  size: PropTypes.oneOf(['md', 'lg']),
  checkbox: PropTypes.bool,
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
PickerMulti.defaultProps = {
  fieldLabel: 'Field Label',
  mode: 'multi',
  size: 'md',
  contentWidth: '100%',
  picker1: 'Picker 1',
  picker2: 'Picker 2',
  picker3: 'Picker 3',
  required: 'none',
  info: false,
};
