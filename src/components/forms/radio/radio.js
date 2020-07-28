import * as PropTypes from 'prop-types';
import * as React from 'react';
import { uuid4 } from '../../../utils/utils';

/* eslint-disable */
/**
 * @uxpincomponent
 */
export default class Radio extends React.Component {
  render() {
    const radiosToRender = [];

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

    Array(11).fill()
        .forEach((_, i) => {
          if (this.props[`option${i}`]) {
            const uuid = uuid4();
            const inline = this.props.inline ? '-inline' : '';

            radiosToRender.push(
                <div className={`chi-form__item ${inline}`} key={`radio-${i}`}>
                  <div className="chi-radio">
                    <input className="chi-radio__input" type="radio" name={`radios-${uuid}`} id={uuid}
                           checked={i === this.props.selectedOption} disabled={this.props[`disabled${i}`]}
                           onChange={() => {
                           }}/>
                    <label onClick={(e) => {
                      selectRadio(e.target, uuid);
                      if (this.props[`select${i}`]) {
                        this.props[`select${i}`]();
                      }
                    }} className="chi-radio__label" htmlFor={uuid}>{this.props[`option${i}`]}</label>
                  </div>
                </div>
            );
          }
        });

    const required = <abbr class="chi-label__required" title="Required field">*</abbr>;
    const optional = <abbr class="chi-label__optional" title="Optional field">(optional)</abbr>;
    let message = '';

    if (this.props.required && this.props.required === 'required') {
      message = required;
    } else if (this.props.required && this.props.required === 'optional')  {
      message = optional;
    }
    const fieldLabel = this.props.fieldLabel ?
      <div className="chi-label">
        {this.props.fieldLabel}
        {message}
      </div> : '';
    return (
        <fieldset>
          {fieldLabel}
          {radiosToRender}
        </fieldset>
    );
  }
}

Radio.propTypes = {
  fieldLabel: PropTypes.string,
  required: PropTypes.oneOf(['none', 'required', 'optional']),
  inline: PropTypes.bool,
  selectedOption: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
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
  fieldLabel: 'Field Label',
  option1: 'Option 1',
  option2: 'Option 2',
  option3: 'Option 3',
  required: 'none',
};
