const isOpenMobileNav = (state = false, action) => {
  if (action.type === 'MOBILE_NAV_CLICK') {
    return !state;
  }
  return state;
};

export default isOpenMobileNav;
