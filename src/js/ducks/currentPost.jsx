// Actions
const LOADED = 'POST_LOADED';

// Reducer
const reduser = (state = {}, action) => {
  switch (action.type) {
    case LOADED:
      return { ...action.post };
    default:
      return state;
  }
};

// Action Creators
export function postLoaded(data) {
  return { type: LOADED, post: { ...data } };
}

export default reduser;
