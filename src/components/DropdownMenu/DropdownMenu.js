/* eslint-disable react/no-unused-prop-types */
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {
  ACTIVE_CLASS,
  DROPDOWN_CLASSES,
} from '../../constants/classes';
import { contains } from '../../utils/utils';

export default class DropdownMenu extends React.Component {
  activeItem;

  someDescription;

  constructor(props) {
    super(props);
    this.dropdownMenuRef = React.createRef();
    this.state = {
      active: this.props.active,
    };
  }

  _onClick = (e) => {
    const dropdownMenu = this.dropdownMenuRef.current;

    if (e.target !== document.body && e.target !== null && contains(e.target, dropdownMenu)) {
      const simulationMode = document.getElementsByClassName('canvas-main-container');

      if (simulationMode.length > 0) this.setState({ active: false });
    }
  }

  componentDidMount() {
    document.body.addEventListener('click', this._onClick);
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this._onClick);
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

          itemsToRender.push(
            // eslint-disable-next-line
            <a
              className={`
                  ${DROPDOWN_CLASSES.ITEM} 
                  ${i === this.props.selectedItem && this.props.retainSelection ? ACTIVE_CLASS : ''}
                `}
              ref={`dropdown-menu-ref-item-${i}`}
              onClick={(e) => {
                if (this.props.retainSelection) {
                  // eslint-disable-next-line react/no-string-refs
                  if (this.props.selectedItem && !this.activeItem) this.activeItem = this.refs[`dropdown-menu-ref-item-${this.props.selectedItem}`];
                  if (this.activeItem) this.activeItem.classList.remove(ACTIVE_CLASS);
                  this.activeItem = (e.target.classList.contains(DROPDOWN_CLASSES.ITEM_TITLE) || e.target.classList.contains(DROPDOWN_CLASSES.ITEM_DESCRIPTION)) ? e.target.parentElement : e.target;
                  this.activeItem.classList.add(ACTIVE_CLASS);
                }
                if (this.props.syncText) this.props.syncText(this.props[`item${i}`]);
                this.setState({ active: false });
                this.props[`select${i}`]();
              }}>
              {itemContent}
            </a>
          );
        }

        if (!this.someDescription && this.props[`item${i}Description`]) {
          this.someDescription = true;
        }
      });

    const dropdownMenu = (
      <div
        ref={this.dropdownMenuRef}
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
        {this.props.showMenu || this.props.active ? dropdownMenu : null}
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
