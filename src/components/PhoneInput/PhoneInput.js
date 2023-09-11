import * as PropTypes from 'prop-types';
import * as React from 'react';
import { uuid4 } from '../../utils/utils';
import Icon from '../Icon/Icon';
import Label from '../Label/Label';
import {
  LABEL_CLASSES,
  STAT_CLASSES,
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
        return { code: 'US', phoneCode: '+1-' };
      case 'Brazil':
        return { code: 'BR', phoneCode: '+55-' };
      case 'China':
        return { code: 'CN', phoneCode: '+86-' };
      case 'France':
        return { code: 'FR', phoneCode: '+33-' };
      case 'Germany':
        return { code: 'DE', phoneCode: '+49-' };
      case 'India':
        return { code: 'IN', phoneCode: '+91-' };
      case 'Italy':
        return { code: 'IT', phoneCode: '+39-' };
      case 'Russia':
        return { code: 'RU', phoneCode: '+7-' };
      case 'Spain':
        return { code: 'ES', phoneCode: '+34-' };
      case 'United Kingdom':
        return { code: 'GB', phoneCode: '+44-' };
      default:
        return { code: 'US', phoneCode: '+1-' };
    }
}

  render() {
    const label = this.props.label
      ? (
        <Label
          htmlFor={this.state.id}
          required={this.props.required}
          label={this.props.label}>
        </Label>
      )
      : null;
    const info = this.props.info
      ? (
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
          default-country={this.mapCountry(this.props.country).code}
          disabled={this.props.disabled}
          id={`phone-input-${this.state.id}`}
          placeholder={this.props.placeholder}
          size={this.props.size}
          state={this.props.state}
          value={`${this.mapCountry(this.props.country).phoneCode}${this.props.value}`}>
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
  infoPopoverTitle: PropTypes.string,
  /**
    * A textArea controller for Text
    * @uxpinpropname text
    * @uxpincontroltype textfield(10)
    * */
  infoPopoverDescription: PropTypes.string,
  infoPopoverPosition: PropTypes.oneOf(['right-start', 'top']),
  label: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  state: PropTypes.oneOf(['danger', 'success', 'warning']),
  value: PropTypes.string,
  input: PropTypes.func,
  valueChange: PropTypes.func,
  /** @uxpinignoreprop */
  clickInfo: PropTypes.func,
  /** @uxpinignoreprop */
  mouseLeaveInfo: PropTypes.func,
  /** @uxpinignoreprop */
  mouseOverInfo: PropTypes.func,
};
/* eslint-enable */

PhoneInput.defaultProps = {
  country: 'United States',
  required: 'none',
  size: 'md',
  infoPopoverTitle: 'Popover Title',
  infoPopoverDescription: `Line 1
Line 2
Line 3`,
  infoPopoverPosition: 'right-start',
};
