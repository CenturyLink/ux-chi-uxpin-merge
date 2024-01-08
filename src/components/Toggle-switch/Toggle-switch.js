import * as PropTypes from 'prop-types';
import * as React from 'react';
import Label from '../Label/Label';
import Icon from '../Icon/Icon';
import { uuid4 } from '../../utils/utils';
import { FORM_CLASSES, LABEL_CLASSES } from '../../constants/classes';

/**
 * @uxpincomponent
 */
export default class ToggleSwitch extends React.Component {
  key = 0;

  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.on,
      id: uuid4(),
    };
    this.switchRef = React.createRef();
  }

  componentDidMount() {
    const switchElement = this.switchRef.current;

    switchElement?.addEventListener('toggle', this._handlerToggle.bind(this));
  }

  componentDidUpdate(prevProps) {
    const newPropOn = this.props.on;

    if (prevProps.on !== newPropOn && this.state.checked !== newPropOn) {
      this.setState({ checked: newPropOn });
    }
  }

  componentWillUnmount() {
    const switchElement = this.switchRef.current;

    switchElement?.removeEventListener('toggle', this._handlerToggle.bind(this));
  }

  _executeInteraction(on) {
    if (on) {
      this.props.turnOn?.();
      return;
    }

    this.props.turnOff?.();
  }

  _handlerToggle() {
    this.setState({ checked: !this.state.checked }, this._executeInteraction(!this.state.checked));
  }

  render() {
    const info = this.props.info ? (
      <div className={LABEL_CLASSES.HELP}>
        <Icon
          uxpId={`infoIcon-${this.state.id}`}
          icon="circle-info-outline"
          size="xs"
          color="primary"
          mode="button"
          popover
          popoverTitle={this.props.infoPopoverTitle}
          popoverDescription={this.props.infoPopoverDescription}
          popoverPosition={this.props.infoPopoverPosition}
        />
      </div>
    ) : null;

    const label = this.props.label ? (
      <Label
        htmlFor={this.state.id}
        required={this.props.required}
        label={this.props.label}>
      </Label>
    ) : null;

    return (
      <div
        className={FORM_CLASSES.ITEM}
        key={this.key}
        ref={this.props.uxpinRef}>
        <div className={LABEL_CLASSES.WRAPPER}>
          {label}
          {info}
        </div>
        <chi-switch
          ref={this.switchRef}
          id={this.state.id}
          label={this.props.toggleLabel}
          size={this.props.size}
          checked={this.props.on}
          disabled={this.props.disabled}>
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
  /** @uxpinignoreprop */
  size: PropTypes.string,
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

ToggleSwitch.defaultProps = {
  on: false,
  disabled: false,
  size: 'sm',
  required: 'none',
};
