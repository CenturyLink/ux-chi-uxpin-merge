import * as PropTypes from 'prop-types';
import * as React from 'react';
import Icon from '../Icon/Icon';
import { uuid4 } from '../../utils/utils';
import {
  FORM_CLASSES,
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
    const newValue = !this.state[`checked${pickerIndex}`];

    this.setState({
      [`checked${pickerIndex}`]: newValue,
      selectedOption: pickerIndex,
    });

    this.props[newValue ? `select${pickerIndex}` : `deselect${pickerIndex}`]();
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

    if (this.props.required !== 'none') {
      return this.props.required === 'required' ? required : optional;
    }

    return '';
  }

  _setInfo() {
    return (
      <div className={`${STAT_CLASSES.TITLE_HELP}`}>
        <Icon
          uxpId={`infoIcon-${this.state.id}`}
          icon={'circle-info-outline'}
          size="xs"
          color="teal"
          mode="button"
          popover={true}
          popoverTitle={this.props.infoPopoverTitle}
          popoverDescription={this.props.infoPopoverDescription}
          popoverPosition={this.props.infoPopoverPosition}
        />
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
        <div className={`${FORM_CLASSES.ITEM} ${ROW_CLASS} ${UTILITY_CLASSES.MARGIN.LEFT[0]}`}>
          <span
            className={`${PICKER_CLASSES.LABEL} ${UTILITY_CLASSES.MARGIN.LEFT[0]} ${UTILITY_CLASSES.PADDING.LEFT[0]}`}
          >
            {picker}
          </span>
        </div>
      );
    const maxContentWidth = '100%';
    const contentWidth =
      this.props['contentWidth'] && this.props['contentWidth'] !== maxContentWidth
        ? `-w--${this.props['contentWidth'].split('%')[0]}`
        : '';

    return (
      <label htmlFor={`picker-${this.state.id}-${pickerIndex}`} onClick={() => this._handlerPickerClick(pickerIndex)}>
        {!this.props[`description${pickerIndex}`] ? (
          content
        ) : (
          <div className={PICKER_CLASSES.CONTENT}>
            <div className={PICKER_CLASSES.CONTENT_START}>
              {content}
              <div
                style={{ whiteSpace: 'pre-wrap' }}
                className={`${PICKER_CLASSES.DESCRIPTION} ${contentWidth} ${
                  !(this.props.checkbox || this.props.radio) ? '-ml--0' : ''
                }`}
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
        {this.props.required ? this._setMessage() : ''}
        {info}
      </legend>
    );
  }

  _setChecked(pickerIndex) {
    if (this.props.mode === 'multi' || this.props.mode === 'pillMulti') {
      return this.state[`checked${pickerIndex}`];
    } else {
      return pickerIndex === this.state.selectedOption;
    }
  }

  render() {
    const pickersToRender = [];
    const PICKERS_TO_RENDER = 11;
    const info = this.props.info ? this._setInfo() : '';
    const fieldLabel = this.props.fieldLabel ? this._setFieldLabel(info) : '';

    Array(PICKERS_TO_RENDER)
      .fill()
      .forEach((_, i) => {
        if (this.props[`picker${i}`]) {
          pickersToRender.push(
            <div
              className={`${PICKER_CLASSES.PICKER} -${this.props.size} 
              ${this.props.pill ? `${this.props.pill ? '-pill' : ''} -${this.props.pillSize}` : ''}`}
            >
              <input
                className={PICKER_CLASSES.INPUT}
                type={this.props.mode === 'multi' || this.props.mode === 'pillMulti' ? 'checkbox' : 'radio'}
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
          {this.props.pill ? (
            <div className={`${this.props.pillLayout === 'vertical' ? '' : UTILITY_CLASSES.DISPLAY.FLEX}`}>
              {pickersToRender}
            </div>
          ) : (
            pickersToRender
          )}
        </fieldset>
      </div>
    );
  }
}

PickerMulti.propTypes = {
  fieldLabel: PropTypes.string,
  /** @uxpinignoreprop */
  mode: PropTypes.oneOf(['multi', 'single', 'pillMulti', 'pillSingle']),
  /** @uxpinignoreprop */
  radio: PropTypes.bool,
  /** @uxpinignoreprop */
  selectedOption: PropTypes.oneOf(['None', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  /** @uxpinignoreprop */
  pill: PropTypes.bool,
  /** @uxpinignoreprop */
  pillSize: PropTypes.oneOf(['xs', 'sm']),
  /** @uxpinignoreprop */
  pillLayout: PropTypes.oneOf(['inline', 'vertical']),
  required: PropTypes.oneOf(['none', 'required', 'optional']),
  contentWidth: PropTypes.oneOf(['100%', '90%', '80%', '70%', '60%', '50%', '40%', '30%', '20%']),
  info: PropTypes.bool,
  infoPopoverTitle: PropTypes.string,
  /**
   * A textArea controller for Text
   * @uxpinpropname text
   * @uxpincontroltype textfield(10)
   * */
  infoPopoverDescription: PropTypes.string,
  infoPopoverPosition: PropTypes.oneOf(['right-start', 'top']),
  size: PropTypes.oneOf(['md', 'lg']),
  checkbox: PropTypes.bool,
  /** @uxpinignoreprop */
  clickInfo: PropTypes.func,
  /** @uxpinignoreprop */
  mouseOverInfo: PropTypes.func,
  /** @uxpinignoreprop */
  mouseLeaveInfo: PropTypes.func,
  picker1: PropTypes.string,
  /** @uxpincontroltype textfield(4) */
  description1: PropTypes.string,
  disabled1: PropTypes.bool,
  checked1: PropTypes.bool,
  picker2: PropTypes.string,
  /** @uxpincontroltype textfield(4) */
  description2: PropTypes.string,
  disabled2: PropTypes.bool,
  checked2: PropTypes.bool,
  picker3: PropTypes.string,
  /** @uxpincontroltype textfield(4) */
  description3: PropTypes.string,
  disabled3: PropTypes.bool,
  checked3: PropTypes.bool,
  picker4: PropTypes.string,
  /** @uxpincontroltype textfield(4) */
  description4: PropTypes.string,
  disabled4: PropTypes.bool,
  checked4: PropTypes.bool,
  picker5: PropTypes.string,
  /** @uxpincontroltype textfield(4) */
  description5: PropTypes.string,
  disabled5: PropTypes.bool,
  checked5: PropTypes.bool,
  picker6: PropTypes.string,
  /** @uxpincontroltype textfield(4) */
  description6: PropTypes.string,
  disabled6: PropTypes.bool,
  checked6: PropTypes.bool,
  picker7: PropTypes.string,
  /** @uxpincontroltype textfield(4) */
  description7: PropTypes.string,
  disabled7: PropTypes.bool,
  checked7: PropTypes.bool,
  picker8: PropTypes.string,
  /** @uxpincontroltype textfield(4) */
  description8: PropTypes.string,
  disabled8: PropTypes.bool,
  checked8: PropTypes.bool,
  picker9: PropTypes.string,
  /** @uxpincontroltype textfield(4) */
  description9: PropTypes.string,
  disabled9: PropTypes.bool,
  checked9: PropTypes.bool,
  picker10: PropTypes.string,
  /** @uxpincontroltype textfield(4) */
  description10: PropTypes.string,
  disabled10: PropTypes.bool,
  checked10: PropTypes.bool,
  select1: PropTypes.func,
  deselect1: PropTypes.func,
  select2: PropTypes.func,
  deselect2: PropTypes.func,
  select3: PropTypes.func,
  deselect3: PropTypes.func,
  select4: PropTypes.func,
  deselect4: PropTypes.func,
  select5: PropTypes.func,
  deselect5: PropTypes.func,
  select6: PropTypes.func,
  deselect6: PropTypes.func,
  select7: PropTypes.func,
  deselect7: PropTypes.func,
  select8: PropTypes.func,
  deselect8: PropTypes.func,
  select9: PropTypes.func,
  deselect9: PropTypes.func,
  select10: PropTypes.func,
  deselect10: PropTypes.func,
};

/* eslint-enable */
PickerMulti.defaultProps = {
  mode: 'multi',
  size: 'md',
  contentWidth: '100%',
  required: 'none',
};
