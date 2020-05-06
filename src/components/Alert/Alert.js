import * as PropTypes from 'prop-types';
import * as React from 'react';

const closeButton = <button className="chi-alert__close-button chi-button -icon -close" aria-label="Close">
  <div class="chi-btn__content">
    <i class="chi-icon icon-x"></i>
  </div>
</button>;

const Alert = (props) => (
  <div class={`chi-alert
    ${props.state ? `-${props.state}` : ''}
    ${props.size ? `-${props.size}` : ''}
    ${props.type ? `-${props.type}` : ''}
  `}>
    <i class="chi-alert__icon chi-icon icon-circle-check"></i>
    <div class="chi-alert__content">
      {props.title ? <p class="chi-alert__title">{props.title}</p> : ''}
      <p class="chi-alert__text">{props.text}</p>
    </div>
    {props.closable ? closeButton : ''}
  </div>
);

/* eslint-disable sort-keys */
Alert.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  state: PropTypes.oneOf(['success', 'warning', 'danger', 'info', 'muted']),
  text: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.oneOf(['banner', 'toast']),
  closable: PropTypes.bool,
};
/* eslint-enable sort-keys */

Alert.defaultProps = {
  size: 'md',
  state: '',
  text: 'This is an alert component',
};

export { Alert as default };
