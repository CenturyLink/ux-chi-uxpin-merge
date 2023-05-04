import * as React from 'react';
import * as PropTypes from 'prop-types';
import { uuid4 } from '../../utils/utils';
// import { TABS_CLASSES } from '../../constants/classes';
import './Tabs.css';

/* eslint-disable */
/**
 * @uxpincomponent
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export default class Tabs extends React.Component {
  key = 0;

  constructor(props) {
    super(props);
    this.state = { id: uuid4() };
  }

  componentDidMount() {
    const initialize = setInterval(() => {
      if (window.chi && document.getElementById('example__tabbed_navigation_flat')) {
        const tabbedNavigationFlatElement = document.querySelector('#example__tabbed_navigation_flat');
        console.log('here', tabbedNavigationFlatElement);
        tabbedNavigationFlatElement.tabs = [
          {
            label: 'Active Tab',
            id: 'tab-a',
          },
          {
            label: 'Tab Link',
            id: 'tab-b',
          },
          {
            label: 'Tab Link',
            id: 'tab-c',
          },
          {
            label: 'Tab Link',
            id: 'tab-d',
          },
          {
            label: 'Tab Link',
            id: 'tab-e',
          },
        ];
        clearInterval(initialize);
      }
    }, 100);
  }

  render() {  
    this.key += 1;
  
    return (
      <div 
        ref={this.props.uxpinRef}
        key={this.key}
      >
        <chi-tabs
          active-tab='tab-a'
          id='example__tabbed_navigation_flat'
          sliding-border
        ></chi-tabs>
      </div>
    );
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
  vertical: PropTypes.bool,
  activeTab: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  // border: PropTypes.bool,
  style: PropTypes.oneOf(['flat', 'solid']),
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
  style: 'flat',
  // border: true,
  size: 'md',
};
