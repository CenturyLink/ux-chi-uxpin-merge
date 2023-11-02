import * as PropTypes from 'prop-types';
import * as React from 'react';

/**
 * @uxpincomponent
 */
export default class Modal extends React.Component {
  render() {
    return (
      <div
        className={`chi-backdrop -center
                ${this.props.portal ? '-portal' : ''}
            `}
        style={{ width: '100%', height: '100%' }}>
        <div className="chi-backdrop__wrapper">
          <section
            className={`
                            chi-modal
                            ${this.props.portal ? '-portal' : ''}
                        `}
            role="dialog"
            aria-label="Modal description"
            aria-modal="true">
            <header className="chi-modal__header">
              <h2 className="chi-modal__title">Modal Title</h2>
              <button className="chi-button -icon -close" data-dismiss="modal" aria-label="Close" type="button">
                <div className="chi-button__content">
                  <i className="chi-icon icon-x"></i>
                </div>
              </button>
            </header>
            <div className="chi-modal__content">
              <p className="-text -m--0">Modal content</p>
            </div>
            <footer className="chi-modal__footer">
              <button className="chi-button" data-dismiss="modal" type="button">Cancel</button>
              <button className="chi-button -primary" type="button">Save</button>
            </footer>
          </section>
        </div>
      </div>
    );
  }
}

/* eslint-disable sort-keys */
Modal.propTypes = {
  portal: PropTypes.bool,
};
/* eslint-enable sort-keys */

Modal.defaultProps = {
  portal: true,
};
