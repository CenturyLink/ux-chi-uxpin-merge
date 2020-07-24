import * as PropTypes from 'prop-types';
import * as React from 'react';
import Icon from '../Icon/Icon';
/**
 * @uxpincomponent
 */
/**
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
     ref={ uxpinRef }>
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
        <Icon icon="atom"></Icon>
      </div>
    </div>
  </div>
);

Card.propTypes = {
  portal: PropTypes.bool,
  state: PropTypes.oneOf(['active', 'active--alt', 'empty', 'no-border']),
  title: PropTypes.string,
  content: PropTypes.string,
};
/* eslint-enable */

Card.defaultProps = {
  portal: true,
  title: 'Title',
  content: 'Content',
};

export default Card;
