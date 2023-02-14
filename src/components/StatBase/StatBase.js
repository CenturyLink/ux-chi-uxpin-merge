/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { hasClass, uuid4 } from '../../utils/utils';
import {
  ACTIVE_CLASS,
  BUTTON_CLASSES,
  CAROUSEL_CLASSES,
  DISABLED_CLASS,
  ICON_CLASS,
  POPOVER_CLASSES,
  STAT_CLASSES,
} from '../../constants/classes';
import { marketingIcons } from '../../constants/icons';

let uuid;
let key;
let activeItem;
const statsToRender = [];
const helpInfoMessages = [];
const helpPopovers = [];

export default function StatBase(props) {
  const statProps = [];
  const ITEMS_TO_RENDER = 11;
  uuid = `stat-${uuid4()}`;
  key = 0;

  statsToRender.length = 0;
  Array(ITEMS_TO_RENDER)
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
        <div className={STAT_CLASSES.BACKGROUND_ICON}>
          {marketingIcons.includes(props[`s${statIndex}Icon`]) ? <chi-marketing-icon icon={props[`s${statIndex}Icon`]} variant="outline"></chi-marketing-icon> : ''}
        </div>
      ) : null;

    if (props[statProp]) {
      const helpButton = props[`s${statIndex}InfoMessage`]
        ? (
          <div className={STAT_CLASSES.TITLE_HELP}>
            <button
              type="button"
              className={`${BUTTON_CLASSES.BUTTON} -icon -xs -flat`}
              id={`stat-help-${uuid}-${statProp}-info-button`}
              aria-label="Help"
              data-target={`#stat-help-${uuid}-${statProp}-info-popover`}
              data-position="bottom"
              onClick={(e) => e.stopPropagation()}>
              <i className={`${ICON_CLASS} icon-circle-info-outline`} aria-hidden="true">
                <span className="-sr--only">
                  i
                </span>
              </i>
            </button>
          </div>
        ) : null;

      if (props[`s${statIndex}InfoMessage`]) {
        helpInfoMessages.push(`stat-help-${uuid}-${statProp}-info-button`);
      }

      statsToRender.push(
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a
          onClick={(e) => {
            for (
              let stat = e.target;
              stat && !hasClass(stat, STAT_CLASSES.STAT);
              stat = stat.parentNode
            ) {
              if (hasClass(stat, STAT_CLASSES.ITEM)) {
                if (activeItem) activeItem.classList.remove(ACTIVE_CLASS);
                stat.classList.add(ACTIVE_CLASS);
                activeItem = stat;
              }
            }
            props[`s${statIndex}Click`]();
          }}
          key={`stat-${uuid}${statIndex}`}
          id={`stat-base-${uuid}-${statIndex}`}
          className={`
            ${STAT_CLASSES.ITEM} 
            ${props.activeStat === statIndex ? ACTIVE_CLASS : ''}
            ${props.carousel ? CAROUSEL_CLASSES.CAROUSEL : ''}
            ${props[`s${statIndex}Disabled`] ? DISABLED_CLASS : ''}
          `}>
          <div className={STAT_CLASSES.CONTENT}>
            <div className={STAT_CLASSES.METRIC}>
              <div className={STAT_CLASSES.METRIC_VALUE}>
                {String(props[`s${statIndex}Metric`]) || ''}
              </div>
              <div className={STAT_CLASSES.METRIC_TITLE}>
                {String(props[`stat${statIndex}Title`]) || ''}
              </div>
            </div>
            {helpButton}
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
        </a>
      );
    }

    helpPopovers.push(props[`s${statIndex}InfoMessage`]
      ? (
        <section
          className={`${POPOVER_CLASSES.POPOVER} chi-popover--bottom`}
          id={`stat-help-${uuid}-${statProp}-info-popover`}
          aria-modal="true"
          role="dialog">
          <div className={POPOVER_CLASSES.CONTENT}>
            <p className={POPOVER_CLASSES.TEXT}>{props[`s${statIndex}InfoMessage`]}</p>
          </div>
        </section>
      ) : null);
  });

  key += 1;

  const stats = (
    <div className={`${STAT_CLASSES.STAT} -sm`} key={`stat-base-${uuid}-${key}`}>
      {statsToRender}
      {helpPopovers}
    </div>
  );

  useEffect(() => {
    if (props.activeStat) activeItem = document.getElementById(`stat-base-${uuid}-${props.activeStat}`);

    helpInfoMessages.forEach((helpMessage) => {
      const initialize = setInterval(() => {
        if (window.chi && document.getElementById(helpMessage)) {
          window.chi.popover(document.getElementById(helpMessage));
          clearInterval(initialize);
        }
      }, 100);
    });
  });

  return props.carousel ? (
    <div ref={props.uxpinRef}>
      <chi-carousel key={`carousel-${uuid}-${key}`} style={{ maxWidth: 'fit-content' }}>
        <div className="-d--flex" slot="items">
          {stats}
          {helpPopovers}
        </div>
      </chi-carousel>
    </div>
  ) : stats;
}

/* eslint-disable */
StatBase.propTypes = {
  carousel: PropTypes.bool,
  activeStat: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  stat1Title: PropTypes.string,
  s1Disabled: PropTypes.bool,
  s1Metric: PropTypes.string,
  s1AuxTitle: PropTypes.string,
  s1AuxMetric: PropTypes.string,
  s1Icon: PropTypes.string,
  s1InfoMessage: PropTypes.string,
  stat2Title: PropTypes.string,
  s2Disabled: PropTypes.bool,
  s2Metric: PropTypes.string,
  s2AuxTitle: PropTypes.string,
  s2AuxMetric: PropTypes.string,
  s2Icon: PropTypes.string,
  s2InfoMessage: PropTypes.string,
  stat3Title: PropTypes.string,
  s3Disabled: PropTypes.bool,
  s3Metric: PropTypes.string,
  s3AuxTitle: PropTypes.string,
  s3AuxMetric: PropTypes.string,
  s3Icon: PropTypes.string,
  s3InfoMessage: PropTypes.string,
  stat4Title: PropTypes.string,
  s4Disabled: PropTypes.bool,
  s4Metric: PropTypes.string,
  s4AuxTitle: PropTypes.string,
  s4AuxMetric: PropTypes.string,
  s4Icon: PropTypes.string,
  s4InfoMessage: PropTypes.string,
  stat5Title: PropTypes.string,
  s5Disabled: PropTypes.bool,
  s5Metric: PropTypes.string,
  s5AuxTitle: PropTypes.string,
  s5AuxMetric: PropTypes.string,
  s5Icon: PropTypes.string,
  s5InfoMessage: PropTypes.string,
  stat6Title: PropTypes.string,
  s6Disabled: PropTypes.bool,
  s6Metric: PropTypes.string,
  s6AuxTitle: PropTypes.string,
  s6AuxMetric: PropTypes.string,
  s6Icon: PropTypes.string,
  s6InfoMessage: PropTypes.string,
  stat7Title: PropTypes.string,
  s7Disabled: PropTypes.bool,
  s7Metric: PropTypes.string,
  s7AuxTitle: PropTypes.string,
  s7AuxMetric: PropTypes.string,
  s7Icon: PropTypes.string,
  s7InfoMessage: PropTypes.string,
  stat8Title: PropTypes.string,
  s8Disabled: PropTypes.bool,
  s8Metric: PropTypes.string,
  s8AuxTitle: PropTypes.string,
  s8AuxMetric: PropTypes.string,
  s8Icon: PropTypes.string,
  s8InfoMessage: PropTypes.string,
  stat9Title: PropTypes.string,
  s9Disabled: PropTypes.bool,
  s9Metric: PropTypes.string,
  s9AuxTitle: PropTypes.string,
  s9AuxMetric: PropTypes.string,
  s9Icon: PropTypes.string,
  s9InfoMessage: PropTypes.string,
  stat10Title: PropTypes.string,
  s10Disabled: PropTypes.bool,
  s10Metric: PropTypes.string,
  s10AuxTitle: PropTypes.string,
  s10AuxMetric: PropTypes.string,
  s10Icon: PropTypes.string,
  s10InfoMessage: PropTypes.string,
  s1Click: PropTypes.func,
  s2Click: PropTypes.func,
  s3Click: PropTypes.func,
  s4Click: PropTypes.func,
  s5Click: PropTypes.func,
  s6Click: PropTypes.func,
  s7Click: PropTypes.func,
  s8Click: PropTypes.func,
  s9Click: PropTypes.func,
  s10Click: PropTypes.func,
};

StatBase.defaultProps = {
  carousel: false,
  stat1Title: 'metric 1',
  s1InfoMessage: 'Stat 1 info message',
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
