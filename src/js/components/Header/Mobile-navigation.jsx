import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const MobileNavigation = (props) => {
  const { onToggleMenu } = props;
  return (
    <div className="mobile-nav-wrapper">
      <nav className="mobile-nav-list">
        <ul>
          <li>
            <button type="submit" onClick={() => onToggleMenu()}>
              X
            </button>
          </li>
          <li>
            <NavLink exact to="/" onClick={() => onToggleMenu()}>
              home
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => onToggleMenu()}>
              contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => onToggleMenu()}>
              about
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

MobileNavigation.propTypes = {
  onToggleMenu: PropTypes.func,
};

MobileNavigation.defaultProps = {
  onToggleMenu: () => console.log("onToggleMenu didn't pass"),
};

export default withRouter(connect(
  () => ({}),
  dispatch => ({
    onToggleMenu() {
      dispatch({ type: 'MOBILE_NAV_CLICK' });
    },
  }),
)(MobileNavigation));
