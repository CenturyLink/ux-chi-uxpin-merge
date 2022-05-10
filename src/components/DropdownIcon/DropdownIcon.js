/* eslint-disable react/no-unused-prop-types */
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {
  BUTTON_CLASSES,
  DISABLED_CLASS,
  DROPDOWN_CLASSES,
  ICON_CLASS,
} from '../../constants/classes';
import { uuid4 } from '../../utils/utils';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

/**
 * @uxpincomponent
 * @uxpinwrappers
 */

export default class DropdownIcon extends React.Component {
  activeItem;

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
          onClick={() => this.props.buttonClick()}
          style={{ textTransform: 'none' }}>
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
        <DropdownMenu
          active={this.props.active}
          retainSelection={this.props.retainSelection}
          selectedItem={this.props.selectedItem}
          width={this.props.width ? this.props.width : ''}
          height={this.props.height ? this.props.height : ''}
          item1={this.props.item1 ? this.props.item1 : ''}
          item2={this.props.item2 ? this.props.item2 : ''}
          item3={this.props.item3 ? this.props.item3 : ''}
          item4={this.props.item4 ? this.props.item4 : ''}
          item5={this.props.item5 ? this.props.item5 : ''}
          item6={this.props.item6 ? this.props.item6 : ''}
          item7={this.props.item7 ? this.props.item7 : ''}
          item8={this.props.item8 ? this.props.item8 : ''}
          item9={this.props.item9 ? this.props.item9 : ''}
          item10={this.props.item10 ? this.props.item10 : ''}
          item1Description={this.props.item1Description}
          item2Description={this.props.item2Description}
          item3Description={this.props.item3Description}
          item4Description={this.props.item4Description}
          item5Description={this.props.item5Description}
          item6Description={this.props.item6Description}
          item7Description={this.props.item7Description}
          item8Description={this.props.item8Description}
          item9Description={this.props.item9Description}
          item10Description={this.props.item10Description}
          select1={this.props.select1}
          select2={this.props.select2}
          select3={this.props.select3}
          select4={this.props.select4}
          select5={this.props.select5}
          select6={this.props.select6}
          select7={this.props.select7}
          select8={this.props.select8}
          select9={this.props.select9}
          select10={this.props.select10}>
        </DropdownMenu>
      </div>
    );
  }
}

DropdownIcon.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  retainSelection: PropTypes.bool,
  scrollItems: PropTypes.bool,
  position: PropTypes.oneOf(['initial', 'top-start', 'top', 'top-end', 'left-start', 'left', 'left-end', 'right-start', 'right', 'right-end', 'bottom-start', 'bottom', 'bottom-end']),
  color: PropTypes.oneOf(['primary', 'dark', 'grey', 'secondary', 'light', 'success', 'info', 'warning', 'danger', 'muted', 'navy', 'orange']),
  icon: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
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
  active: false,
  retainSelection: false,
  icon: 'more-vert',
  item1: 'Item 1',
  item2: 'Item 2',
  item3: 'Item 3',
  selectedItem: 1,
};
