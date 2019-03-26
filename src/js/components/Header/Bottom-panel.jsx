/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { NavLink, withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MobileNavigation from './Mobile-navigation';

const BottomPanel = (props) => {
  const { isOpenMobileNav, onToggleMenu } = props;
  return (
    <div className="bottom-panel-wrapper container-wrapper">
      <div className="container">
        <div className="bottom-panel">
          <Link to="/" className="main-logo">
              zazend
          </Link>
          <nav className="main-nav">
            <ul>
              <li><NavLink exact to="/">home</NavLink></li>
              <li><NavLink to="/contact">contact</NavLink></li>
              <li><NavLink to="/about">about</NavLink></li>
            </ul>
          </nav>
          <div className="mobile-nav">
            <input
              className="mobile-nav__checkbox"
              type="checkbox"
              id="navigation"
              autoComplete="off"
              checked={isOpenMobileNav}
              onChange={() => onToggleMenu()}
            />
            <label
              htmlFor="navigation"
              className="mobile-nav-btn"
            >
              <span />
            </label>
            <MobileNavigation />
          </div>
        </div>
      </div>
    </div>
  );
};

BottomPanel.propTypes = {
  onToggleMenu: PropTypes.func,
  isOpenMobileNav: PropTypes.bool,
};

BottomPanel.defaultProps = {
  onToggleMenu: () => console.log("onToggleMenu didn't pass"),
  isOpenMobileNav: false,
};

export default withRouter(connect(
  state => ({
    isOpenMobileNav: state.isOpenMobileNav,
  }),
  dispatch => ({
    onToggleMenu() {
      dispatch({ type: 'MOBILE_NAV_CLICK' });
    },
  }),
)(BottomPanel));
