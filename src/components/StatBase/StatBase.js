import * as PropTypes from 'prop-types';
import React from 'react';
import { uuid4 } from '../../utils/utils';
import {
  ACTIVE_CLASS,
  STAT_CLASSES,
} from '../../constants/classes';

let uuid;
const statsToRender = [];

export default function StatBase(props) {
  const statProps = [];

  uuid = `stat-${uuid4()}`;
  statsToRender.length = 0;
  Array(11)
    .fill()
    .forEach((_, i) => {
      if (props[`stat${i}`]) {
        statProps.push(`stat${i}`);
      }
    });

  statProps.forEach((statProp, i) => {
    const statIndex = i + 1;
    console.log(props);
    const backgroundIcon = props[`stat${statIndex}Icon`]
      ? (
        <div className="chi-stat-background-icon">
          <i className={`chi-icon icon-${props[`stat${statIndex}Icon`]}`} aria-hidden="true" />
        </div>
      ) : null;

    if (props[statProp]) {
      statsToRender.push(
        <div
          key={`stat-${uuid}${statIndex}`}
          className={`${STAT_CLASSES.ITEM} ${
            props.activeStat === statIndex ? ACTIVE_CLASS : ''
          }`}>
          <div className={STAT_CLASSES.CONTENT}>
            <div className={STAT_CLASSES.METRIC}>
              <div className={STAT_CLASSES.METRIC_VALUE}>
                {String(props[`stat${statIndex}Metric1`]) || ''}
              </div>
              <div className={STAT_CLASSES.METRIC_TITLE}>
                {String(props[`stat${statIndex}Title1`]) || ''}
              </div>
            </div>
            <div className={STAT_CLASSES.SUBMETRIC}>
              <div className={STAT_CLASSES.SUBMETRIC_VALUE}>
                {String(props[`stat${statIndex}Metric2`]) || ''}
              </div>
              <div className={STAT_CLASSES.SUBMETRIC_TITLE}>
                {String(props[`stat${statIndex}Title2`]) || ''}
              </div>
            </div>
            {backgroundIcon}
          </div>
        </div>
      );
    }
  });

  return <div className="chi-stat -sm">{statsToRender}</div>;
}

/* eslint-disable */
StatBase.propTypes = {
  activeStat: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  stat1: PropTypes.string,
  stat1Metric1: PropTypes.number,
  stat1Title1: PropTypes.string,
  stat1Metric2: PropTypes.number,
  stat1Title2: PropTypes.string,
  stat1Icon: PropTypes.string,
  stat2: PropTypes.string,
  stat2Metric1: PropTypes.number,
  stat2Title1: PropTypes.string,
  stat2Metric2: PropTypes.number,
  stat2Title2: PropTypes.string,
  stat2Icon: PropTypes.string,
  stat3: PropTypes.string,
  stat3Metric1: PropTypes.number,
  stat3Title1: PropTypes.string,
  stat3Metric2: PropTypes.number,
  stat3Title2: PropTypes.string,
  stat3Icon: PropTypes.string,
  stat4: PropTypes.string,
  stat4Metric1: PropTypes.number,
  stat4Title1: PropTypes.string,
  stat4Metric2: PropTypes.number,
  stat4Title2: PropTypes.string,
  stat4Icon: PropTypes.string,
  stat5: PropTypes.string,
  stat5Metric1: PropTypes.number,
  stat5Title1: PropTypes.string,
  stat5Metric2: PropTypes.number,
  stat5Title2: PropTypes.string,
  stat5Icon: PropTypes.string,
  stat6: PropTypes.string,
  stat6Metric1: PropTypes.number,
  stat6Title1: PropTypes.string,
  stat6Metric2: PropTypes.number,
  stat6Title2: PropTypes.string,
  stat6Icon: PropTypes.string,
  stat7: PropTypes.string,
  stat7Metric1: PropTypes.number,
  stat7Title1: PropTypes.string,
  stat7Metric2: PropTypes.number,
  stat7Title2: PropTypes.string,
  stat7Icon: PropTypes.string,
  stat8: PropTypes.string,
  stat8Metric1: PropTypes.number,
  stat8Title1: PropTypes.string,
  stat8Metric2: PropTypes.number,
  stat8Title2: PropTypes.string,
  stat8Icon: PropTypes.string,
  stat9: PropTypes.string,
  stat9Metric1: PropTypes.number,
  stat9Title1: PropTypes.string,
  stat9Metric2: PropTypes.number,
  stat9Title2: PropTypes.string,
  stat9Icon: PropTypes.string,
  stat10: PropTypes.string,
  stat10Metric1: PropTypes.number,
  stat10Title1: PropTypes.string,
  stat10Metric2: PropTypes.number,
  stat10Title2: PropTypes.string,
  stat10Icon: PropTypes.string,
};

StatBase.defaultProps = {
  stat1: 'metric 1',
  stat1Metric1: 1,
  stat1Title1: 'High',
  stat1Metric2: 2,
  stat1Title2: 'Elevated',
  stat1Icon: 'bell-outline',
  stat2: 'metric 2',
  stat2Metric1: 1,
  stat2Title1: 'High',
  stat2Metric2: 2,
  stat2Title2: 'Elevated',
  stat2Icon: 'chart-line',
  stat3: 'metric 3',
  stat3Metric1: 1,
  stat3Title1: 'High',
  stat3Metric2: 2,
  stat3Title2: 'Elevated',
  stat3Icon: 'cost',
  activeStat: 1,
};
/* eslint-enable */
