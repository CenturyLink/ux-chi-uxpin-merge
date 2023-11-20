/* eslint-disable react/no-unused-prop-types */
import * as PropTypes from 'prop-types';
import * as React from 'react';
import Label from '../Label/Label';
import {
  ACTIVE_CLASS,
  ANIMATE_CHEVRON_CLASS,
  BUTTON_CLASSES,
  DROPDOWN_CLASSES,
  LABEL_CLASSES,
  OVERFLOW_HIDDEN,
  UTILITY_CLASSES,
} from '../../constants/classes';
import { uuid4 } from '../../utils/utils';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

/**
 * @uxpincomponent
 * @uxpinwrappers
 */

export default class DropdownSearchItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uuid4(),
      active: false,
      text: '',
    };
    this.dropdownSearchItemsRef = React.createRef();
    this._syncTextWithSelectedItem = this._syncTextWithSelectedItem.bind(this);
  }

  _syncTextWithSelectedItem(item) {
    this.setState({ text: item });
  }

  componentDidMount() {
    const initialize = setInterval(() => {
      if (window.chi && document.getElementById(this.state.id)) {
        window.chi.dropdown(document.getElementById(this.state.id));
        clearInterval(initialize);
      }
    }, 1000);
  }

  handleButtonClick() {
    this.setState({ active: !this.state.active });
    if (this.props.buttonClick) {
      this.props.buttonClick();
    }
  }

  render() {
    const label = this.props.label ? (
      <Label
        htmlFor={this.state.id}
        required={this.props.required}
        label={this.props.label}
        info={this.props.info}
        infoPopoverTitle={this.props.infoPopoverTitle}
        infoPopoverDescription={this.props.infoPopoverDescription}
        infoPopoverPosition={this.props.infoPopoverPosition}>
      </Label>
    ) : null;

    return (
      // eslint-disable-next-line react/prop-types
      <div
        className={`${DROPDOWN_CLASSES.DROPDOWN} ${UTILITY_CLASSES.WIDTH[100]}`}
        ref={this.props.uxpinRef}>
        <div className={LABEL_CLASSES.WRAPPER}>
          {label}
        </div>
        <chi-button
          ref={this.dropdownSearchItemsRef}
          id={this.state.id}
          class={UTILITY_CLASSES.WIDTH[100]}
          extra-class={`
            ${UTILITY_CLASSES.WIDTH[100]}
            ${BUTTON_CLASSES.BUTTON}
            ${DROPDOWN_CLASSES.TRIGGER}
            ${this.state.active ? ACTIVE_CLASS : ''}
            ${this.props.animateChevron ? ANIMATE_CHEVRON_CLASS : ''}
            ${this.props.appSwitcher ? '-text--xl -px--1' : ''}
            ${UTILITY_CLASSES.TYPOGRAPHY.TEXT_NO_TRANSFORM}
          `}
          disabled={this.props.disabled}
          size={this.props.buttonSize ? `${this.props.buttonSize}` : 'md'}
          color={this.props.buttonColor === 'base' ? '' : `${this.props.buttonColor}`}
          variant={this.props.buttonType === 'solid' ? '' : `${this.props.buttonType}`}
          data-position={this.props.dropdownPosition}
          onClick={() => this.handleButtonClick()}>
          <span className={`${OVERFLOW_HIDDEN} ${UTILITY_CLASSES.TYPOGRAPHY.TEXT_TRUNCATE} ${UTILITY_CLASSES.WIDTH[100]} ${UTILITY_CLASSES.TEXT.LEFT}`}>
            {this.state.text || this.props.text}
          </span>
        </chi-button>
        <DropdownMenu
          showMenu
          showSearch={this.props.showSearch}
          scrollItems={this.props.scrollItems}
          visibleItems={this.props.visibleItems}
          active={this.props.active}
          retainSelection={this.props.retainSelection}
          selectedItem={this.props.selectedItem}
          width={this.props.dropdownFixedWidth ? this.props.dropdownFixedWidth : ''}
          syncText={this.props.syncTextWithSelectedItem ? this._syncTextWithSelectedItem : null}
          item1={this.props.item1 || ''}
          item2={this.props.item2 || ''}
          item3={this.props.item3 || ''}
          item4={this.props.item4 || ''}
          item5={this.props.item5 || ''}
          item6={this.props.item6 || ''}
          item7={this.props.item7 || ''}
          item8={this.props.item8 || ''}
          item9={this.props.item9 || ''}
          item10={this.props.item10 || ''}
          item11={this.props.item11 || ''}
          item12={this.props.item12 || ''}
          item13={this.props.item13 || ''}
          item14={this.props.item14 || ''}
          item15={this.props.item15 || ''}
          select1={this.props.select1}
          select2={this.props.select2}
          select3={this.props.select3}
          select4={this.props.select4}
          select5={this.props.select5}
          select6={this.props.select6}
          select7={this.props.select7}
          select8={this.props.select8}
          select9={this.props.select9}
          select10={this.props.select10}
          select11={this.props.select11}
          select12={this.props.select12}
          select13={this.props.select13}
          select14={this.props.select14}
          select15={this.props.select15}
          iconRight1={this.props.iconRight1}
          iconRight2={this.props.iconRight2}
          iconRight3={this.props.iconRight3}
          iconRight4={this.props.iconRight4}
          iconRight5={this.props.iconRight5}
          iconRight6={this.props.iconRight6}
          iconRight7={this.props.iconRight7}
          iconRight8={this.props.iconRight8}
          iconRight9={this.props.iconRight9}
          iconRight10={this.props.iconRight10}
          iconRight11={this.props.iconRight11}
          iconRight12={this.props.iconRight12}
          iconRight13={this.props.iconRight13}
          iconRight14={this.props.iconRight14}
          iconRight15={this.props.iconRight15}
          iconLeft1={this.props.iconLeft1}
          iconLeft2={this.props.iconLeft2}
          iconLeft3={this.props.iconLeft3}
          iconLeft4={this.props.iconLeft4}
          iconLeft5={this.props.iconLeft5}
          iconLeft6={this.props.iconLeft6}
          iconLeft7={this.props.iconLeft7}
          iconLeft8={this.props.iconLeft8}
          iconLeft9={this.props.iconLeft9}
          iconLeft10={this.props.iconLeft10}
          iconLeft11={this.props.iconLeft11}
          iconLeft12={this.props.iconLeft12}
          iconLeft13={this.props.iconLeft13}
          iconLeft14={this.props.iconLeft14}
          iconLeft15={this.props.iconLeft15}>
        </DropdownMenu>
      </div>
    );
  }
}

/* eslint-disable sort-keys */
DropdownSearchItems.propTypes = {
  label: PropTypes.string,
  active: PropTypes.bool,
  showSearch: PropTypes.bool,
  animateChevron: PropTypes.bool,
  retainSelection: PropTypes.bool,
  scrollItems: PropTypes.bool,
  visibleItems: PropTypes.number,
  text: PropTypes.string,
  syncTextWithSelectedItem: PropTypes.bool,
  buttonColor: PropTypes.oneOf(['base', 'primary', 'dark', 'secondary', 'light']),
  buttonType: PropTypes.oneOf(['solid', 'outline', 'flat']),
  buttonSize: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  disabled: PropTypes.bool,
  dropdownPosition: PropTypes.oneOf(['top-start', 'top', 'top-end', 'left-start', 'left', 'left-end', 'right-start', 'right', 'right-end', 'bottom-start', 'bottom', 'bottom-end']),
  dropdownFixedWidth: PropTypes.string,
  selectedItem: PropTypes.oneOf(['None', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
  required: PropTypes.oneOf(['none', 'required', 'optional']),
  info: PropTypes.bool,
  infoPopoverTitle: PropTypes.string,
  /**
   * @uxpinpropname text
   * @uxpincontroltype textfield(10)
   * */
  infoPopoverDescription: PropTypes.string,
  infoPopoverPosition: PropTypes.oneOf(['right-start', 'top']),
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
  item11: PropTypes.string,
  item12: PropTypes.string,
  item13: PropTypes.string,
  item14: PropTypes.string,
  item15: PropTypes.string,
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
  iconLeft11: PropTypes.string,
  iconRight11: PropTypes.string,
  iconLeft12: PropTypes.string,
  iconRight12: PropTypes.string,
  iconLeft13: PropTypes.string,
  iconRight13: PropTypes.string,
  iconLeft14: PropTypes.string,
  iconRight14: PropTypes.string,
  iconLeft15: PropTypes.string,
  iconRight15: PropTypes.string,
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
  select11: PropTypes.func,
  select12: PropTypes.func,
  select13: PropTypes.func,
  select14: PropTypes.func,
  select15: PropTypes.func,
};

DropdownSearchItems.defaultProps = {
  scrollItems: true,
  buttonColor: 'base',
  buttonType: 'outline',
  buttonSize: 'md',
  dropdownPosition: 'bottom-start',
  selectedItem: 1,
};
