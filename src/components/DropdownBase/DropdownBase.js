/* eslint-disable react/no-unused-prop-types */
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {
  ACTIVE_CLASS,
  ANIMATE_CHEVRON_CLASS,
  BUTTON_CLASSES,
  DISABLED_CLASS,
  DROPDOWN_CLASSES,
} from '../../constants/classes';
import { uuid4 } from '../../utils/utils';

/**
 * @uxpincomponent
 * @uxpinwrappers
 */

export default class DropdownBase extends React.Component {
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
          type="button"
          id={this.state.id}
          className={`
            ${BUTTON_CLASSES.BUTTON}
            ${DROPDOWN_CLASSES.TRIGGER}
            ${this.props.active ? ACTIVE_CLASS : ''}
            ${this.props.animateChevron ? ANIMATE_CHEVRON_CLASS : ''}
            ${this.props.disabled ? DISABLED_CLASS : ''}
            ${this.props.size ? `-${this.props.size}` : '-md'}
            ${this.props.buttonColor === 'base' ? '' : `-${this.props.buttonColor}`}
            ${this.props.buttonType === 'solid' ? '' : `-${this.props.buttonType}`}
          `}
          style={{ textTransform: 'none' }}
          data-position={this.props.position}
          onClick={() => this.props.buttonClick()}>
          {this.props.text}
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

/* eslint-disable sort-keys */
DropdownBase.propTypes = {
  active: PropTypes.bool,
  animateChevron: PropTypes.bool,
  text: PropTypes.string,
  buttonColor: PropTypes.oneOf(['base', 'primary', 'dark', 'secondary', 'light']),
  buttonType: PropTypes.oneOf(['solid', 'outline', 'flat']),
  disabled: PropTypes.bool,
  position: PropTypes.oneOf(['initial', 'top-start', 'top', 'top-end', 'left-start', 'left', 'left-end', 'right-start', 'right', 'right-end', 'bottom-start', 'bottom', 'bottom-end']),
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
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

DropdownBase.defaultProps = {
  animateChevron: true,
  text: 'Dropdown component',
  buttonColor: 'base',
  buttonType: 'flat',
  size: 'md',
  width: '200',
  height: '200',
};
