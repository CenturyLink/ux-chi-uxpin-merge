import * as PropTypes from 'prop-types';
import * as React from 'react';
/**
 * @uxpincomponent
 * @uxpinwrappers
 * SkipContainerWrapper
 */
/* eslint-disable */
const Card = (props, {uxpinRef}) => (
  <div style={{
    minWidth: '336px',
    resize: 'both',
    overflow: 'hidden',
    color: '#fff'
  }}>
    <div className={`
      chi-card
      ${props.portal ? '-portal' : ''}
      ${props.state ? `-${props.state}` : ''}
      -w--100
      -h--100
      `}
      ref={ uxpinRef }>
        {props.title ?
        <div className="chi-card__header -sm">
          <div className="chi-card__title">
            {props.title}
          </div>
        </div>
        : ''}
      <div
          className="chi-card__content" style={{width: '100%', height: '100%'}}>
          <div className="chi-card__caption">
            {props.content}
          </div>
      </div>
    </div>
  </div>
);

Card.propTypes = {
  portal: PropTypes.bool,
  title: PropTypes.string,
  content: PropTypes.string
};
/* eslint-enable */

Card.defaultProps = {
  portal: true,
  title: 'Title',
};

export default Card;
