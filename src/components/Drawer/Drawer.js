import * as PropTypes from 'prop-types';
import * as React from 'react';

export default class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 'left',
      active: true,
      title: 'Title',
      backdrop: 'backdrop',
      content: 'Content',
    };
  }

  componentWillMount() {
    this.setState({
      position: this.props.position,
      active: this.props.active,
      title: this.props.title,
      backdrop: this.props.backdrop,
      content: this.props.content,
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      position: nextProps.position,
      active: nextProps.active,
      title: nextProps.title,
      backdrop: nextProps.backdrop,
      content: nextProps.content,
    });
  }

  render() {
    return (
      <div style={{ width: '100%', height: '100vh' }}>
        <chi-drawer
          position={this.state.position}
          active={this.state.active}
          title={this.state.title}
          backdrop={this.state.backdrop}
          prevent-auto-hide>
          <div className="-px--2 -text">
            {this.state.content}
          </div>
        </chi-drawer>
      </div>
    );
  }
}

/* eslint-disable sort-keys */
Drawer.propTypes = {
  backdrop: PropTypes.oneOf(['', 'inverse', 'backdrop']),
  content: PropTypes.node,
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  active: PropTypes.bool,
  title: PropTypes.string,
};
/* eslint-enable sort-keys */

Drawer.defaultProps = {
  active: true,
  backdrop: 'backdrop',
  content: 'Content goes here',
  position: 'left',
  title: 'Header title goes here',
};
