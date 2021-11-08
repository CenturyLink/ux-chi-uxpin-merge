import * as PropTypes from 'prop-types';
import * as React from 'react';
import { DROPDOWN_CLASSES, BUTTON_CLASSES } from '../../constants/classes';
import { uuid4 } from '../../utils/utils';

/**
 * @uxpincomponent
 * @uxpinwrappers
 */

export default class DropdownBaseButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: uuid4() };
  }

  render() {
    return (
      <div className={`${DROPDOWN_CLASSES.DROPDOWN}`} ref={this.props.uxpinRef}>
        <button
          type="button"
          id={this.state.id}
          className={`
            ${BUTTON_CLASSES.BUTTON}
            ${DROPDOWN_CLASSES.TRIGGER}
            ${this.props.active ? '-active' : ''}
            ${this.props.animate ? '-animate' : ''}
            ${this.props.disabled ? '-disabled' : ''}
            ${this.props.size ? `-${this.props.size}` : '-md'}
            ${this.props.buttonColor === 'base' ? '' : `-${this.props.buttonColor}`}
            ${this.props.buttonType === 'solid' ? '' : `-${this.props.buttonType}`}

          `}
          onClick={() => chi.dropdown(document.getElementById(this.state.id))}>
          Dropdown Component
        </button>
        <div
          className={`
            ${DROPDOWN_CLASSES.MENU}
            ${this.props.active ? '-active' : ''}
          `}
          style={{
            height: `${this.props.height ? `${this.props.height}px` : '200px'}`,
            width: `${this.props.width ? `${this.props.width}px` : '200px'}`,
          }}>
        </div>
      </div>
    );
  }
}

DropdownBaseButton.propTypes = {
  active: PropTypes.bool,
  animate: PropTypes.bool,
  buttonColor: PropTypes.oneOf(['base', 'primary', 'dark', 'secondary', 'light']),
  buttonType: PropTypes.oneOf(['solid', 'outline', 'flat']),
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  width: PropTypes.number,
  height: PropTypes.number
};

DropdownBaseButton.defaultProps = {
  animate: true,
  buttonColor: 'base',
  buttonType: 'flat',
  size: 'md',
  width: 200,
  height: 200
};
