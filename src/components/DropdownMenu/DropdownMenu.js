/* eslint-disable react/no-unused-prop-types */
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {
  ACTIVE_CLASS,
  DROPDOWN_CLASSES,
  ICON_CLASS,
} from '../../constants/classes';
import { contains, uuid4 } from '../../utils/utils';

export default class DropdownMenu extends React.Component {
  someDescription;

  constructor(props) {
    super(props);
    this.state = {
      id: uuid4(),
      active: this.props.active,
      selectedItem: this.props.selectedItem,
    };
  }

  _onClick(e) {
    const dropdownMenu = this.refs[`dropdown-menu-ref-${this.state.id}`];

    if (e.target !== document.body && e.target !== null && dropdownMenu && (contains(e.target, dropdownMenu) || e.target !== dropdownMenu) && !e.target.classList.contains(DROPDOWN_CLASSES.ITEM)) {
      const simulationMode = document.getElementsByClassName('canvas-main-container');

      if (simulationMode.length > 0) this.setState({ active: false });
    }
  }

  componentDidMount() {
    document.body.addEventListener('click', this._onClick.bind(this));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.active !== this.state.active) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ active: nextProps.active });
    }
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this._onClick);
  }

  _handlerClickMenuItem(menuItemIndex) {
    if (this.props.syncText) this.props.syncText(this.props[`item${menuItemIndex}`]);
    this.setState({ active: false, selectedItem: menuItemIndex });
    this.props[`select${menuItemIndex}`]();
  }

  render() {
    const itemsToRender = [];
    const ITEMS_TO_RENDER = 11;

    Array(ITEMS_TO_RENDER).fill()
      .forEach((_, i) => {
        if (this.props[`item${i}`]) {
          const itemContent = this.props[`item${i}Description`] ? (
            <>
              <span className={`${DROPDOWN_CLASSES.ITEM_TITLE}`}>{this.props[`item${i}`]}</span>
              <span className={`${DROPDOWN_CLASSES.ITEM_DESCRIPTION}`}>{this.props[`item${i}Description`]}</span>
            </>
          ) : this.props[`item${i}`];
          const iconRight = this.props[`iconRight${i}`] ? (
            <i
              className={`
                ${ICON_CLASS}
                icon-${this.props[`iconRight${i}`]} 
                ${this.props[`iconRight${i}`] === DROPDOWN_CLASSES.ICON_CHEVRON_RIGHT ? '-ml--auto' : '-ml--2'} 
                -mr--0
              `}
              aria-hidden="true">
            </i>
          ) : null;
          const iconLeft = this.props[`iconLeft${i}`] ? (
            <i
              className={`
              ${ICON_CLASS} 
              icon-${this.props[`iconLeft${i}`]} 
              -ml--0 
              -mr--1
            `}
              aria-hidden="true">
            </i>
          ) : null;

          itemsToRender.push(
            // eslint-disable-next-line
            <a
              className={`
                  ${DROPDOWN_CLASSES.ITEM} 
                  ${i === this.state.selectedItem && this.props.retainSelection ? ACTIVE_CLASS : ''}
                `}
              onClick={() => this._handlerClickMenuItem(i)}>
              {iconLeft}
              {itemContent}
              {iconRight}
            </a>
          );
        }

        if (!this.someDescription && this.props[`item${i}Description`]) {
          this.someDescription = true;
        }
      });

    const dropdownMenu = (
      <div
        ref={`dropdown-menu-ref-${this.state.id}`}
        className={`
          ${DROPDOWN_CLASSES.MENU}
          ${this.state.active ? ACTIVE_CLASS : ''}
          ${this.someDescription ? '-list' : ''} 
        `}
        style={{
          height: `${this.props.height && this.props.scrollItems ? `${this.props.height}px` : ''}`,
          minHeight: `${this.props.height && !this.props.scrollItems ? `${this.props.height}px` : ''}`,
          width: `${this.props.width ? `${this.props.width}px` : ''}`,
          overflow: `${this.props.height && this.props.scrollItems ? 'auto' : ''}`,
        }}>
        {itemsToRender}
      </div>
    );

    return (
      <div ref={this.props.uxpinRef}>
        {this.props.showMenu || this.state.active ? dropdownMenu : null}
      </div>
    );
  }
}

/* eslint-disable sort-keys */
DropdownMenu.propTypes = {
  /** @uxpinignoreprop */
  showMenu: PropTypes.bool,
  active: PropTypes.bool,
  retainSelection: PropTypes.bool,
  scrollItems: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  selectedItem: PropTypes.oneOf(['None', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
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
  iconLeft1: PropTypes.string,
  iconRight1: PropTypes.string,
  iconLeft2: PropTypes.string,
  iconRight2: PropTypes.string,
  iconLeft3: PropTypes.string,
  iconRight3: PropTypes.string,
  iconLeft4: PropTypes.string,
  iconRight4: PropTypes.string,
  iconLeft5: PropTypes.string,
  iconRight5: PropTypes.string,
  iconLeft6: PropTypes.string,
  iconRight6: PropTypes.string,
  iconLeft7: PropTypes.string,
  iconRight7: PropTypes.string,
  iconLeft8: PropTypes.string,
  iconRight8: PropTypes.string,
  iconLeft9: PropTypes.string,
  iconRight9: PropTypes.string,
  iconLeft10: PropTypes.string,
  iconRight10: PropTypes.string,
  item1Description: PropTypes.string,
  item2Description: PropTypes.string,
  item3Description: PropTypes.string,
  item4Description: PropTypes.string,
  item5Description: PropTypes.string,
  item6Description: PropTypes.string,
  item7Description: PropTypes.string,
  item8Description: PropTypes.string,
  item9Description: PropTypes.string,
  item10Description: PropTypes.string,
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
  /** @uxpinignoreprop */
  syncText: PropTypes.func,
};

DropdownMenu.defaultProps = {
  active: true,
  retainSelection: false,
  height: '200',
  item1: 'Item 1',
  item2: 'Item 2',
  item3: 'Item 3',
  selectedItem: 1,
};
