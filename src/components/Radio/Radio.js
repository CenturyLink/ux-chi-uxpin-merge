import * as PropTypes from 'prop-types';
import * as React from 'react';
import Icon from '../Icon/Icon';
import { uuid4 } from '../../utils/utils';
import {
  FORM_CLASSES,
  INLINE_CLASS,
  LABEL_CLASSES,
  RADIO_CLASSES,
  STAT_CLASSES,
  UTILITY_CLASSES,
} from '../../constants/classes';

/* eslint-disable */
/**
 * @uxpincomponent
 */
export default class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: uuid4() };
  }

  _setLayout() {
    const inline = `${FORM_CLASSES.ITEM} ${INLINE_CLASS}`;
    const vertical = `${UTILITY_CLASSES.COLUMN} ${UTILITY_CLASSES.MARGIN.BOTTOM[1]} -w--12`;

    return this.props.layout === "inline" ? inline : vertical;
  }

  render() {
    const radiosToRender = [];
    const RADIOS_TO_RENDER = 11;

    function selectRadio(radioLabel) {
      const input = radioLabel.parentNode.querySelector('input');
      const otherInputsInFieldset = radioLabel.parentNode.parentNode.parentNode.querySelectorAll('input');

      otherInputsInFieldset.forEach(input => {
        input.checked = false;
      });

      if (input) {
        input.checked = true;
      }
    }

    Array(RADIOS_TO_RENDER).fill()
      .forEach((_, i) => {
        if (this.props[`option${i}`]) {
          const uuid = `${this.state.id}-${i}`;

          radiosToRender.push(
            <div className={this._setLayout()} key={`radio-${i}`}>
              <div className={`${RADIO_CLASSES.RADIO}`}>
                <input
                  id={uuid}
                  type="radio"
                  className={`${RADIO_CLASSES.INPUT}`}
                  name={`radios-${uuid}`}
                  disabled={this.props[`disabled${i}`]}
                  checked={i === this.props.selectedOption}
                  onChange={(e) => {}}
                />
                <label
                  onClick={(e) => {
                    selectRadio(e.target, uuid);
                    if (this.props[`select${i}`]) {
                      this.props[`select${i}`]();
                    }
                  }}
                  className={RADIO_CLASSES.LABEL}
                  htmlFor={uuid}>
                  {this.props[`option${i}`]}
                </label>
              </div>
            </div>
          );
        }
      });

    const required = <abbr className={LABEL_CLASSES.REQUIRED} title="Required field">*</abbr>;
    const optional = <abbr className={LABEL_CLASSES.OPTIONAL} title="Optional field">(optional)</abbr>;
    let message = '';

    if (this.props.required && this.props.required === 'required') {
      message = required;
    } else if (this.props.required && this.props.required === 'optional') {
      message = optional;
    }

    const info = this.props.info ?
    <div className={`${STAT_CLASSES.TITLE_HELP}`}>
      <Icon
        uxpId={`infoIcon-${this.state.id}`}
        icon={'circle-info-outline'}
        size="xs"
        color="primary"
        mode="button"
        popover={true}
        popoverTitle={this.props.infoPopoverTitle}
        popoverDescription={this.props.infoPopoverDescription}
        popoverPosition={this.props.infoPopoverPosition}
      />
    </div> : '';

    const fieldLabel = this.props.fieldLabel
      ? (
        <div className={`${LABEL_CLASSES.LABEL}`}>
          {this.props.fieldLabel}
          {message}
          {info}
        </div>
      ) : '';

    const content = this.props.layout === `inline`
    ? (
      <div>
        {fieldLabel}
        {radiosToRender}
      </div>
    )
    : (
      <div className={UTILITY_CLASSES.GRID}>
        <div className={`${UTILITY_CLASSES.COLUMN} ${UTILITY_CLASSES.MARGIN.BOTTOM[1]} -w--12`}>
          {fieldLabel}
        </div>
        {radiosToRender}
      </div>
    );

    return (
      <fieldset>
        {content}
      </fieldset>
    );
  }
}

Radio.propTypes = {
  fieldLabel: PropTypes.string,
  required: PropTypes.oneOf(['none', 'required', 'optional']),
  layout: PropTypes.oneOf(['inline', 'vertical']),
  selectedOption: PropTypes.oneOf(['None', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
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
  clickInfo: PropTypes.func,
  /** @uxpinignoreprop */
  mouseOverInfo: PropTypes.func,
  /** @uxpinignoreprop */
  mouseLeaveInfo: PropTypes.func,
  option1: PropTypes.string,
  disabled1: PropTypes.bool,
  option2: PropTypes.string,
  disabled2: PropTypes.bool,
  option3: PropTypes.string,
  disabled3: PropTypes.bool,
  option4: PropTypes.string,
  disabled4: PropTypes.bool,
  option5: PropTypes.string,
  disabled5: PropTypes.bool,
  option6: PropTypes.string,
  disabled6: PropTypes.bool,
  option7: PropTypes.string,
  disabled7: PropTypes.bool,
  option8: PropTypes.string,
  disabled8: PropTypes.bool,
  option9: PropTypes.string,
  disabled9: PropTypes.bool,
  option10: PropTypes.string,
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

Radio.defaultProps = {
  selectedOption: 1,
  layout: 'vertical',
  required: 'none',
};
