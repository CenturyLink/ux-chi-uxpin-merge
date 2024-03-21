import * as PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';

/* eslint-disable */
/**
 * @uxpincomponent
 */
export default function SearchInput(props) {
  const chiSearchInput = useRef(null);

  useEffect(() => {
    chiSearchInput.current.addEventListener('chiFocus', () => props.focus());
    chiSearchInput.current.addEventListener('chiBlur', () => props.focusLost());
    chiSearchInput.current.addEventListener('click', () => props.click());
    chiSearchInput.current.addEventListener('chiChange', () => props.valueChange());
    chiSearchInput.current.addEventListener('chiClean', () => props.clear());
    chiSearchInput.current.addEventListener('chiInput', () => props.input());
    chiSearchInput.current.addEventListener('chiSearch', () => props.search());
  });

  return (
    <div ref={props.uxPinRef}>
      <chi-search-input
        size={props.size}
        disabled={props.disabled}
        value={props.value}
        placeholder={props.placeholder}
        ref={chiSearchInput}
      >
        <div className="-sr--only">SI</div>
      </chi-search-input>
    </div>
  );
}

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  disabled: PropTypes.bool,
  clear: PropTypes.func,
  click: PropTypes.func,
  focus: PropTypes.func,
  focusLost: PropTypes.func,
  input: PropTypes.func,
  valueChange: PropTypes.func,
  search: PropTypes.func,
};
/* eslint-enable */

SearchInput.defaultProps = {
  disabled: false,
  size: 'md',
};
