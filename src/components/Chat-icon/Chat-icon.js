/* eslint-disable react/prop-types */
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { uuid4 } from '../../utils/utils';

/**
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export default class ChatIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: uuid4() };
  }

  componentDidMount() {
    if (this.props.tooltipMessage) {
      const initialize = setInterval(() => {
        if (window.chi && document.getElementById(this.state.id)) {
          window.chi.tooltip(document.getElementById(this.state.id));
          clearInterval(initialize);
        }
      }, 1000);
    }
  }

  render() {
    return (
      <div data-tooltip={this.props.tooltipMessage || null} id={this.state.id}>
        <svg id="Lumen-Chat-Icon" viewBox="0 0 128 128" width={this.props.size} height={this.props.size} xmlns="http://www.w3.org/2000/svg">
          <circle cx="64" cy="64" r="64" fill="#0075c9" />
          {/* eslint-disable-next-line max-len */}
          <path fill="#fff" d="M64.672 28.536c-20.84 0-37.734 15.878-37.734 35.464 0 6.608 1.958 12.77 5.306 18.066a38.488 38.488 0 0 1-6.318 9.528 1.2 1.2 0 0 0-.228 1.32 1.186 1.186 0 0 0 1.106.724c4.566-.078 9.03-1.08 13.164-2.872 6.624 5.404 15.246 8.698 24.704 8.698 20.84 0 37.734-15.878 37.734-35.464s-16.894-35.464-37.734-35.464Z" />
          <circle cx="45.564" cy="64" r="6.638" fill="#e77528" />
          <circle cx="64" cy="64" r="6.638" fill="#e77528" />
          <circle cx="82.436" cy="64" r="6.638" fill="#e77528" />
        </svg>
      </div>
    );
  }
}

ChatIcon.propTypes = {
  tooltipMessage: PropTypes.string,
  size: PropTypes.oneOf(['48', '64']),
};

ChatIcon.defaultProps = {
  tooltipMessage: 'Chat with us',
  size: '64',
};
