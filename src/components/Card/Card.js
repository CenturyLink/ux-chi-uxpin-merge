import * as PropTypes from 'prop-types';
import * as React from 'react';
/**
 * @uxpincomponent
 * @uxpinwrappers
 * SkipContainerWrapper
 */
/* eslint-disable */
const Card = (props, {uxpinRef}) => (
  <div className={`
    chi-card
    ${props.portal ? '-portal' : ''}
    ${props.state ? `-${props.state}` : ''}
    `}
     ref={ uxpinRef }
  style={{width: `${props.width}px`, height: `${props.height}px`}}>
    {props.title ?
      <div className="chi-card__header -sm">
        <div className="chi-card__title">
          {props.title}
        </div>
      </div>
      : ''}
    <div
        style={{display: 'flex'}}
        className="chi-card__content">
      <div className="chi-card__caption">
        {props.content}
      </div>
    </div>
  </div>
);

Card.propTypes = {
  portal: PropTypes.bool,
  state: PropTypes.oneOf(['active', 'active--alt', 'empty', 'no-border']),
  title: PropTypes.string,
  content: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};
/* eslint-enable */

Card.defaultProps = {
  portal: true,
  title: 'Title',
  content: 'Content',
  width: 336,
  height: 300,
};

export default Card;
