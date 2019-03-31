// Actions
const CLICK = 'MOBILE_NAV_CLICK';

// Reducer
const reduser = (state = false, action) => {
  switch (action.type) {
    case CLICK:
      return !state;
    default:
      return state;
  }
};

// Action Creators
export function toggleMenu() {
  return { type: CLICK };
}

export default reduser;
