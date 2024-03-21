import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DropdownBaseWc from '../DropdownBaseWc/DropdownBaseWc';
import { uuid4 } from '../../utils/utils';

/**
 * @uxpincomponent
 */
export default function DropdownIconWc(props) {
  const tooltipId = useState(uuid4());

  useEffect(() => {
    const initialize = setInterval(() => {
      if (window.chi && document.getElementById(tooltipId)) {
        window.chi.tooltip(document.getElementById(tooltipId));
        clearInterval(initialize);
      }
    }, 1000);

    return () => clearInterval(initialize);
  }, [tooltipId, props.tooltipMessage]);

  // TODO - Various colors to be supported for icons from chi
  return (
    <div data-tooltip={props.tooltipMessage} id={tooltipId}>
      <DropdownBaseWc {...props} />
    </div>
  );
}

// #region PropTypes
DropdownIconWc.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  retainSelection: PropTypes.bool,
  mode: PropTypes.oneOf(['base', 'checkbox', 'radio']),
  /** @uxpinpropname position */
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
  visibleItems: PropTypes.number,
  /** @uxpinignoreprop */
  buttonColor: PropTypes.oneOf(['base', 'primary', 'secondary', 'danger', 'dark', 'light']),
  icon: PropTypes.string,
  tooltipMessage: PropTypes.string,
  /** @uxpinpropname size */
  buttonSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  /** @uxpinignoreprop */
  buttonType: PropTypes.oneOf(['solid', 'outline', 'flat']),
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

DropdownIconWc.defaultProps = {
  active: false,
  mode: 'base',
};
// #endregion
