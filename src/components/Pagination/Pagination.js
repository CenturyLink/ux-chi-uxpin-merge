import * as PropTypes from 'prop-types';
import * as React from 'react';
import './pagination.css';
import { uuid4 } from '../../utils/utils';

/* eslint-disable */
/**
 * @uxpincomponent
 */
export default class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: uuid4() };
  }

  componentDidMount() {
    setTimeout(() => {
      const pagination = document.getElementById(this.state.id);

      if (pagination) {
        pagination.addEventListener('chiPageChange', (pageChange) => {
          const pageToGo = parseInt(pageChange.detail);

          if (pageToGo < 10) {
            console.log(this.props[`toGo${pageToGo}`]);
            if (this.props[`toGo${pageToGo}`]) {
              this.props[`toGo${pageToGo}`]();
              pagination.setAttribute('current-page', pageToGo);
            }
          }
        });
      }
    }, 1000);
  }
  render() {
    return (
      <chi-pagination
        id={this.state.id}
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

Pagination.propTypes = {
  compact: PropTypes.bool,
  inverse: PropTypes.bool,
  pages: PropTypes.number,
  startEnd: PropTypes.bool,
  currentPage: PropTypes.number,
  pageSize: PropTypes.bool,
  pageJumper: PropTypes.bool,
  results: PropTypes.number,
  toGo1: PropTypes.func,
  toGo2: PropTypes.func,
  toGo3: PropTypes.func,
  toGo4: PropTypes.func,
  toGo5: PropTypes.func,
  toGo6: PropTypes.func,
  toGo7: PropTypes.func,
  toGo8: PropTypes.func,
  toGo9: PropTypes.func,
  toGo10: PropTypes.func,
};
/* eslint-enable */

Pagination.defaultProps = {
  pages: 5,
  currentPage: 3,
};
