/* eslint-disable react/no-unused-prop-types */
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {
  ACTIVE_CLASS,
  BUTTON_CLASSES,
  DISABLED_CLASS,
  DROPDOWN_CLASSES,
  ICON_CLASS,
} from '../../constants/classes';
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

  componentDidMount() {
    const initialize = setInterval(() => {
      if (window.chi && document.getElementById(this.state.id)) {
        window.chi.dropdown(document.getElementById(this.state.id));
        clearInterval(initialize);
      }
    }, 1000);
  }

  render() {
    const itemsToRender = [];

    Array(11).fill()
      .forEach((_, i) => {
        if (this.props[`item${i}`]) {
          itemsToRender.push(
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a
              className={`${DROPDOWN_CLASSES.ITEM}`}
              href="#"
              onClick={(e) => {
                const currentItemActive = e.target.parentNode.querySelector('a.-active');

                if (currentItemActive) currentItemActive.classList.remove(ACTIVE_CLASS);
                this.props[`select${i}`]();
                e.target.classList.add(ACTIVE_CLASS);
              }
              }>
              {this.props[`item${i}`]}
            </a>
          );
        }
      });

    return (
      // eslint-disable-next-line react/prop-types
      <div className={`${DROPDOWN_CLASSES.DROPDOWN}`} ref={this.props.uxpinRef}>
        <button
          id={this.state.id}
          type="button"
          className={`
            ${BUTTON_CLASSES.BUTTON}  ${BUTTON_CLASSES.ICON_BUTTON}  ${BUTTON_CLASSES.FLAT}
            ${this.props.disabled ? DISABLED_CLASS : ''} ${this.props.size ? `-${this.props.size}` : ''}
          `}
          data-position={this.props.position}
          onClick={() => this.props.buttonClick()}>
          <div className={BUTTON_CLASSES.CONTENT}>
            <i
              className={` ${ICON_CLASS} 
                icon-${this.props.icon} 
                ${this.props.color === 'base' ? '' : `${BUTTON_CLASSES.ICON_BUTTON}--${this.props.color}`}
              `}
              aria-hidden="true">
            </i>
          </div>
        </button>

        <div
          className={`
            ${DROPDOWN_CLASSES.MENU}
            ${this.props.active ? ACTIVE_CLASS : ''}
          `}
          style={{
            height: `${this.props.height && this.props.scrollItems ? `${this.props.height}px` : ''}`,
            minHeight: `${this.props.height && !this.props.scrollItems ? `${this.props.height}px` : ''}`,
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
  buttonClick: PropTypes.func,
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

DropdownIcon.defaultProps = {
  icon: 'more-vert',
  item1: 'Item 1',
  item2: 'Item 2',
  item3: 'Item 3',
};
