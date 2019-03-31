import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as paginationActions from '../../ducks/pagination';
import { postsFilter } from '../../sagas/pagination';

const Pagination = ({
  totalPages,
  nextPage,
  prevPage,
  getPage,
  filter,
  currentPage,
}) => {
  const btns = Array(totalPages).fill(null);
  let id = 0;
  return (
    <div className="pagination container-wrapper">
      <div className="container">
        <nav>
          <button
            type="button"
            onClick={() => {
              prevPage();
              filter();
            }}
          >
            <i className="fas fa-angle-double-left" />
          </button>
          {
            btns.map((_btn, index) => (
              <li key={id++}>
                <button
                  className={(index + 1 === currentPage)
                    ? 'active'
                    : ' '}
                  type="button"
                  onClick={() => {
                    getPage(index + 1);
                    filter();
                  }}
                >
                  {index + 1}
                </button>
              </li>
            ))
            }
          <button
            type="button"
            onClick={() => {
              nextPage();
              filter();
            }}
          >
            <i className="fas fa-angle-double-right" />
          </button>
        </nav>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
  getPage: PropTypes.func.isRequired,
  filter: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  totalPages: state.pagination.totalPages,
  currentPage: state.pagination.currentPage,
});
const mapDispatchToProps = {
  nextPage: paginationActions.nextPage,
  prevPage: paginationActions.prevPage,
  getPage: paginationActions.getPage,
  filter: postsFilter,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pagination);
