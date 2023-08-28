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
    const size = Number(this.props.size.split(' ')[0]);

    return (
      <div data-tooltip={this.props.tooltipMessage || null} id={this.state.id}>
        <svg
          id="chat-icon"
          viewBox="0 0 128 128"
          width={size}
          height={size}
          xmlns="http://www.w3.org/2000/svg"
          filter="url(#multiShadow  )">
          <defs>
            <filter id="multiShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur1" />
              <feOffset in="blur1" dx="0" dy="2" result="offsetBlur1" />
              <feFlood floodColor="rgba(0,0,0,.18)" result="color1" />
              <feComposite in2="offsetBlur1" in="color1" operator="in" result="shadow1" />

              <feGaussianBlur in="SourceAlpha" stdDeviation="5" result="blur2" />
              <feOffset in="blur2" dx="0" dy="6" result="offsetBlur2" />
              <feFlood floodColor="rgba(0,0,0,.10)" result="color2" />
              <feComposite in2="offsetBlur2" in="color2" operator="in" result="shadow2" />

              <feGaussianBlur in="SourceAlpha" stdDeviation="8" result="blur3" />
              <feOffset in="blur3" dx="0" dy="1" result="offsetBlur3" />
              <feFlood floodColor="rgba(0,0,0,.10)" result="color3" />
              <feComposite in2="offsetBlur3" in="color3" operator="in" result="shadow3" />

              <feMerge>
                <feMergeNode in="shadow1" />
                <feMergeNode in="shadow2" />
                <feMergeNode in="shadow3" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <circle cx="64" cy="64" r="64" fill="#0075c9" />
          <path
            fill="#fff"
            // eslint-disable-next-line max-len
            d="M64.672 28.536c-20.84 0-37.734 15.878-37.734 35.464 0 6.608 1.958 12.77 5.306 18.066a38.488 38.488 0 0 1-6.318 9.528 1.2 1.2 0 0 0-.228 1.32 1.186 1.186 0 0 0 1.106.724c4.566-.078 9.03-1.08 13.164-2.872 6.624 5.404 15.246 8.698 24.704 8.698 20.84 0 37.734-15.878 37.734-35.464s-16.894-35.464-37.734-35.464Z"
          />
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
  size: PropTypes.oneOf(['48 - Phone', '64 - Desktop']),
};

ChatIcon.defaultProps = {
  size: '64 - Desktop',
};
