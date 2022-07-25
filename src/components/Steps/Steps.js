import * as PropTypes from 'prop-types';
import * as React from 'react';
import { uuid4 } from '../../utils/utils';
import '../../utils/utils.css';
import {
  ACTIVE_CLASS,
  COMPLETED_CLASS,
  STEPS_CLASSES,
} from '../../constants/classes';

let uuid;
const stepsToRender = [];

/* eslint-disable */
export default function Steps(props) {
  uuid = `steps${uuid4()}`;
  stepsToRender.length = 0;
  const stepsLine = <div className={STEPS_CLASSES.LINE}></div>;

  Array(11).fill()
    .forEach((_, i) => {
      if (props[`step${i}`]) {
        let icon,
          label;

        if (props.horizontalLabel) {
          icon = <div class=""></div>;
          label = <div class={STEPS_CLASSES.CONTENT}><a href="#">{props[`step${i}`]}</a></div>;
        } else {
          icon = <div className={STEPS_CLASSES.ICON}>
            <div class={STEPS_CLASSES.CONTENT}><a href="#">{props[`step${i}`]}</a></div>
          </div>;
          label = null;
        }

        stepsToRender.push(
          <li className={`
            ${i < props.activeSteps ? COMPLETED_CLASS : ''}
            ${i === props.activeSteps ? ACTIVE_CLASS : ''}
            `}>
            {icon}
            {label}
            {props[`step${i + 1}`] ? stepsLine : null}
          </li>
        );
      }
    });

  return (
    /* This class is used to solve problems with keys in canvas */
    <div className={STEPS_CLASSES.UX_PIN_WRAPPER} style={{ height: 64 }}>
      <ul className={`
        ${STEPS_CLASSES.STEPS}
        ${props.horizontalLabel ? STEPS_CLASSES.HORIZONTAL_LABEL : ''}
        `} id={uuid}>
        {stepsToRender}
      </ul>
    </div>
  );
}

Steps.propTypes = {
  step1: PropTypes.string,
  step2: PropTypes.string,
  step3: PropTypes.string,
  step4: PropTypes.string,
  step5: PropTypes.string,
  step6: PropTypes.string,
  step7: PropTypes.string,
  step8: PropTypes.string,
  step9: PropTypes.string,
  step10: PropTypes.string,
  activeSteps: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  horizontalLabel: PropTypes.bool,
};
/* eslint-enable */

Steps.defaultProps = {
  step1: 'step 1',
  step2: 'step 2',
  step3: 'step 3',
  step4: 'step 4',
  step5: 'step 5',
  activeSteps: 3,
};
