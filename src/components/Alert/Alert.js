import * as PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import { ALERT_CLASSES, DROPDOWN_CLASSES, UTILITY_CLASSES } from '../../constants/classes';

export default function Alert({ size, state, title, icon, type, active, text, animateSpinner, closable, click }) {
  const alertRef = useRef(null);

  useEffect(() => {
    if (alertRef.current) {
      const handleClick = () => click();

      alertRef.current.addEventListener('dismissAlert', handleClick);

      return () => {
        if (alertRef.current) {
          alertRef.current.removeEventListener('dismissAlert', handleClick);
        }
      };
    }
  }, [click]);

  const handleStates = (stateIncoming) => {
    const states = {
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

    return states[stateIncoming];
  };

  const renderAlertContent = (defaultIconName, color, alertSize, alertType, title, defaultText) => {
    const isClosable = closable && ['bubble', 'toast'].includes(type);

    return (
      <chi-alert
        ref={alertRef}
        color={color}
        icon={defaultIconName}
        size={alertSize}
        type={alertType}
        closable={isClosable}
        spinner={animateSpinner}
        title={`${title}\n`}
        class={UTILITY_CLASSES.WIDTH[100]}>
        <span style={{ whiteSpace: 'pre-wrap' }}>{defaultText}</span>
        {type === 'clickable' && (
          <chi-icon icon={DROPDOWN_CLASSES.ICON_CHEVRON_RIGHT} slot={ALERT_CLASSES.CLICKABLE_ICON}></chi-icon>
        )}
      </chi-alert>
    );
  };

  const newState = handleStates(state);
  const defaultIconName = icon || newState.icon;
  const defaultText = text || newState.text;
  const color = state;
  const alertSize = size !== 'md' ? size : undefined;
  const alertType = type !== 'clickable' ? type : undefined;

  if (!active) {
    return null;
  }

  const alertContent = renderAlertContent(defaultIconName, color, alertSize, alertType, title, defaultText);

  return type === 'clickable' ? (
    <chi-link href="#" onClick={click} no-hover-underline class={UTILITY_CLASSES.DISPLAY.BLOCK}>
      {alertContent}
    </chi-link>
  ) : (
    alertContent
  );
}

Alert.propTypes = {
  size: PropTypes.oneOf(['sm', 'md']),
  state: PropTypes.oneOf(['base', 'success', 'warning', 'danger', 'info', 'muted']),
  animateSpinner: PropTypes.bool,
  /**
   * A textArea controller for Text
   * @uxpinpropname text
   * @uxpincontroltype textfield(10)
   * */
  text: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
  active: PropTypes.bool,
  type: PropTypes.oneOf(['bubble', 'toast', 'clickable']),
  closable: PropTypes.bool,
  /**
   * @uxpinpropname On Click
   */
  click: PropTypes.func,
};

Alert.defaultProps = {
  size: 'md',
  title: '',
  state: 'info',
  type: 'bubble',
  active: true,
};
