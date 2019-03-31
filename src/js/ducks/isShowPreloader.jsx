// Actions
const SHOW = 'SHOW_LOADER';
const HIDDEN = 'HIDDEN_LOADER';

// Reducer
const reduser = (state = true, action) => {
  switch (action.type) {
    case SHOW:
      return true;
    case HIDDEN:
      return false;
    default:
      return state;
  }
};

// Action Creators
export function showLoader() {
  return { type: SHOW };
}

export function hiddenLoader() {
  return { type: HIDDEN };
}

export default reduser;
