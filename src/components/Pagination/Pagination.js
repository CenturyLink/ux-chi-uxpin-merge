import * as PropTypes from 'prop-types';
import * as React from 'react';
import './pagination.css';

/**
 * @uxpincomponent
 */
export default class Pagination extends React.Component {
  render() {
    return (
      <chi-pagination
        inverse={this.props.inverse}
        pages={this.props.pages}
        first-last={this.props.startEnd}
        current-page={this.props.currentPage}
        compact={this.props.compact}
        page-size={this.props.pageSize}
        page-jumper={this.props.pageJumper}
        results={this.props.results}>
      </chi-pagination>
    );
  }
}

/* eslint-disable sort-keys */
Pagination.propTypes = {
  compact: PropTypes.bool,
  inverse: PropTypes.bool,
  pages: PropTypes.number,
  startEnd: PropTypes.bool,
  currentPage: PropTypes.number,
  pageSize: PropTypes.bool,
  pageJumper: PropTypes.bool,
  results: PropTypes.number,
};
/* eslint-enable sort-keys */

Pagination.defaultProps = {
  pages: 5,
  currentPage: 3,
};
