import * as PropTypes from 'prop-types';
import * as React from 'react';
import { DROPDOWN_CLASSES, BUTTON_CLASSES, ICON_CLASS } from '../../constants/classes';
import { uuid4 } from '../../utils/utils';

/**
 * @uxpincomponent
 * @uxpinwrappers
 */

export default class DropdownIconButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: uuid4() };
  }

  render() {
    return (
      <div className={`${DROPDOWN_CLASSES.DROPDOWN}`} ref={this.props.uxpinRef}>
        <button
          id={this.state.id}
          className={`
            ${BUTTON_CLASSES.BUTTON}  ${BUTTON_CLASSES.ICON_BUTTON}  ${BUTTON_CLASSES.FLAT}
            ${this.props.disabled ? '-disabled' : ''}
          `}
          onClick={() => chi.dropdown(document.getElementById(this.state.id))}>
          <div class="chi-button__content">
            <i className={`
                ${ICON_CLASS} 
                icon-${this.props.icon}
                ${this.props.size ? `-${this.props.size}` : '-md'}
                ${this.props.color === 'base' ? '' : `-icon--${this.props.color}`}
             `} aria-hidden="true"></i>
          </div>
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

DropdownIconButton.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  color: PropTypes.oneOf(['primary', 'dark', 'grey', 'secondary', 'light', 'success', 'info', 'warning', 'danger', 'muted', 'navy', 'orange']),
  icon: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'sm--2', 'sm--3', 'md', 'lg', 'xl', 'xxl']),
  width: PropTypes.number,
  height: PropTypes.number
};

DropdownIconButton.defaultProps = {
  icon: 'atom',
  size: 'md',
  width: 200,
  height: 200,
};
