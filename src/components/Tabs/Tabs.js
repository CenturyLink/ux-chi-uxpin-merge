import * as React from 'react';
import * as PropTypes from 'prop-types';
import { uuid4 } from '../../utils/utils';
import './Tabs.css';

/* eslint-disable */
/**
 * @uxpincomponent
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: uuid4() };
  }

  componentDidMount() {
    const initialize = setInterval(() => {
      if (window.chi && document.getElementById(this.state.id)) {
        window.chi.tab(document.getElementById(this.state.id));
        clearInterval(initialize);
      }
    }, 100);
  }

  render() {
    const tabsToRender = [];
    const tabsContentToRender = [];
    const ITEMS_TO_RENDER = 11;

    Array(ITEMS_TO_RENDER).fill()
      .forEach((_, i) => {
        if (this.props[`tab${i}`]) {
          tabsToRender.push(
            <li
              className={`${this.props.activeTab === i ? '-active' : ''}`}
              key={`tab-${this.state.id}-${i}`}
              onClick={() => {
                if (this.props[`click${i}`]) {
                  this.props[`click${i}`]();
                }
              }}>
              <a
                role="tab"
                href={`#tab-${this.state.id}-${i}`}>
                {this.props[`tab${i}`]}
              </a>
            </li>
          );
        }
        tabsContentToRender.push(
          <div
            key={`content-${this.state.id}-${i}`}
            role="tabpanel"
            className={`chi-tabs-panel ${this.props.activeTab === i ? '-active' : ''}`}
            id={`tab-${this.state.id}-${i}`}>
          </div>
        );
      });


    const tabList = <ul className={`chi-tabs ${this.props.border ? '-border' : ''} ${this.props.size ? `-${this.props.size}` : ''}`} id={this.state.id} role="tablist">
      {tabsToRender}
    </ul>

    return <div ref={this.props.uxpinRef}>
      {tabList}
      {tabsContentToRender}
    </div>;
  }
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
  border: PropTypes.bool,
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
  border: true,
  size: 'md',
};
