import * as PropTypes from 'prop-types';
import * as React from 'react';

/* eslint-disable */
export default class Checkbox extends React.Component {
  render() {
    const checkboxesToRender = [];

    Array(11).fill()
        .forEach((_, i) => {
          if (this.props[`label${i}`]) {
            checkboxesToRender.push(
                <div className={`chi-form__item ${this.props.inline ? '-inline' : ''}`}>
                  <div className="chi-checkbox">
                    <input type="checkbox" className="chi-checkbox__input" disabled={this.props[`disabled${i}`]}
                           checked={this.props[`checked${i}`]}/>
                    <label className="chi-checkbox__label" htmlFor="checkbox1">{this.props[`label${i}`]}</label>
                  </div>
                </div>
            );
          }
        });
    const fieldLabel = this.props.fieldLabel ? <div className="chi-label">{this.props.fieldLabel}</div> : '';
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
  checked10: PropTypes.bool
};
/* eslint-enable */

Checkbox.defaultProps = {
  fieldLabel: 'Field Label',
  label1: 'Checkbox 1 label',
  label2: 'Checkbox 2 label',
  label3: 'Checkbox 3 label',
};
