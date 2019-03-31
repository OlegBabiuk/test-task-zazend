/* eslint-disable no-plusplus */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as paginationActions from '../../ducks/pagination';
import { postsSelect } from '../../sagas/pagination';

const Pagination = ({
  totalPages,
  nextPage,
  prevPage,
  getPage,
  postsDisplay,
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
              postsDisplay();
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
                    postsDisplay();
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
              postsDisplay();
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
  postsDisplay: PropTypes.func.isRequired,
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
  postsDisplay: postsSelect,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pagination);
