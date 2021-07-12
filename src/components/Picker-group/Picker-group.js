import * as PropTypes from 'prop-types';
import * as React from 'react';
import { uuid4 } from '../../utils/utils';
import {
  BUTTON_CLASSES,
  ICON_CLASS,
  LABEL_CLASSES,
  STAT_CLASSES,
} from '../../constants/classes';

/* eslint-disable */
/**
 * @uxpincomponent
 * @uxpinwrappers
 */
export default function PickerGroup(props) {
  const pickersToRender = [];
  const uuid = uuid4();
  const required = <abbr className={`${LABEL_CLASSES.REQUIRED}`} title="Required field">*</abbr>;
  const optional = <abbr className={`${LABEL_CLASSES.OPTIONAL}`} title="Optional field">(optional)</abbr>;
  let message = '';

  if (props.required && props.required === 'required') {
    message = required;
  } else if (props.required && props.required === 'optional') {
    message = optional;
  }

  const info = props.info
    ? (
      <div
        className={`${STAT_CLASSES.TITLE_HELP}`}
        onClick={props.clickInfo}
        onMouseEnter={props.mouseOverInfo}
        onMouseLeave={props.mouseLeaveInfo}>
        <button className={`${BUTTON_CLASSES.BUTTON} -icon -sm -flat`} aria-label="Help">
          <i className={`${ICON_CLASS} icon-circle-info-outline -icon--primary`}></i>
        </button>
      </div>
    ) : '';

  const fieldLabel = props.fieldLabel
    ? (
      <legend className={`${LABEL_CLASSES.LABEL}`}>
        {props.fieldLabel}
        {message}
        {info}
      </legend>
    ) : '';

  Array(11).fill()
    .forEach((_, i) => {
      if (props[`picker${i}`]) {
        pickersToRender.push(
          <input
            className="chi-picker__input"
            type="radio"
            name="radio-base"
            id={`picker-${uuid}-${i}`}
            checked={props.selected === i}
            disabled={props[`disabled${i}`]}
          />
        );
        pickersToRender.push(
          <label
            htmlFor={`picker-${uuid}-${i}`}
            onClick={(e) => {
              if (props[`select${i}`]) {
                const clickedLabelId = e.target.getAttribute('for');
                const currentlyActivePicker = e.target.parentNode.querySelector('input[checked]');
                const inputToCheck = document.getElementById(clickedLabelId);

                props[`select${i}`]();
                currentlyActivePicker.checked = false;
                inputToCheck.checked = true;
              }
            }}>
            {props[`picker${i}`]}
          </label>
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


PickerGroup.propTypes = {
  fieldLabel: PropTypes.string,
  required: PropTypes.oneOf(['none', 'required', 'optional']),
  selected: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
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

PickerGroup.defaultProps = {
  fieldLabel: 'Field Label',
  picker1: 'Picker 1',
  picker2: 'Picker 2',
  picker3: 'Picker 3',
  required: 'none',
  info: false,
};
