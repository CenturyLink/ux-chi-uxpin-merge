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
    const backgroundIcon = props[`s${statIndex}Icon`]
      ? (
        <div className="chi-stat-background-icon">
          <i className={`chi-icon icon-${props[`s${statIndex}Icon`]}`} aria-hidden="true" />
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
                {String(props[`s${statIndex}Metric`]) || ''}
              </div>
              <div className={STAT_CLASSES.METRIC_TITLE}>
                {String(props[`stat${statIndex}Title`]) || ''}
              </div>
            </div>
            {
              props[`s${statIndex}AuxTitle`] ? (
                <div className={STAT_CLASSES.SUBMETRIC}>
                  <div className={STAT_CLASSES.SUBMETRIC_VALUE}>
                    {String(props[`s${statIndex}AuxMetric`]) || ''}
                  </div>
                  <div className={STAT_CLASSES.SUBMETRIC_TITLE}>
                    {String(props[`s${statIndex}AuxTitle`]) || ''}
                  </div>
                </div>
              ) : <div style={{ height: 20 }}></div>
            }
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
  s1Metric: PropTypes.string,
  s1AuxTitle: PropTypes.string,
  s1AuxMetric: PropTypes.string,
  s1Icon: PropTypes.string,
  stat2Title: PropTypes.string,
  s2Metric: PropTypes.string,
  s2AuxTitle: PropTypes.string,
  s2AuxMetric: PropTypes.string,
  s2Icon: PropTypes.string,
  stat3Title: PropTypes.string,
  s3Metric: PropTypes.string,
  s3AuxTitle: PropTypes.string,
  s3AuxMetric: PropTypes.string,
  s3Icon: PropTypes.string,
  stat4Title: PropTypes.string,
  s4Metric: PropTypes.string,
  s4AuxTitle: PropTypes.string,
  s4AuxMetric: PropTypes.string,
  s4Icon: PropTypes.string,
  stat5Title: PropTypes.string,
  s5Metric: PropTypes.string,
  s5AuxTitle: PropTypes.string,
  s5AuxMetric: PropTypes.string,
  s5Icon: PropTypes.string,
  stat6Title: PropTypes.string,
  s6Metric: PropTypes.string,
  s6AuxTitle: PropTypes.string,
  s6AuxMetric: PropTypes.string,
  s6Icon: PropTypes.string,
  stat7Title: PropTypes.string,
  s7Metric: PropTypes.string,
  s7AuxTitle: PropTypes.string,
  s7AuxMetric: PropTypes.string,
  s7Icon: PropTypes.string,
  stat8Title: PropTypes.string,
  s8Metric: PropTypes.string,
  s8AuxTitle: PropTypes.string,
  s8AuxMetric: PropTypes.string,
  s8Icon: PropTypes.string,
  stat9Title: PropTypes.string,
  s9Metric: PropTypes.string,
  s9AuxTitle: PropTypes.string,
  s9AuxMetric: PropTypes.string,
  s9Icon: PropTypes.string,
  stat10Title: PropTypes.string,
  s10Metric: PropTypes.string,
  s10AuxTitle: PropTypes.string,
  s10AuxMetric: PropTypes.string,
  s10Icon: PropTypes.string,
};

StatBase.defaultProps = {
  stat1Title: 'metric 1',
  s1Metric: 1,
  s1AuxMetric: 2,
  s1AuxTitle: 'Elevated',
  s1Icon: 'bell-outline',
  stat2Title: 'metric 2',
  s2Metric: 1,
  s2AuxTitle: 'High',
  s2AuxMetric: 2,
  s2Icon: 'chart-line',
  stat3Title: 'metric 3',
  s3AuxMetric: 1,
  s3Metric: 0,
  s3AuxTitle: 'High',
  s3AuxMetric: 2,
  s3Icon: 'cost',
  activeStat: 1,
  s4Metric: 0,
  s5Metric: 0,
  s6Metric: 0,
  s7Metric: 0,
  s8Metric: 0,
  s9Metric: 0,
  s10Metric: 0,
  s4AuxMetric: 0,
  s5AuxMetric: 0,
  s6AuxMetric: 0,
  s7AuxMetric: 0,
  s8AuxMetric: 0,
  s9AuxMetric: 0,
  s10AuxMetric: 0,
};
/* eslint-enable */
