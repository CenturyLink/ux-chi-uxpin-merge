import * as PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';

/* eslint-disable */
/**
 * @uxpincomponent
 */
export default function SearchInput(props) {
  const chiSearchInput = useRef(null);
  const helperMessage = props.helperMessage
    ? props.helperMessageState === 'danger' ? (
    <chi-helper-message state={props.helperMessageState}>{props.helperMessage}</chi-helper-message>
  ) : (
    <chi-helper-message>{props.helperMessage}</chi-helper-message>
  ) : '';

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
      <>
        <chi-search-input
            size={props.size}
            disabled={props.disabled}
            value={props.value}
            placeholder={props.placeholder}
            ref={chiSearchInput}
        >
          <div className="-sr--only">SI</div>
        </chi-search-input>
        {helperMessage}
      </>
  );
}

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  helperMessage: PropTypes.string,
  helperMessageState: PropTypes.oneOf(['default', 'danger']),
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
  helperMessageState: 'default',
};
