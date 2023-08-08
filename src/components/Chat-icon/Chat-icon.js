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
          viewBox="0 0 48 52"
          width={size}
          height={size}
          xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="a" cx="24.145" cy="28" r="23.94" fx="24.145" fy="28" gradientTransform="translate(-.095 .057)" gradientUnits="userSpaceOnUse">
              <stop offset=".569" stopColor="gray" stopOpacity=".9" />
              <stop offset=".772" stopColor="#828282" stopOpacity=".882" />
              <stop offset=".845" stopColor="#8b8b8b" stopOpacity=".818" />
              <stop offset=".898" stopColor="#9b9b9b" stopOpacity=".707" />
              <stop offset=".94" stopColor="#b2b2b2" stopOpacity=".547" />
              <stop offset=".975" stopColor="#cfcfcf" stopOpacity=".343" />
              <stop offset="1" stopColor="#ebebeb" stopOpacity=".154" />
            </radialGradient>
          </defs>
          <circle cx="24" cy="28" r="24" fill="url(#a)" />
          <circle cx="24" cy="24" r="24" fill="#0075c9" />
          <path
            fill="#fff"
            // eslint-disable-next-line max-len
            d="M24.252 10.701c-7.815 0-14.15 5.954-14.15 13.299 0 2.478.734 4.789 1.99 6.775a14.433 14.433 0 0 1-2.37 3.573.45.45 0 0 0-.085.494c.07.167.234.274.415.272a12.978 12.978 0 0 0 4.936-1.077c2.484 2.027 5.717 3.262 9.264 3.262 7.815 0 14.15-5.954 14.15-13.299s-6.335-13.299-14.15-13.299Z"
          />
          <circle cx="17.087" cy="24" r="2.49" fill="#e77528" />
          <circle cx="24" cy="24" r="2.49" fill="#e77528" />
          <circle cx="30.913" cy="24" r="2.49" fill="#e77528" />
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
