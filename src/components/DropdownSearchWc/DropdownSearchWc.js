import React from 'react';
import PropTypes from 'prop-types';
import DropdownBaseWc from '../DropdownBaseWc/DropdownBaseWc';

/**
 * @uxpincomponent
 */
export default function DropdownSearchWc(props) {
  return <DropdownBaseWc {...props} />;
}

// #region PropTypes
DropdownSearchWc.propTypes = {
  fieldLabel: PropTypes.string,
  active: PropTypes.bool,
  showSearch: PropTypes.bool,
  animateChevron: PropTypes.bool,
  retainSelection: PropTypes.bool,
  visibleItems: PropTypes.number,
  text: PropTypes.string,
  buttonColor: PropTypes.oneOf(['base', 'primary', 'secondary', 'danger', 'dark', 'light']),
  buttonType: PropTypes.oneOf(['solid', 'outline', 'flat']),
  buttonSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  disabled: PropTypes.bool,
  required: PropTypes.oneOf(['none', 'required', 'optional']),
  info: PropTypes.bool,
  infoPopoverTitle: PropTypes.string,
  /**
   * @uxpinpropname text
   * @uxpincontroltype textfield(10)
   * */
  infoPopoverDescription: PropTypes.string,
  infoPopoverPosition: PropTypes.oneOf(['right-start', 'top']),
  dropdownHeight: PropTypes.string,
  dropdownFixedWidth: PropTypes.string,
  dropdownPosition: PropTypes.oneOf([
    'top-start',
    'top',
    'top-end',
    'left-start',
    'left',
    'left-end',
    'right-start',
    'right',
    'right-end',
    'bottom-start',
    'bottom',
    'bottom-end',
  ]),
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

DropdownSearchWc.defaultProps = {
  active: false,
  text: 'Dropdown component',
};
// #endregion
