import * as PropTypes from 'prop-types';
import * as React from 'react';
import Label from '../Label/Label';
import Icon from '../Icon/Icon';
import { uuid4 } from '../../utils/utils';
import { LABEL_CLASSES, STAT_CLASSES } from '../../constants/classes';

/* eslint-disable */
/**
 * @uxpincomponent
 */
export default class ToggleSwitch extends React.Component {
  key = 0;

  constructor(props) {
    super(props);
    this.state = { id: uuid4() };
  }

  render() {
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

    const label = this.props.label
    ? (
      <Label
        className="chi-label"
        htmlFor={this.state.id}
        required={this.props.required}
        label={this.props.label}>
      </Label>
    )
    : null;

    return (
      <div
        key={this.key}
        ref={this.props.uxpinRef}>
        <div className={`${LABEL_CLASSES.WRAPPER}`}>
          {label}
          {info}
        </div>
        <chi-switch
          id={this.state.id}
          label={this.props.toggleLabel}
          size={this.props.size}
          checked={this.props.on}
          disabled={this.props.disabled}
        >
        </chi-switch>
      </div>
    );
  }
}

ToggleSwitch.propTypes = {
  label: PropTypes.string,
  toggleLabel: PropTypes.string,
  on: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['xs', 'md']),
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
  turnOn: PropTypes.func,
  turnOff: PropTypes.func,
};
/* eslint-enable */

ToggleSwitch.defaultProps = {
  label: 'Label',
  toggleLabel: 'Toggle Label',
  on: false,
  disabled: false,
  size: 'xs',
  required: 'none',
  info: false,
  infoPopoverTitle: 'Popover Title',
  infoPopoverDescription: `Line 1
  Line 2
  Line 3`,
  infoPopoverPosition: 'right-start',
};
