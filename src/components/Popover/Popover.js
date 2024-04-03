import React from 'react';
import PropTypes from 'prop-types';
import { uuid4 } from '../../utils/utils';
import { SR_ONLY_CLASS } from '../../constants/classes';

class Popover extends React.Component {
  constructor(props) {
    super(props);
    this.popoverId = `popover-${uuid4()}`;
    this.referenceId = `button-${uuid4()}`;
    this.observer = null;
  }

  componentDidMount() {
    const targetNode = document.getElementById(this.popoverId);
    let transformValue = null;
    let arrowPlacementValue = null;

    const intervalId = setInterval(() => {
      const section = targetNode.querySelector('section');
      transformValue = section?.style.transform;
      arrowPlacementValue = section?.getAttribute('x-placement');

      if (transformValue && arrowPlacementValue) {
        clearInterval(intervalId);
      }
    }, 100);

    this.cleanupInterval = () => clearInterval(intervalId);

    if (targetNode) {
      const config = { attributes: true, childList: true, subtree: true };
      const callback = (mutationsList, observer) => {
        for (const mutation of mutationsList) {
          if (mutation.type === 'attributes') {
            const section = targetNode.querySelector('section');
            if (section && section?.style.transform !== transformValue && arrowPlacementValue && transformValue) {
              section.style.transform = transformValue;
              section.setAttribute('x-placement', arrowPlacementValue);
            }
          }
        }
      };

      this.observer = new MutationObserver(callback);
      this.observer.observe(targetNode, config);
    }
  }

  componentWillUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  render() {
    const text = <p style={{ whiteSpace: 'pre-line' }}>{this.props.text}</p>;
    return (
      <>
        <div style={{ border: '1px solid #e9e9e9', height: '16px', width: '16px' }} id={this.referenceId}>
          <span className={SR_ONLY_CLASS}>i</span>
        </div>
        <chi-popover
          active={this.props.active}
          arrow={this.props.arrow}
          id={this.popoverId}
          position={this.props.position}
          title={this.props.title || null}
          variant="text"
          reference={`#${this.referenceId}`}
          closable={this.props.closeButton}
          prevent-auto-hide={this.props.preventAutoHide}
        >
          {text || ''}
        </chi-popover>
      </>
    );
  }
}

Popover.propTypes = {
  active: PropTypes.bool,
  arrow: PropTypes.bool,
  position: PropTypes.oneOf([
    'top',
    'right',
    'bottom',
    'left',
    'top-start',
    'top-end',
    'right-start',
    'right-end',
    'bottom-start',
    'bottom-end',
    'left-start',
    'left-end',
  ]),
  title: PropTypes.string,
  /**
   * A textArea controller for Text
   * @uxpinpropname text
   * @uxpincontroltype textfield(10)
   * */
  text: PropTypes.string,
  /** @uxpinignoreprop */
  popover: PropTypes.string,
  closeButton: PropTypes.bool,
  preventAutoHide: PropTypes.bool,
};

Popover.defaultProps = {
  active: true,
  arrow: true,
  closeButton: false,
  preventAutoHide: true,
};

export default Popover;
