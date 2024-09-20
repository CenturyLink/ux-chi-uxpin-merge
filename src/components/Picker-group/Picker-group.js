import * as PropTypes from 'prop-types';
import * as React from 'react';
import Icon from '../Icon/Icon';
import { uuid4 } from '../../utils/utils';
import {
  LABEL_CLASSES,
  PICKER_GROUP_CLASSES,
  STAT_CLASSES,
} from '../../constants/classes';

/* eslint-disable */
/**
 * @uxpincomponent
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export default class PickerGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: props.selected,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selected !== this.state.activeItem) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ activeItem: nextProps.selected });
    }
  }

  render() {
    const uuid = uuid4();
    const pickersToRender = [];
    const PICKERS_TO_RENDER = 11;
    const required = <abbr className={`${LABEL_CLASSES.REQUIRED}`} title="Required field">*</abbr>;
    const optional = <abbr className={`${LABEL_CLASSES.OPTIONAL}`} title="Optional field">(optional)</abbr>;
    let message = '';

    if (this.props.required && this.props.required === 'required') {
      message = required;
    } else if (this.props.required && this.props.required === 'optional') {
      message = optional;
    }

    const info = this.props.info ?
    <div className={`${STAT_CLASSES.TITLE_HELP}`}>
      <Icon
        uxpId={`infoIcon-${uuid}`}
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

    const fieldLabel = this.props.fieldLabel ?
      <legend className={`${LABEL_CLASSES.LABEL}`}>
        {this.props.fieldLabel}
        {message}
        {info}
      </legend> : '';

    const description = (picker, description) => {
      return <>
        <div className={PICKER_GROUP_CLASSES.LABEL}>
          {picker}
        </div>
        <div style={{ whiteSpace: 'pre-wrap' }} className={PICKER_GROUP_CLASSES.LABEL}>
          {description}
        </div>
      </>
    }

    const handlerPickerClick = (i) => {
      this.setState({ activeItem: i });

      if (this.props[`select${i}`]) {
        this.props[`select${i}`]();
      }
    }

    Array(PICKERS_TO_RENDER).fill()
      .forEach((_, i) => {
        if (this.props[`picker${i}`]) {
          pickersToRender.push(
            <input
              readOnly
              className={PICKER_GROUP_CLASSES.INPUT}
              type="radio"
              name={`picker-${uuid}`}
              id={`picker-${uuid}-${i}`}
              checked={this.state.activeItem === i}
              disabled={this.props[`disabled${i}`]}
            />
          );
          pickersToRender.push(
            <label
              className={`${this.props[`description${i}`] ? PICKER_GROUP_CLASSES.LABEL_WRAPPER : ''} -${this.props.size}`}
              htmlFor={`picker-${uuid}-${i}`}
              onClick={() => handlerPickerClick(i)}>
              {this.props[`description${i}`] ?
                description(this.props[`picker${i}`], this.props[`description${i}`]) :
                this.props[`picker${i}`]}
            </label>
          );
        }
      });

    const minWidth = this.props.fluid ? 310 : 308;

    return (
      <div ref={this.props.uxpinRef} style={{ minWidth: minWidth }}>
        <fieldset>
          {fieldLabel}
          <div className={`${PICKER_GROUP_CLASSES.PICKER} ${this.props.fluid ? PICKER_GROUP_CLASSES.FLUID : ''}`}>
            <div className={PICKER_GROUP_CLASSES.CONTENT}>
              {pickersToRender}
            </div>
          </div>
        </fieldset>
      </div>
    );
  }
}

PickerGroup.propTypes = {
  fieldLabel: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  required: PropTypes.oneOf(['none', 'required', 'optional']),
  selected: PropTypes.oneOf(['None', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
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
  fluid: PropTypes.bool,
  picker1: PropTypes.string,
  /** @uxpincontroltype textfield(4) */
  description1: PropTypes.string,
  disabled1: PropTypes.bool,
  picker2: PropTypes.string,
  /** @uxpincontroltype textfield(4) */
  description2: PropTypes.string,
  disabled2: PropTypes.bool,
  picker3: PropTypes.string,
  /** @uxpincontroltype textfield(4) */
  description3: PropTypes.string,
  disabled3: PropTypes.bool,
  picker4: PropTypes.string,
  /** @uxpincontroltype textfield(4) */
  description4: PropTypes.string,
  disabled4: PropTypes.bool,
  picker5: PropTypes.string,
  /** @uxpincontroltype textfield(4) */
  description5: PropTypes.string,
  disabled5: PropTypes.bool,
  picker6: PropTypes.string,
  /** @uxpincontroltype textfield(4) */
  description6: PropTypes.string,
  disabled6: PropTypes.bool,
  picker7: PropTypes.string,
  /** @uxpincontroltype textfield(4) */
  description7: PropTypes.string,
  disabled7: PropTypes.bool,
  picker8: PropTypes.string,
  /** @uxpincontroltype textfield(4) */
  description8: PropTypes.string,
  disabled8: PropTypes.bool,
  picker9: PropTypes.string,
  /** @uxpincontroltype textfield(4) */
  description9: PropTypes.string,
  disabled9: PropTypes.bool,
  picker10: PropTypes.string,
  /** @uxpincontroltype textfield(4) */
  description10: PropTypes.string,
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

PickerGroup.defaultProps = {
  size: 'md',
  required: 'none',
  selected: 1,
  info: false,
};
