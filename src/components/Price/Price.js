import * as PropTypes from 'prop-types';
import * as React from 'react';
import { PRICE_CLASSES } from '../../constants/classes';

/**
 * @uxpincomponent
 */
const Price = (props) => {
  return (
    <div className={`${PRICE_CLASSES.PRICE} ${props.size ? `-${props.size}` : ''}`}>
      <sup>{props.supA}</sup>
      {props.value}
      <sup>{props.supB}</sup>
    </div>
  );
}

Price.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  supA: PropTypes.string,
  value: PropTypes.string,
  supB: PropTypes.string
};

Price.defaultProps = {
  size: 'md',
  supA: '$',
  value: '100',
  supB: '00',
};

export default Price;