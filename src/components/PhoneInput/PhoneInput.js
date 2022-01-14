import * as PropTypes from 'prop-types';
import * as React from 'react';
import { uuid4 } from '../../utils/utils';
import Label from '../Label/Label';
import {
  BUTTON_CLASSES, ICON_CLASS,
  LABEL_CLASSES, STAT_CLASSES,
} from '../../constants/classes';

/* eslint-disable */
/**
 * @uxpincomponent
 * @uxpinwrappers
 * SkipContainerWrapper
 */

export default class PhoneInput extends React.Component {
  key = 0;

  constructor(props) {
    super(props);
    this.state = { id: uuid4() };
  }

  mapCountry(country) {
    switch (country) {
      case 'United States':
        return 'US';
      case 'Brazil':
        return 'BR';
      case 'China':
        return 'CN';
      case 'France':
        return 'FR';
      case 'Germany':
        return 'DE';
      case 'India':
        return 'IN';
      case 'Italy':
        return 'IT';
      case 'Russia':
        return 'RU';
      case 'Spain':
        return 'ES';
      case 'United Kingdom':
        return 'GB';
      default:
        return 'United States';
    }
  }

  render() {
    const label = this.props.label
      ? (
        <Label
          className={`${LABEL_CLASSES.LABEL}`}
          htmlFor={this.state.id}
          required={this.props.required}
          label={this.props.label}>
        </Label>
      )
      : null;
    const info = this.props.info
      ? (
        <div
          className={`${STAT_CLASSES.TITLE_HELP}`}
          onClick={this.props.clickInfo}
          onMouseEnter={this.props.mouseOverInfo}
          onMouseLeave={this.props.mouseLeaveInfo}>
          <button type="button" className={`${BUTTON_CLASSES.BUTTON} -icon -xs -flat`} aria-label="Help">
            <i className={`${ICON_CLASS} chi-icon icon-circle-info-outline -icon--primary`}></i>
          </button>
        </div>
      ) : '';

    this.key += 1;

    return (
      <div
        key={this.key}
        ref={this.props.uxpinRef}>
        <div className={`${LABEL_CLASSES.WRAPPER}`}>
          {label}
          {info}
        </div>
        <chi-phone-input
          default-country={this.mapCountry(this.props.country)}
          disabled={this.props.disabled}
          id={`phone-input-${this.state.id}`}
          placeholder={this.props.placeholder}
          size={this.props.size}
          state={this.props.state}
          value={this.props.value}>
        </chi-phone-input>
      </div>
    );
  }
}

PhoneInput.propTypes = {
  country: PropTypes.oneOf(['United States', 'Brazil', 'China', 'France', 'Germany', 'India', 'Italy', 'Russia', 'Spain', 'United Kingdom']),
  disabled: PropTypes.bool,
  required: PropTypes.oneOf(['none', 'required', 'optional']),
  info: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  state: PropTypes.oneOf(['danger', 'success', 'warning']),
  value: PropTypes.string,
  input: PropTypes.func,
  valueChange: PropTypes.func,
  clickInfo: PropTypes.func,
  mouseLeaveInfo: PropTypes.func,
  mouseOverInfo: PropTypes.func,
};
/* eslint-enable */

PhoneInput.defaultProps = {
  country: 'United States',
  label: 'Phone Number',
  required: 'none',
  size: 'md',
};
