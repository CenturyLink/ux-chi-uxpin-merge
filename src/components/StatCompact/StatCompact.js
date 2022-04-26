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

let key;
let uuid;
let activeItem;
const statsToRender = [];

export default function StatCompact(props) {
  const statProps = [];

  uuid = `stat-${uuid4()}`;
  key = 0;
  statsToRender.length = 0;
  const helpInfoMessages = [];

  Array(11).fill()
    .forEach((_, i) => {
      if (props[`stat${i}`]) {
        statProps.push(`stat${i}`);
      }
    });

  statProps.forEach((statProp, i) => {
    const statIndex = i + 1;

    if (props[statProp]) {
      const helpButton = props[`${statProp}InfoMessage`]
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
              <i className={`${ICON_CLASS} icon-circle-info-outline`}>
                <span className="-sr--only">
                  i
                </span>
              </i>
            </button>
          </div>
        ) : null;

      if (props[`${statProp}InfoMessage`]) {
        helpInfoMessages.push(`stat-help-${uuid}-${statProp}-info-button`);
      }

      statsToRender.push(
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a
          key={`stat-${uuid}${statIndex}`}
          id={`stat-compact-${uuid}-${statIndex}`}
          className={`
          ${STAT_CLASSES.ITEM}
          ${props.activeStat === statIndex ? ACTIVE_CLASS : ''}
          ${props.carousel ? CAROUSEL_CLASSES.CAROUSEL : ''}
          ${props[`stat${statIndex}Disabled`] ? DISABLED_CLASS : ''}
        `}
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
            props[`stat${statIndex}Click`]();
          }}>
          <div className={STAT_CLASSES.CONTENT}>
            <div className={STAT_CLASSES.METRIC}>
              <div className={STAT_CLASSES.TITLE}>
                {String(props[`stat${statIndex}`])}
              </div>
              {helpButton}
            </div>
            <div className={STAT_CLASSES.SUBMETRIC}>
              <div className={STAT_CLASSES.SUBMETRIC_VALUE}>
                {String(props[`stat${statIndex}Metric1`]) || ''}
              </div>
              <div className={STAT_CLASSES.SUBMETRIC_TITLE}>
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
          </div>
        </a>
      );
    }
  });

  useEffect(() => {
    if (props.activeStat) activeItem = document.getElementById(`stat-compact-${uuid}-${props.activeStat}`);

    helpInfoMessages.forEach((helpMessage) => {
      const initialize = setInterval(() => {
        if (window.chi && document.getElementById(helpMessage)) {
          window.chi.popover(document.getElementById(helpMessage));
          clearInterval(initialize);
        }
      }, 100);
    });
  });

  key += 1;

  const helpPopovers = [];

  statProps.forEach((statProp) => {
    helpPopovers.push(props[`${statProp}InfoMessage`]
      ? (
        <section
          className={`${POPOVER_CLASSES.POPOVER} chi-popover--bottom`}
          id={`stat-help-${uuid}-${statProp}-info-popover`}
          aria-modal="true"
          role="dialog">
          <div className={POPOVER_CLASSES.CONTENT}>
            <p className={POPOVER_CLASSES.TEXT}>{props[`${statProp}InfoMessage`]}</p>
          </div>
        </section>
      ) : null);
  });

  const stats = (
    <div className={`${STAT_CLASSES.STAT} -compact`} key={`stat-compact-${uuid}-${key}`} style={{ flexGrow: 1 }}>
      {statsToRender}
      {helpPopovers}
    </div>
  );

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
StatCompact.propTypes = {
  carousel: PropTypes.bool,
  activeStat: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  /** @uxpinignoreprop */
  statWidth: PropTypes.number,
  stat1: PropTypes.string,
  stat1Disabled: PropTypes.bool,
  stat1Metric1: PropTypes.number,
  stat1Title1: PropTypes.string,
  stat1Metric2: PropTypes.number,
  stat1Title2: PropTypes.string,
  stat1InfoMessage: PropTypes.string,
  stat2: PropTypes.string,
  stat2Disabled: PropTypes.bool,
  stat2Metric1: PropTypes.number,
  stat2Title1: PropTypes.string,
  stat2Metric2: PropTypes.number,
  stat2Title2: PropTypes.string,
  stat2InfoMessage: PropTypes.string,
  stat3: PropTypes.string,
  stat3Disabled: PropTypes.bool,
  stat3Metric1: PropTypes.number,
  stat3Title1: PropTypes.string,
  stat3Metric2: PropTypes.number,
  stat3Title2: PropTypes.string,
  stat3InfoMessage: PropTypes.string,
  stat4: PropTypes.string,
  stat4Disabled: PropTypes.bool,
  stat4Metric1: PropTypes.number,
  stat4Title1: PropTypes.string,
  stat4Metric2: PropTypes.number,
  stat4Title2: PropTypes.string,
  stat4InfoMessage: PropTypes.string,
  stat5: PropTypes.string,
  stat5Disabled: PropTypes.bool,
  stat5Metric1: PropTypes.number,
  stat5Title1: PropTypes.string,
  stat5Metric2: PropTypes.number,
  stat5Title2: PropTypes.string,
  stat5InfoMessage: PropTypes.string,
  stat6: PropTypes.string,
  stat6Disabled: PropTypes.bool,
  stat6Metric1: PropTypes.number,
  stat6Title1: PropTypes.string,
  stat6Metric2: PropTypes.number,
  stat6Title2: PropTypes.string,
  stat6InfoMessage: PropTypes.string,
  stat7: PropTypes.string,
  stat7Disabled: PropTypes.bool,
  stat7Metric1: PropTypes.number,
  stat7Title1: PropTypes.string,
  stat7Metric2: PropTypes.number,
  stat7Title2: PropTypes.string,
  stat7InfoMessage: PropTypes.string,
  stat8: PropTypes.string,
  stat8Disabled: PropTypes.bool,
  stat8Metric1: PropTypes.number,
  stat8Title1: PropTypes.string,
  stat8Metric2: PropTypes.number,
  stat8Title2: PropTypes.string,
  stat8InfoMessage: PropTypes.string,
  stat9: PropTypes.string,
  stat9Disabled: PropTypes.bool,
  stat9Metric1: PropTypes.number,
  stat9Title1: PropTypes.string,
  stat9Metric2: PropTypes.number,
  stat9Title2: PropTypes.string,
  stat9InfoMessage: PropTypes.string,
  stat10: PropTypes.string,
  stat10Disabled: PropTypes.bool,
  stat10Metric1: PropTypes.number,
  stat10Title1: PropTypes.string,
  stat10Metric2: PropTypes.number,
  stat10Title2: PropTypes.string,
  stat10InfoMessage: PropTypes.string,
  stat1Click: PropTypes.func,
  stat2Click: PropTypes.func,
  stat3Click: PropTypes.func,
  stat4Click: PropTypes.func,
  stat5Click: PropTypes.func,
  stat6Click: PropTypes.func,
  stat7Click: PropTypes.func,
  stat8Click: PropTypes.func,
  stat9Click: PropTypes.func,
  stat10Click: PropTypes.func,
};

StatCompact.defaultProps = {
  carousel: false,
  stat1: 'metric 1',
  stat1Metric1: 1,
  stat1Title1: 'High',
  stat1Metric2: 2,
  stat1Title2: 'Elevated',
  stat1InfoMessage: 'Stat 1 info message',
  stat2: 'metric 2',
  stat2Metric1: 1,
  stat2Title1: 'High',
  stat2Metric2: 2,
  stat2Title2: 'Elevated',
  stat2InfoMessage: 'Stat 2 info message',
  stat3: 'metric 3',
  stat3Metric1: 1,
  stat3Title1: 'High',
  stat3Metric2: 2,
  stat3Title2: 'Elevated',
  stat3InfoMessage: 'Stat 3 info message',
  activeStat: 1,
  statWidth: 208,
};
/* eslint-enable */
