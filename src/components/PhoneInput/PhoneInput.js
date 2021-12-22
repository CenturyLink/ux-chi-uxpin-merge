import * as PropTypes from 'prop-types';
import * as React from 'react';
import { uuid4 } from '../../utils/utils';
import { LABEL_CLASSES } from '../../constants/classes';

/**
 * @uxpincomponent
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
    this.key += 1;

    return (
      <div
        key={this.key}
        style={{
          width: `${this.props.width ? `${this.props.width}px` : ''}`,
        }}>
        <chi-label for={`phone-input-${this.state.id}`}>{this.props.label}</chi-label>
        <chi-phone-input
          default-country={this.mapCountry(this.props.country)}
          disabled={this.props.disabled}
          id={`phone-input-${this.state.id}`}
          placeholder={this.props.placeholder}
          size={this.props.size}
          state={this.props.state}
          value={this.props.value}>
        </chi-phone-input>
        {this.props.state && (
          <div className={`${LABEL_CLASSES.LABEL} -status -${this.props.state}`}>
            {this.props.stateLabel}
          </div>
        )}
      </div>
    );
  }
}

PhoneInput.propTypes = {
  disabled: PropTypes.bool,
  country: PropTypes.oneOf(['United States', 'Brazil', 'China', 'France', 'Germany', 'India', 'Italy', 'Russia', 'Spain', 'United Kingdom']),
  label: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  state: PropTypes.oneOf(['danger', 'success', 'warning']),
  stateLabel: PropTypes.string,
  value: PropTypes.string,
  width: PropTypes.number,
};

PhoneInput.defaultProps = {
  country: 'United States',
  label: 'Phone Number',
  size: 'md',
  width: 300,
};
