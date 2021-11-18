import * as PropTypes from 'prop-types';
import * as React from 'react';
import { DROPDOWN_CLASSES, BUTTON_CLASSES, ICON_CLASS, ACTIVE_CLASS } from '../../constants/classes';
import { uuid4 } from '../../utils/utils';

/**
 * @uxpincomponent
 * @uxpinwrappers
 */

export default class DropdownIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: uuid4() };
  }

  render() {
    const itemsToRender = [];

    Array(11).fill()
      .forEach((_, i) => {
        if (this.props[`item${i}`]) {
          itemsToRender.push(
            <a
              className={`${DROPDOWN_CLASSES.ITEM}`}
              href="#"
              onClick={(e) => {
                const currentItemActive = e.target.parentNode.querySelector('a.-active');

                if (currentItemActive) currentItemActive.classList.remove(ACTIVE_CLASS);
                this.props[`select${i}`]();
                e.target.classList.add(ACTIVE_CLASS)
              }
              }>{this.props[`item${i}`]}</a >
          );
        }
      })

    return (
      <div className={`${DROPDOWN_CLASSES.DROPDOWN}`} ref={this.props.uxpinRef}>
        <button
          id={this.state.id}
          className={`
            ${BUTTON_CLASSES.BUTTON}  ${BUTTON_CLASSES.ICON_BUTTON}  ${BUTTON_CLASSES.FLAT}
            ${this.props.disabled ? '-disabled' : ''} ${this.props.size ? `-${this.props.size}` : '-md'}
          `}
          data-position={this.props.position}
          onClick={() => chi.dropdown(document.getElementById(this.state.id))}>
          <div className={BUTTON_CLASSES.CONTENT}>
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
            ${this.props.active ? ACTIVE_CLASS : ''}
          `}
          style={{
            height: `${this.props.height && this.props.scrollItems ? `${this.props.height}px` : ''}`,
            width: `${this.props.width ? `${this.props.width}px` : ''}`,
          }}>
          {itemsToRender}
        </div>
      </div>
    );
  }
}

DropdownIcon.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  position: PropTypes.oneOf(['initial', 'top-start', 'top', 'top-end', 'left-start', 'left', 'left-end', 'right-start', 'right', 'right-end', 'bottom-start', 'bottom', 'bottom-end']),
  color: PropTypes.oneOf(['primary', 'dark', 'grey', 'secondary', 'light', 'success', 'info', 'warning', 'danger', 'muted', 'navy', 'orange']),
  icon: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  width: PropTypes.string,
  height: PropTypes.string,
  item1: PropTypes.string,
  item2: PropTypes.string,
  item3: PropTypes.string,
  item4: PropTypes.string,
  item5: PropTypes.string,
  item6: PropTypes.string,
  item7: PropTypes.string,
  item8: PropTypes.string,
  item9: PropTypes.string,
  item10: PropTypes.string,
  scrollItems: PropTypes.bool,
  select1: PropTypes.func,
  select2: PropTypes.func,
  select3: PropTypes.func,
  select4: PropTypes.func,
  select5: PropTypes.func,
  select6: PropTypes.func,
  select7: PropTypes.func,
  select8: PropTypes.func,
  select9: PropTypes.func,
  select10: PropTypes.func
};

DropdownIcon.defaultProps = {
  icon: 'more-vert',
  size: 'md',
  item1: 'Item 1',
  item2: 'Item 2',
  item3: 'Item 3',
};
