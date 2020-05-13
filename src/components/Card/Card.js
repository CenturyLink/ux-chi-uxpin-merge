import * as PropTypes from 'prop-types';
import * as React from 'react';

export default class Card extends React.Component {
    render() {
        return <div className={`
            chi-card
            ${this.props.portal ? '-portal' : ''}
            `}
            style={{height: '100%', display: 'flex'}}>
            <div className="chi-card__header -sm">
                <div className="chi-card__title">Title</div>
            </div>
            <div className="chi-card__content">
                <div className="chi-card__caption">Aenean pretium massa sed vehicula porta. Phasellus id metus felis. Ut
                    felis magna, facilisis ut malesuada nec.
                </div>
            </div>
        </div>;
    }
}

/* eslint-disable sort-keys */
Card.propTypes = {
    portal: PropTypes.bool,
};
/* eslint-enable sort-keys */

Card.defaultProps = {
};
