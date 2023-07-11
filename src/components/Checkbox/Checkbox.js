import * as PropTypes from 'prop-types';
import * as React from 'react';
import Icon from '../Icon/Icon';
import { uuid4 } from '../../utils/utils';
import {
  CHECKBOX_CLASSES,
  FORM_CLASSES,
  INLINE_CLASS,
  LABEL_CLASSES,
  STAT_CLASSES,
} from '../../constants/classes';

/* eslint-disable */
/**
 * @uxpincomponent
 */
export default class Checkbox extends React.Component {
  render() {
    const uuid = uuid4();
    const checkboxesToRender = [];
    const toggleCheckbox = (checkboxLabel, i) => {
      const input = checkboxLabel.parentNode.querySelector('input');

      if (input) {
        if (input.checked) {
          input.checked = false;
          if (this.props[`deselect${i}`]) {
            this.props[`deselect${i}`]();
          }
        } else {
          input.checked = true;
          if (this.props[`select${i}`]) {
            this.props[`select${i}`]();
          }
        }
      }
    };

    let layoutOptions;
    switch (this.props.layout) {
      case 'inline':
        layoutOptions = `${INLINE_CLASS}`;
        break;
      case 'vertical':
        layoutOptions = 'chi-col -w--12 -mb--1';
        break;
      case '2-col':
        layoutOptions = 'chi-col -w--6 -mb--1';
        break;
      case '3-col':
        layoutOptions = 'chi-col -w--4 -mb--1';
        break;
      case '4-col':
        layoutOptions = 'chi-col -w--3 -mb--1';
        break;
      case '6-col':
        layoutOptions = 'chi-col -w--2 -mb--1';
        break;
      default:
        layoutOptions = 'chi-col -w--12 -mb--1';
        break;
    }

    const info = this.props.info
      ? (
        <div className={`${STAT_CLASSES.TITLE_HELP}`}>
          <Icon
            uxpId={`infoIcon-${uuid}`}
            icon={'circle-info-outline'}
            size="xs"
            color="primary"
            mode="button"
            popover={true}
            popoverTitle={this.props.infoPopoverTitle}
            popoverDescription={this.props.infoPopoverDescription}
            popoverPosition={this.props.infoPopoverPosition}
          />
        </div>
      ) : '';

    Array(11).fill()
      .forEach((_, i) => {
        if (this.props[`label${i}`]) {
          checkboxesToRender.push(
            <div className={this.props.layout === 'inline' || this.props.inline ? `${FORM_CLASSES.ITEM} ${INLINE_CLASS}`  : layoutOptions} key={`checkbox-${i}`}>
              <div className={`${CHECKBOX_CLASSES.checkbox}`}>
                <input
                  type="checkbox"
                  className={`${CHECKBOX_CLASSES.INPUT}`}
                  disabled={this.props[`disabled${i}`]}
                  checked={this.props[`checked${i}`]}
                  onChange={(e) => {}}
                />
                <label
                  onClick={(e) => {
                    toggleCheckbox(e.target, i);
                  }}
                  className={`${CHECKBOX_CLASSES.LABEL}`}
                  htmlFor={`checkbox-${uuid}-${i}`}>
                  {this.props[`label${i}`]}
                </label>
              </div>
            </div>
          );
        }
      });

    const required = <abbr className={`${LABEL_CLASSES.REQUIRED}`} title="Required field">*</abbr>;
    const optional = <abbr className={`${LABEL_CLASSES.OPTIONAL}`} title="Optional field">(optional)</abbr>;
    let message = '';

    if (this.props.required && this.props.required === 'required') {
      message = required;
    } else if (this.props.required && this.props.required === 'optional') {
      message = optional;
    }

    const fieldLabel = this.props.fieldLabel
      ? (
        <div className={`${LABEL_CLASSES.LABEL}`}>
          {this.props.fieldLabel}
          {message}
          {info}
        </div>
      ) : '';

    const content = layoutOptions === `${INLINE_CLASS}`
      ? (
        <div>
          {fieldLabel}
          {checkboxesToRender}
        </div>
      )
      : (
        <div className="chi-grid">
          <div className="chi-col -w--12 -mb--1">
            {fieldLabel}
          </div>
          {checkboxesToRender}
        </div>
      );

    return (
      <fieldset>
        {content}
      </fieldset>
    );
  }
}

Checkbox.propTypes = {
  fieldLabel: PropTypes.string,
  required: PropTypes.oneOf(['none', 'required', 'optional']),
  /** @uxpinignoreprop */
  inline: PropTypes.bool,
  layout: PropTypes.oneOf(['inline', 'vertical', '2-col', '3-col', '4-col', '6-col']),
  info: PropTypes.bool,
  infoPopoverTitle: PropTypes.string,
  /**
    * A textArea controller for Text
    * @uxpinpropname text
    * @uxpincontroltype textfield(10)
    * */
  infoPopoverDescription: PropTypes.string,
  infoPopoverPosition: PropTypes.oneOf(['right-start', 'top']),
  clickInfo: PropTypes.func,
  /** @uxpinignoreprop */
  mouseOverInfo: PropTypes.func,
  /** @uxpinignoreprop */
  mouseLeaveInfo: PropTypes.func,
  label1: PropTypes.string,
  disabled1: PropTypes.bool,
  checked1: PropTypes.bool,
  label2: PropTypes.string,
  disabled2: PropTypes.bool,
  checked2: PropTypes.bool,
  label3: PropTypes.string,
  disabled3: PropTypes.bool,
  checked3: PropTypes.bool,
  label4: PropTypes.string,
  disabled4: PropTypes.bool,
  checked4: PropTypes.bool,
  label5: PropTypes.string,
  disabled5: PropTypes.bool,
  checked5: PropTypes.bool,
  label6: PropTypes.string,
  disabled6: PropTypes.bool,
  checked6: PropTypes.bool,
  label7: PropTypes.string,
  disabled7: PropTypes.bool,
  checked7: PropTypes.bool,
  label8: PropTypes.string,
  disabled8: PropTypes.bool,
  checked8: PropTypes.bool,
  label9: PropTypes.string,
  disabled9: PropTypes.bool,
  checked9: PropTypes.bool,
  label10: PropTypes.string,
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

Checkbox.defaultProps = {
  fieldLabel: 'Field Label',
  label1: 'Checkbox 1 label',
  label2: 'Checkbox 2 label',
  label3: 'Checkbox 3 label',
  required: 'none',
  layout: 'vertical',
  infoPopoverTitle: 'Popover Title',
  infoPopoverDescription: `Line 1
Line 2
Line 3`,
  infoPopoverPosition: 'right-start',
};
