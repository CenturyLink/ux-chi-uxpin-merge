import * as PropTypes from 'prop-types';
import * as React from 'react';
import { PRICE_CLASSES } from '../../constants/classes';

/**
 * @uxpincomponent
 */
function Price(props) {
  const supA = props.supA ? <sup>{props.supA}</sup> : null;
  const supB = props.supB ? <sup>{props.supB}</sup> : null;

  return (
    <div className={`${PRICE_CLASSES.PRICE} ${props.size ? `-${props.size}` : ''}`}>
      {supA}
      {props.value}
      {supB}
    </div>
  );
}

Price.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  supA: PropTypes.string,
  value: PropTypes.string,
  supB: PropTypes.string,
};

Price.defaultProps = {
  size: 'md',
};

export default Price;
