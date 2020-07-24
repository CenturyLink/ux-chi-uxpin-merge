import * as PropTypes from 'prop-types';
import * as React from 'react';

/**
 * @uxpincomponent
 */
export default class Modal extends React.Component {
    render() {
        return (
            <div class={`chi-backdrop -center
                ${this.props.portal ? '-portal' : ''}
            `}
            style={{width: '100%', height: '100%'}}>
                <div class="chi-backdrop__wrapper">
                    <section
                        class={`
                            chi-modal
                            ${this.props.portal ? '-portal' : ''}
                        `}
                        role="dialog"
                        aria-label="Modal description"
                             aria-modal="true">
                        <header class="chi-modal__header">
                            <h2 class="chi-modal__title">Modal Title</h2>
                            <button class="chi-button -icon -close" data-dismiss="modal" aria-label="Close">
                                <div class="chi-button__content">
                                    <i class="chi-icon icon-x"></i>
                                </div>
                            </button>
                        </header>
                        <div class="chi-modal__content">
                            <p class="-text -m--0">Modal content</p>
                        </div>
                        <footer class="chi-modal__footer">
                            <button class="chi-button" data-dismiss="modal">Cancel</button>
                            <button class="chi-button -primary">Save</button>
                        </footer>
                    </section>
                </div>
            </div>
        );
    }
}

/* eslint-disable sort-keys */
Modal.propTypes = {
    portal: PropTypes.bool
};
/* eslint-enable sort-keys */

Modal.defaultProps = {
    portal: true
};
