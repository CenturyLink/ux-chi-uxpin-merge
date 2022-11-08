import * as PropTypes from 'prop-types';
import * as React from 'react';
import { uuid4 } from '../../utils/utils';
import {
  BUTTON_CLASSES,
  FORM_CLASSES,
  ICON_CLASS,
  ICON_CLASSES,
  LABEL_CLASSES,
  PICKER_CLASSES,
  STAT_CLASSES,
  UTILITY_CLASSES,
} from '../../constants/classes';

/* eslint-disable */

export default class PickerBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: props.selected,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selected !== this.state.activeItem) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ activeItem: nextProps.selected });
    }
  }

  render() {
    const uuid = uuid4();
    const pickersToRender = [];
    const PICKERS_TO_RENDER = 11;
    const required = <abbr className={`${LABEL_CLASSES.REQUIRED}`} title="Required field">*</abbr>;
    const optional = <abbr className={`${LABEL_CLASSES.OPTIONAL}`} title="Optional field">(optional)</abbr>;
    let message = '';

    if (this.props.required && this.props.required === 'required') {
      message = required;
    } else if (this.props.required && this.props.required === 'optional') {
      message = optional;
    }

    const info = this.props.info ?
      <div className={`${STAT_CLASSES.TITLE_HELP}`}
        onClick={this.props.clickInfo}
        onMouseEnter={this.props.mouseOverInfo}
        onMouseLeave={this.props.mouseLeaveInfo}>
        <button className={`${BUTTON_CLASSES.BUTTON} ${BUTTON_CLASSES.ICON_BUTTON} ${BUTTON_CLASSES.FLAT} ${UTILITY_CLASSES.XS}`} aria-label="Help">
          <i className={`${ICON_CLASS} ${ICON_CLASSES.ICON_CIRCLE_INFO} ${ICON_CLASSES.ICON_PRIMARY}`}></i>
        </button>
      </div> : '';

    const fieldLabel = this.props.fieldLabel ?
      <legend className={`${LABEL_CLASSES.LABEL}`}>
        {this.props.fieldLabel}
        {message}
        {info}
      </legend> : '';

    const description = (picker, description) => {
      return <>
        <div className={PICKER_CLASSES.CONTENT_START}>
          <div className={`${FORM_CLASSES.ITEM} -row -ml--0`}>
            {picker}
          </div>
          <div className={`${PICKER_CLASSES.DESCRIPTION}${this.props['contentWidth'] ? ` -w--${this.props['contentWidth'].split('%')[0]}` : ''} -ml--0`}>
            {description}
          </div>
        </div>
      </>
    }

    const handlerPickerClick = (i) => {
      this.setState({ activeItem: i });

      if (this.props[`select${i}`]) {
        this.props[`select${i}`]();
      }
    }

    Array(PICKERS_TO_RENDER).fill()
      .forEach((_, i) => {
        if (this.props[`picker${i}`]) {
          pickersToRender.push(
            <div class="chi-picker">
              <input
                readOnly
                className={PICKER_CLASSES.INPUT}
                type="checkbox"
                name={`picker-${uuid}`}
                id={`picker-${uuid}-${i}`}
                checked={this.state.activeItem === i}
                disabled={this.props[`disabled${i}`]}
              />
              <label
                htmlFor={`picker-${uuid}-${i}`}
                onClick={() => handlerPickerClick(i)}>
                {this.props[`description${i}`] ?
                  description(this.props[`picker${i}`], this.props[`description${i}`]) :
                  this.props[`picker${i}`]}
              </label>
            </div>
          );
        }
      });

    const minWidth = 310;

    return (
      <div ref={this.props.uxpinRef} style={{ minWidth: minWidth }}>
        <fieldset>
          {fieldLabel}
          {pickersToRender}
        </fieldset>
      </div>
    );
  }
}

PickerBase.propTypes = {
  fieldLabel: PropTypes.string,
  required: PropTypes.oneOf(['none', 'required', 'optional']),
  contentWidth: PropTypes.oneOf(['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%']),
  selected: PropTypes.oneOf(['None', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  info: PropTypes.bool,
  clickInfo: PropTypes.func,
  mouseOverInfo: PropTypes.func,
  mouseLeaveInfo: PropTypes.func,
  picker1: PropTypes.string,
  description1: PropTypes.string,
  disabled1: PropTypes.bool,
  picker2: PropTypes.string,
  description2: PropTypes.string,
  disabled2: PropTypes.bool,
  picker3: PropTypes.string,
  description3: PropTypes.string,
  disabled3: PropTypes.bool,
  picker4: PropTypes.string,
  description4: PropTypes.string,
  disabled4: PropTypes.bool,
  picker5: PropTypes.string,
  description5: PropTypes.string,
  disabled5: PropTypes.bool,
  picker6: PropTypes.string,
  description6: PropTypes.string,
  disabled6: PropTypes.bool,
  picker7: PropTypes.string,
  description7: PropTypes.string,
  disabled7: PropTypes.bool,
  picker8: PropTypes.string,
  description8: PropTypes.string,
  disabled8: PropTypes.bool,
  picker9: PropTypes.string,
  description9: PropTypes.string,
  disabled9: PropTypes.bool,
  picker10: PropTypes.string,
  description10: PropTypes.string,
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
PickerBase.defaultProps = {
  fieldLabel: 'Field Label',
  contentWidth: '100%',
  picker1: 'Picker 1',
  picker2: 'Picker 2',
  picker3: 'Picker 3',
  required: 'none',
  selected: 1,
  info: false,
};
