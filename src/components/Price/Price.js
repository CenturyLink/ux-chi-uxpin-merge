import * as PropTypes from 'prop-types';
import * as React from 'react';
import { PRICE_CLASSES } from '../../constants/classes';

/**
 * @uxpincomponent
 */
const Price = (props) => {
  return (
    <div className={`${PRICE_CLASSES.PRICE} ${props.size ? `-${props.size}` : ''}`}>
      <sup>{props.currency}</sup>
      {props.value}
      <sup>{props.decimal}</sup>
    </div>
  );
}

Price.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  currency: PropTypes.string,
  value: PropTypes.number,
  decimal: PropTypes.string
};

Price.defaultProps = {
  size: 'md',
  currency: '$',
  value: 100,
  decimal: '00',
};

export default Price;