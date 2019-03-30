// Actions
const LOADED = 'POSTS_LOADED';

// Reducer
const reduser = (state = [], action) => {
  switch (action.type) {
    case LOADED:
      return [...action.posts];
    default:
      return state;
  }
};

// Action Creators
export function postsLoaded(posts) {
  return { type: LOADED, posts };
}

export default reduser;
