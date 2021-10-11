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
      if (props[`stat${i}Title`]) {
        statProps.push(`stat${i}Title`);
      }
    });

  statProps.forEach((statProp, i) => {
    const statIndex = i + 1;
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
                {String(props[`stat${statIndex}Metric`]) || ''}
              </div>
              <div className={STAT_CLASSES.METRIC_TITLE}>
                {String(props[`stat${statIndex}Title`]) || ''}
              </div>
            </div>
            <div className={STAT_CLASSES.SUBMETRIC}>
              <div className={STAT_CLASSES.SUBMETRIC_VALUE}>
                {String(props[`stat${statIndex}AuxMetric`]) || ''}
              </div>
              <div className={STAT_CLASSES.SUBMETRIC_TITLE}>
                {String(props[`stat${statIndex}AuxTitle`]) || ''}
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
  stat1Title: PropTypes.string,
  stat1Metric: PropTypes.string,
  stat1AuxTitle: PropTypes.string,
  stat1AuxMetric: PropTypes.string,
  stat1Icon: PropTypes.string,
  stat2Title: PropTypes.string,
  stat2Metric: PropTypes.string,
  stat2AuxTitle: PropTypes.string,
  stat2AuxMetric: PropTypes.string,
  stat2Icon: PropTypes.string,
  stat3Title: PropTypes.string,
  stat3Metric: PropTypes.string,
  stat3AuxTitle: PropTypes.string,
  stat3AuxMetric: PropTypes.string,
  stat3Icon: PropTypes.string,
  stat4Title: PropTypes.string,
  stat4Metric: PropTypes.string,
  stat4AuxTitle: PropTypes.string,
  stat4AuxMetric: PropTypes.string,
  stat4Icon: PropTypes.string,
  stat5Title: PropTypes.string,
  stat5Metric: PropTypes.string,
  stat5AuxTitle: PropTypes.string,
  stat5AuxMetric: PropTypes.string,
  stat5Icon: PropTypes.string,
  stat6Title: PropTypes.string,
  stat6Metric: PropTypes.string,
  stat6AuxTitle: PropTypes.string,
  stat6AuxMetric: PropTypes.string,
  stat6Icon: PropTypes.string,
  stat7Title: PropTypes.string,
  stat7Metric: PropTypes.string,
  stat7AuxTitle: PropTypes.string,
  stat7AuxMetric: PropTypes.string,
  stat7Icon: PropTypes.string,
  stat8Title: PropTypes.string,
  stat8Metric: PropTypes.string,
  stat8AuxTitle: PropTypes.string,
  stat8AuxMetric: PropTypes.string,
  stat8Icon: PropTypes.string,
  stat9Title: PropTypes.string,
  stat9Metric: PropTypes.string,
  stat9AuxTitle: PropTypes.string,
  stat9AuxMetric: PropTypes.string,
  stat9Icon: PropTypes.string,
  stat10Title: PropTypes.string,
  stat10Metric: PropTypes.string,
  stat10AuxTitle: PropTypes.string,
  stat10AuxMetric: PropTypes.string,
  stat10Icon: PropTypes.string,
};

StatBase.defaultProps = {
  stat1Title: 'metric 1',
  stat1Metric: 1,
  stat1AuxMetric: 2,
  stat1AuxTitle: 'Elevated',
  stat1Icon: 'bell-outline',
  stat2Title: 'metric 2',
  stat2Metric: 1,
  stat2AuxTitle: 'High',
  stat2AuxMetric: 2,
  stat2Icon: 'chart-line',
  stat3Title: 'metric 3',
  stat3AuxMetric: 1,
  stat3AuxTitle: 'High',
  stat3AuxMetric: 2,
  stat3Icon: 'cost',
  activeStat: 1,
};
/* eslint-enable */
