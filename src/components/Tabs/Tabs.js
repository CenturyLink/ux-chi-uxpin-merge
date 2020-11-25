import * as PropTypes from 'prop-types';
import * as React from 'react';
import { uuid4 } from '../../utils/utils';
import './Tabs.css';

let uuid;
const tabsToRender = [];
const tabsContentToRender = [];

/* eslint-disable */
/**
 * @uxpincomponent
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export default function Tabs(props) {
  uuid = uuid4();
  tabsToRender.length = 0;
  tabsContentToRender.length = 0;

  Array(11).fill()
    .forEach((_, i) => {
      if (props[`tab${i}`]) {
        tabsToRender.push(
          <li
            key={`key${uuid}${i}`}
            className={`${props.activeTab === i ? '-active' : ''} -d--flex`}
            onClick={() => {
              if (props[`click${i}`]) {
                props[`click${i}`]();
              }
            }}>
            <a
              href={`#tab${uuid}${i}`}>
              {props[`tab${i}`]}
            </a>
          </li>
        );
        tabsContentToRender.push(
          <div key={`content${uuid}${i}`} className={`chi-tabs-panel ${props.activeTab === i ? '-active' : ''}`} id={`tab${uuid}${i}`}></div>
        );
      }
    });

    const initialize = setInterval(() => {
      if (window.chi && document.getElementById(uuid)) {
        window.chi.tab(document.getElementById(uuid));
        clearInterval(initialize);
      }
    }, 100);

  return (
    <div>
      <ul className={`chi-tabs ${props.size ? `-${props.size}` : ''}`} id={uuid}>
        {tabsToRender}
      </ul>
      <div>
        {tabsContentToRender}
      </div>
    </div>
  );
}

Tabs.propTypes = {
  tab1: PropTypes.string,
  tab2: PropTypes.string,
  tab3: PropTypes.string,
  tab4: PropTypes.string,
  tab5: PropTypes.string,
  tab6: PropTypes.string,
  tab7: PropTypes.string,
  tab8: PropTypes.string,
  tab9: PropTypes.string,
  tab10: PropTypes.string,
  activeTab: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  click1: PropTypes.func,
  click2: PropTypes.func,
  click3: PropTypes.func,
  click4: PropTypes.func,
  click5: PropTypes.func,
  click6: PropTypes.func,
  click7: PropTypes.func,
  click8: PropTypes.func,
  click9: PropTypes.func,
  click10: PropTypes.func,
};
/* eslint-enable */

Tabs.defaultProps = {
  tab1: 'Tab 1',
  tab2: 'Tab 2',
  tab3: 'Tab 3',
  activeTab: 1,
};
