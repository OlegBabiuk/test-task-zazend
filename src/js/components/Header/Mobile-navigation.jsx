import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const MobileNavigation = (props) => {
  const { onToggleMenu } = props;
  return (
    <div className="mobile-nav-wrapper">
      <nav className="mobile-nav-list">
        <ul>
          <li>
            <i
              className="fas fa-times-circle"
              onKeyPress={onToggleMenu}
              role="button"
              tabIndex="0"
              onClick={onToggleMenu}
            />
          </li>
          <li>
            <NavLink exact to="/" onClick={onToggleMenu}>
              home
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={onToggleMenu}>
              contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={onToggleMenu}>
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

export default (MobileNavigation);
