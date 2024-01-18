import * as PropTypes from 'prop-types';
import React from 'react';
import { CHEVRON_RIGHT, UTILITY_CLASSES } from '../../constants/classes';

// #region Methods
const manageState = (state) => {
  const alertStates = {
    success: {
      icon: 'circle-check',
      text: 'This is a success alert',
    },
    warning: {
      icon: 'warning',
      text: 'This is a warning alert',
    },
    danger: {
      icon: 'circle-x',
      text: 'This is a danger alert',
    },
    info: {
      icon: 'circle-info',
      text: 'This is an info alert',
    },
    muted: {
      icon: 'flag',
      text: 'This is a muted alert',
    },
    base: {
      icon: 'flag',
      text: 'This is a base alert',
    },
  };

  return alertStates[state];
};

const renderAlertContent = (props, alertRef) => {
  const type = props.type === 'clickable' ? undefined : props.type;

  return (
    <chi-alert
      ref={alertRef}
      color={props.color}
      icon={props.icon}
      size={props.size}
      type={type}
      closable={props.closable}
      spinner={props.animatedSpinner}
      title={props.title ? `${props.title}\n` : undefined}
      class={UTILITY_CLASSES.WIDTH[100]}>
      <span style={{ whiteSpace: 'pre-wrap' }}>{props.text}</span>
      {props.type === 'clickable' && <chi-icon icon={CHEVRON_RIGHT} slot="chi-alert__clickable-icon"></chi-icon>}
    </chi-alert>
  );
};

const renderAlertClickable = (props, alertContent) => (
  <chi-link href="#" onClick={props.click} no-hover-underline class={UTILITY_CLASSES.DISPLAY.BLOCK}>
    {alertContent}
  </chi-link>
);

const handlerClick = (props) => props.click();
// #endregion

// Alert Component
export default function Alert(props) {
  const alertRef = React.useRef(null);

  React.useEffect(() => {
    // componentDidMount
    alertRef.current.addEventListener('dismissAlert', () => handlerClick(props));

    // componentWillUnmount
    return () => {
      alertRef.current.removeEventListener('dismissAlert', () => handlerClick(props));
    };
  }, [alertRef]); // componentDidUpdated

  if (!props.active) {
    return null;
  }

  const state = manageState(props.state);
  const defaultProps = {
    animatedSpinner: props.animatedSpinner,
    color: props.state,
    closable: props.closable && ['bubble', 'toast'].includes(props.type),
    icon: props.icon || state.icon,
    size: props.size !== 'md' ? props.size : undefined,
    state,
    text: props.text || state.text,
    title: props.title,
    type: props.type,
  };
  const alertContent = renderAlertContent(defaultProps, alertRef);
  const alertClickable = renderAlertClickable(props, alertContent);

  // !!IMPORTANT: Just for props.uxpinRef
  // eslint-disable-next-line react/prop-types
  return <div ref={props.uxpinRef}>{props.type === 'clickable' ? alertClickable : alertContent}</div>;
}

// #region PropTypes
Alert.propTypes = {
  size: PropTypes.oneOf(['sm', 'md']),
  state: PropTypes.oneOf(['base', 'success', 'warning', 'danger', 'info', 'muted']),
  title: PropTypes.string,
  /**
   * A textArea controller for Text
   * @uxpinpropname text
   * @uxpincontroltype textfield(10)
   * */
  text: PropTypes.string,
  icon: PropTypes.string,
  animatedSpinner: PropTypes.bool,
  closable: PropTypes.bool,
  type: PropTypes.oneOf(['bubble', 'toast', 'clickable']),
  active: PropTypes.bool,
  /**
   * @uxpinpropname On Click
   */
  // eslint-disable-next-line react/no-unused-prop-types
  click: PropTypes.func,
};

Alert.defaultProps = {
  size: 'md',
  title: '',
  state: 'info',
  type: 'bubble',
  active: true,
};
// #endregion
