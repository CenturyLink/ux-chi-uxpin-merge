import * as PropTypes from 'prop-types';
import * as React from 'react';

/* eslint-disable */
/**
 * @uxpincomponent
 */
export default class Checkbox extends React.Component {
  render() {
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

    const info = this.props.info ?
    <div class="chi-label__help">
      <button class="chi-button -icon -sm -flat" id="example__help-button" aria-label="Help" data-target="#example__help-popover">
        <i class="chi-icon icon-circle-info-outline"></i>
      </button>
      <section class="chi-popover chi-popover--top -animated" id="example__help-popover" aria-modal="true" role="dialog" aria-hidden="true" x-placement="top">
        <div class="chi-popover__content">
          <p class="chi-popover__text">Helpful information goes here.</p>
        </div>
      </section>
    </div> : '';

    Array(11).fill()
        .forEach((_, i) => {
          if (this.props[`label${i}`]) {
            checkboxesToRender.push(
                <div className={`chi-form__item ${this.props.inline ? '-inline' : ''}`} key={`checkbox-${i}`}>
                  <div className="chi-checkbox">
                    <input type="checkbox" className="chi-checkbox__input" disabled={this.props[`disabled${i}`]}
                     checked={this.props[`checked${i}`]} onChange={(e) => {}} />
                    <label onClick={(e) => {
                      toggleCheckbox(e.target, i);
                    }} className="chi-checkbox__label" htmlFor="checkbox1">{this.props[`label${i}`]}</label>
                    {info}
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
          {checkboxesToRender}
        </fieldset>
    );
  }
}

Checkbox.propTypes = {
  fieldLabel: PropTypes.string,
  required: PropTypes.oneOf(['none', 'required', 'optional']),
  info: PropTypes.bool,
  inline: PropTypes.bool,
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
  info: false,
};
