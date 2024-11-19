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
            color="teal"
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
          disabled={this.props.disabled}
          id={`phone-input-${this.state.id}`}
          placeholder={this.props.placeholder}
          size={this.props.size}
          state={this.props.state}
          value={`+${this.props.countryCode}-${this.props.phoneNumber}`}
          dynamic-value
        >
        </chi-phone-input>
      </div>
    );
  }
}

PhoneInput.propTypes = {
  /**
  * @uxpinpropname field label
  * */
  label: PropTypes.string,
  required: PropTypes.oneOf(['none', 'required', 'optional']),
  countryCode: PropTypes.string,
  phoneNumber: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  /**
  * @uxpinpropname info icon
  * */
  info: PropTypes.bool,
  infoPopoverTitle: PropTypes.string,
  /**
  * @uxpinpropname info popover text
  * @uxpincontroltype textfield(10)
  * */
  infoPopoverDescription: PropTypes.string,
  infoPopoverPosition: PropTypes.oneOf(['right-start', 'top']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  state: PropTypes.oneOf(['danger', 'success', 'warning']),
  /**
  * @uxpinpropname on input
  * */
  input: PropTypes.func,
  /**
  * @uxpinpropname on value change
  * */
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
  required: 'none',
  size: 'md',
  countryCode: '1',
};
