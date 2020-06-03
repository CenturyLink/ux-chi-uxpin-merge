import * as PropTypes from 'prop-types';
import * as React from 'react';

export default class Pagination extends React.Component {
    render() {
        const startPage = this.props.startEnd ? <a href="#" className={`chi-button -icon -flat ${this.props.inverse ? '-inverse' : ''}`} aria-label="Start page">
            <div className="chi-button__content">
                <i className="chi-icon icon-page-first" aria-hidden="true"></i>
            </div>
        </a> : null;
        const lastPage = this.props.startEnd ? <a href="#" className={`chi-button -icon -flat ${this.props.inverse ? '-inverse' : ''}`} aria-label="Start page">
            <div className="chi-button__content">
                <i className="chi-icon icon-page-last" aria-hidden="true"></i>
            </div>
        </a> : null;
        const pages = [];
        const pagesToShowHalf = this.props.pagesToShow % 2 === 0 ? this.props.pagesToShow / 2 : (this.props.pagesToShow - 1) / 2;

        for (let i = 0; i < this.props.pages; i++) {
            pages.push(<a
                href="#"
                className={`
                    chi-button -flat
                    ${this.props.inverse ? '-light' : ''}
                    ${i+1 === this.props.currentPage ? '-active' : ''}
                `}>{i+1}</a>);
        }

        return <nav
            className={`
                chi-pagination
                ${this.props.inverse ? '-inverse' : ''}
            `}
            role="navigation"
            aria-label="Pagination">
            <div className="chi-button-group">
                {startPage}
                <a href="#" className={`chi-button -icon -flat ${this.props.inverse ? '-light' : ''}`} aria-label="Previous">
                    <div className="chi-button__content">
                        <i className="chi-icon icon-chevron-left" aria-hidden="true"></i>
                    </div>
                </a>
                {pages}
                <a href="#" className={`chi-button -icon -flat ${this.props.inverse ? '-light' : ''}`}
                   aria-label="Next">
                    <div className="chi-button__content">
                        <i className="chi-icon icon-chevron-right" aria-hidden="true"></i>
                    </div>
                </a>
                {lastPage}
            </div>
        </nav>;
    }
}

/* eslint-disable sort-keys */
Pagination.propTypes = {
    inverse: PropTypes.bool,
    pages: PropTypes.number,
    startEnd: PropTypes.bool,
    currentPage: PropTypes.number,
};
/* eslint-enable sort-keys */

Pagination.defaultProps = {
    pages: 5,
    currentPage: 3
};
