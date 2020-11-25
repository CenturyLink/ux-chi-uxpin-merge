import * as PropTypes from 'prop-types';
import * as React from 'react';
import { uuid4 } from '../../utils/utils';

/**
 * @uxpincomponent
 */
export default class Drawer extends React.Component {
  uuid;

  constructor() {
    super();
    this.uuid = uuid4();
  }

/* eslint-disable */
  componentDidMount() {
    const drawer = document.getElementById(this.uuid);
    const showInteraction = this.props.drawerShow;
    const hideInteraction = this.props.drawerHide;

    drawer.addEventListener('chiDrawerShow', () => {
      if (showInteraction) {
        showInteraction();
      }
    });

    drawer.addEventListener('chiDrawerHide', () => {
      if (hideInteraction) {
        hideInteraction();
      }
    });
  }

  render() {
    return (
      <div style={{
        width: '100%',
        height: '1000px'
        }}>
        <chi-drawer
          id={this.uuid}
          position={this.props.position}
          active={this.props.active}
          title={this.props.title}
          backdrop={this.props.backdrop}
          prevent-auto-hide>
          <div className="-sr--only">i</div>
        </chi-drawer>
      </div>
    );
  }
}

Drawer.propTypes = {
  backdrop: PropTypes.oneOf(['', 'inverse', 'backdrop']),
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  active: PropTypes.bool,
  title: PropTypes.string,
  drawerShow: PropTypes.func,
  drawerHide: PropTypes.func,
};
/* eslint-enable */

Drawer.defaultProps = {
  active: true,
  backdrop: 'backdrop',
  position: 'left',
  title: 'Header title goes here',
};
